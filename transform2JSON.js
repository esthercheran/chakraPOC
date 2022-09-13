const fs = require("fs");
const _ = require("lodash");
const StyleDictionary = require("style-dictionary");
const path = require("path");

console.log("Build started...");
console.log("\n==============================================");

const tokenTypes = {
  color: "colors",
  borderRadius: "radii",
  fontFamilies: "fonts",
  fontWeights: "fontWeights",
  spacing: "spaces",
  lineHeights: "lineHeights",
  sizing: "sizes",
};

/**
 * Format for json variables
 */
StyleDictionary.registerFormat({
  name: "json/variables",
  formatter: function (dictionary, config) {
    let themeName = this.selector;
    let result = "{";
    Object.keys(tokenTypes).forEach(function (key) {
      result += `\n  "${tokenTypes[key]}": {`;
      result += `\n    "${themeName}": {`;
      dictionary.allProperties.map((props) => {
        if (props.type === key) {
          result += `\n      "${props.name}": "${props.value}",`;
        }
      });
      if (result[result.length - 1] === ",")
        result = result.slice(0, result.length - 1);
      result += `\n    }`;
      result += `\n  },`;
    });
    result = result.slice(0, result.length - 1);
    result += "\n}";
    return result;
  },
});

function getStyleDictionaryConfig(themeName, themeTokenSets) {
  return {
    source: themeTokenSets,
    platforms: {
      css: {
        transforms: ["name/cti/kebab"],
        buildPath: `dist/json/`,
        files: [
          {
            destination: `${themeName}.json`,
            format: "json/variables",
            selector: `${themeName}`,
          },
        ],
      },
    },
  };
}

const configBlob = fs.readFileSync("config.json");
const config = JSON.parse(configBlob);
const dirPath = config.tokenSetsDirPath;
const themeMetaBlob = fs.readFileSync(config.tokenSetsThemeMetaPath);
const themeMeta = JSON.parse(themeMetaBlob);
const themeList = [];

const themeOutput = themeMeta.map((theme) => {
  const { name: themeName, selectedTokenSets } = theme;
  themeList.push(themeName);
  const filteredTokenSets = selectedTokenSets
    ? _.filter(
        Object.keys(selectedTokenSets),
        (key) => selectedTokenSets[key] !== "disabled"
      )
    : [];
  const themeTokenSets = _.map(
    filteredTokenSets,
    (set) => dirPath + "/" + set + ".json"
  );
  console.log("themeTokenSets:", themeTokenSets);
  const themeConfig = getStyleDictionaryConfig(themeName, themeTokenSets);
  const SD = StyleDictionary.extend(themeConfig);
  SD.buildAllPlatforms();
  return {
    name: themeName,
    class: themeName,
    color: "#ff00ff",
    path: `${themeConfig.platforms.css.buildPath}${themeName}.json`,
  };
});

fs.writeFileSync("dist/themes-storybook.json", JSON.stringify(themeOutput));

let themeInfo = {};

Object.keys(tokenTypes).forEach(function (key) {
  themeInfo[tokenTypes[key]] = {};
});

themeList.map((theme) => {
  const info = JSON.parse(fs.readFileSync(`./dist/json/${theme}.json`));
  Object.keys(tokenTypes).forEach(function (key) {
    if (info[tokenTypes[key]][theme] !== {})
      themeInfo[tokenTypes[key]][theme] = info[tokenTypes[key]][theme];
  });
});

fs.writeFileSync("./figmaTokens.json", JSON.stringify(themeInfo, null, 2));

console.log("\n==============================================");
console.log("\nBuild completed!");
