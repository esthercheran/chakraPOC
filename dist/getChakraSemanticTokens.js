// src/getChakraSemanticTokens.ts
var getChakraSemanticTokens_default = (figmaTokens) => {
  const semanticTokens = {
    radii: {},
    colors: {},
    shadows: {},
    fonts: {},
    fontWeights: {},
    space: {},
    lineHeights: {},
    sizes: {},
    borders: {},
    fontSizes: {}
  };
  for (const category in figmaTokens) {
    for (const property in figmaTokens[category]) {
      if (property === "light") {
        for (const token in figmaTokens[category].light) {
          semanticTokens[category][token] = {
            default: figmaTokens[category].light[token],
            _dark: figmaTokens[category].dark[token]
          };
        }
      } else if (property !== "dark") {
        semanticTokens[category][property] = figmaTokens[category][property];
      }
    }
  }
  return semanticTokens;
};
export {
  getChakraSemanticTokens_default as default
};
