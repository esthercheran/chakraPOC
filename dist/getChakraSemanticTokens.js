// src/getChakraSemanticTokens.ts
var getChakraSemanticTokens = (figmaTokens) => {
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
      if (category === "colors") {
        for (const token in figmaTokens[category].light) {
          semanticTokens[category][token] = {
            default: figmaTokens[category].light[token],
            _dark: figmaTokens[category].dark[token]
          };
        }
      } else {
        const tokens = figmaTokens[category].light || figmaTokens[category];
        for (const token in tokens) {
          semanticTokens[category][token] = tokens[token];
        }
      }
    }
  }
  return semanticTokens;
};
var getChakraSemanticTokens_default = getChakraSemanticTokens;
export {
  getChakraSemanticTokens_default as default
};
