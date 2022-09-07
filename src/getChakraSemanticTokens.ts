//@ts-nocheck

interface SemanticTokens {
  colors: Record<string, any>
  radii: Record<string, any>
  shadows: Record<string, any>
  fontSizes: Record<string, any>
  borders: Record<string, any>
  sizes: Record<string, any>
  fonts: Record<string, any>
  space: Record<string, any>
  lineHeights: Record<string, any>
  fontWeights: Record<string, any>
}

export default (figmaTokens: any): SemanticTokens => {
  const semanticTokens: SemanticTokens = {
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
  }

  for (const category in figmaTokens) {
    for (const property in figmaTokens[category]) {
      if (property === 'light') {
        for (const token in figmaTokens[category].light) {
          semanticTokens[category][token] = {
            default: figmaTokens[category].light[token],
            _dark: figmaTokens[category].dark[token]
          }
        }
      } else if (property !== 'dark') {
        semanticTokens[category][property] = figmaTokens[category][property]
      }
    }
  }

  return semanticTokens
}
