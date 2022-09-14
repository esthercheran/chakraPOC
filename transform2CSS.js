const fs = require('fs')
const _ = require('lodash')
const StyleDictionary = require('style-dictionary')
const { Parser } = require('expr-eval')
const { parseToRgba } = require('color2k')
const path = require('path')
const { type } = require('os')

console.log('Build started...')
console.log('\n==============================================')

const themeFiles = {}

const tokenTypes = {
  color: 'colors',
  borderRadius: 'radii',
  fontFamilies: 'fonts',
  fontWeights: 'fontWeights',
  spacing: 'space',
  lineHeights: 'lineHeights',
  sizing: 'sizes',
  borderWidth: 'borders',
  fontSizes: 'fontSizes'
}

const fontWeightMap = {
  thin: 100,
  extralight: 200,
  ultralight: 200,
  extraleicht: 200,
  light: 300,
  leicht: 300,
  normal: 400,
  regular: 400,
  buch: 400,
  medium: 500,
  kraeftig: 500,
  kräftig: 500,
  semibold: 600,
  demibold: 600,
  halbfett: 600,
  bold: 700,
  dreiviertelfett: 700,
  extrabold: 800,
  ultabold: 800,
  fett: 800,
  black: 900,
  heavy: 900,
  super: 900,
  extrafett: 900,
  SemiBold: 600
}

/**
 * Helper: Transforms math like Figma Tokens
 */

const parser = new Parser()

function checkAndEvaluateMath(expr) {
  try {
    parser.evaluate(expr)
    return +parser.evaluate(expr).toFixed(3)
  } catch (ex) {
    return expr
  }
}

/**
 * Helper: Transforms dimensions to px
 */
function transformDimension(value) {
  if (value.endsWith('px')) {
    return value
  }
  return value + 'px'
}

/**
 * Helper: Transforms letter spacing % to em
 */
function transformLetterSpacing(value) {
  if (value.endsWith('%')) {
    const percentValue = value.slice(0, -1)
    return `${percentValue / 100}em`
  }
  return value
}

/**
 * Helper: Transforms letter spacing % to em
 */
function transformFontWeights(value) {
  const mapped = fontWeightMap[value.toLowerCase()]
  return `${mapped}`
}

/**
 * Helper: Transforms hex rgba colors used in figma tokens: rgba(#ffffff, 0.5) =? rgba(255, 255, 255, 0.5). This is kind of like an alpha() function.
 */
function transformHEXRGBa(value) {
  if (value.startsWith('rgba(#')) {
    const [hex, alpha] = value.replace(')', '').split('rgba(').pop().split(', ')
    const [r, g, b] = parseToRgba(hex)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return value
  }
}

/**
 * Helper: Transforms boxShadow object to shadow shorthand
 * This currently works fine if every value uses an alias, but if any one of these use a raw value, it will not be transformed.
 */
function transformShadow(shadow) {
  const { x, y, blur, spread, color } = shadow
  return `${x} ${y} ${blur} ${spread} ${color}`
}

/**
 * Transform typography shorthands for css variables
 */
StyleDictionary.registerTransform({
  name: 'typography/shorthand',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'typography',
  transformer: (token) => {
    const { fontWeight, fontSize, lineHeight, fontFamily } = token.original.value
    return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`
  }
})

/**
 * Transform shadow shorthands for css variables
 */
StyleDictionary.registerTransform({
  name: 'shadow/shorthand',
  type: 'value',
  transitive: true,
  matcher: (token) => ['boxShadow'].includes(token.type),
  transformer: (token) => {
    return Array.isArray(token.original.value) ? token.original.value.map((single) => transformShadow(single)).join(', ') : transformShadow(token.original.value)
  }
})

/**
 * Transform fontSizes to px
 */
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  transitive: true,
  matcher: (token) => ['fontSizes', 'dimension', 'borderRadius', 'spacing', 'sizing', 'borderWidth'].includes(token.type),
  transformer: (token) => transformDimension(token.value)
})

/**
 * Transform letterSpacing to em
 */
StyleDictionary.registerTransform({
  name: 'size/letterspacing',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'letterSpacing',
  transformer: (token) => transformLetterSpacing(token.value)
})

/**
 * Transform fontWeights to numerical
 */
StyleDictionary.registerTransform({
  name: 'type/fontWeight',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'fontWeights',
  transformer: (token) => transformFontWeights(token.value)
})

/**
 * Transform rgba colors to usable rgba
 */
StyleDictionary.registerTransform({
  name: 'color/hexrgba',
  type: 'value',
  transitive: true,
  matcher: (token) => typeof token.value === 'string' && token.value.startsWith('rgba(#'),
  transformer: (token) => transformHEXRGBa(token.value)
})

/**
 * Transform to resolve math across all tokens
 */
StyleDictionary.registerTransform({
  name: 'resolveMath',
  type: 'value',
  transitive: true,
  matcher: (token) => token,
  // Putting this in strings seems to be required
  transformer: (token) => `${checkAndEvaluateMath(token.value)}`
})

/**
 * Format for chakra json
 */
StyleDictionary.registerFormat({
  name: 'json/variables',
  formatter: function (dictionary, config) {
    let themeName = this.selector
    let result = '{'
    Object.keys(tokenTypes).forEach(function (key) {
      result += `\n  "${tokenTypes[key]}": {`
      result += `\n    "${themeName}": {`
      dictionary.allProperties.map((props) => {
        if (props.type === key) {
          result += `\n      "${props.name}": "${props.value}",`
        }
      })
      if (result[result.length - 1] === ',') result = result.slice(0, result.length - 1)
      result += `\n    }`
      result += `\n  },`
    })
    result = result.slice(0, result.length - 1)
    result += '\n}'
    themeFiles[themeName] = JSON.parse(result)
    return result
  }
})

function convertToVariableIfNeeded(value) {
  if (value.startsWith('{') && value.endsWith('}')) {
    return `var(${value.slice(1, -1).replace('.', '-')})`
  }
  return value
}

/**
 * Format for css typography classes
 * This generates theme-independent css classes so we're fine with just using css variables here
 * We're using the css shorthand to define the font: property and define all other values according to the typography token
 */
StyleDictionary.registerFormat({
  name: 'css/typographyClasses',
  formatter: (dictionary, config) =>
    dictionary.allProperties
      .map(
        (prop) => `
        .${prop.name} {
          font: var(--${prop.name});
          letter-spacing: ${convertToVariableIfNeeded(prop.original.value.letterSpacing)};
          text-transform: ${convertToVariableIfNeeded(prop.original.value.textCase)};
          text-decoration: ${convertToVariableIfNeeded(prop.original.value.textDecoration)};
        }`
      )
      .join('\n')
})

function getStyleDictionaryConfig(themeName, themeTokenSets) {
  return {
    source: themeTokenSets,
    platforms: {
      css: {
        transforms: ['resolveMath', 'size/px', 'size/letterspacing', 'type/fontWeight', 'color/hexrgba', 'typography/shorthand', 'shadow/shorthand', 'name/cti/kebab'],
        buildPath: `dist/json/`,
        files: [
          {
            destination: `${themeName}.json`,
            format: 'json/variables',
            selector: `${themeName}`
          }
        ]
      }
    }
  }
}

const configBlob = fs.readFileSync('config.json')
const config = JSON.parse(configBlob)
const dirPath = config.tokenSetsDirPath
const themeMetaBlob = fs.readFileSync(config.tokenSetsThemeMetaPath)
const themeMeta = JSON.parse(themeMetaBlob)
const themeList = []

themeMeta.forEach((theme) => {
  const { name: themeName, selectedTokenSets } = theme
  themeList.push(themeName)
  const filteredTokenSets = selectedTokenSets ? _.filter(Object.keys(selectedTokenSets), (key) => selectedTokenSets[key] !== 'disabled') : []
  const themeTokenSets = _.map(filteredTokenSets, (set) => dirPath + '/' + set + '.json')
  const themeConfig = getStyleDictionaryConfig(themeName, themeTokenSets)
  const SD = StyleDictionary.extend(themeConfig)
  SD.buildAllPlatforms()
})

let themeInfo = {}

Object.keys(tokenTypes).forEach(function (key) {
  themeInfo[tokenTypes[key]] = {}
})

themeList.map((theme) => {
  const info = themeFiles[theme]
  Object.keys(tokenTypes).forEach(function (key) {
    if (info[tokenTypes[key]][theme] !== {}) themeInfo[tokenTypes[key]][theme] = info[tokenTypes[key]][theme]
  })
})

fs.writeFileSync('./src/figmaTokens.json', JSON.stringify(themeInfo, null, 2))

console.log('\n==============================================')
console.log('\nBuild completed!')
