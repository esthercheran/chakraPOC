// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import Button from './components/button'
import Avatar from './components/avatar'
import Checkbox from './components/checkbox'
import Tag from './components/tag'
import getChakraSemanticTokens from '../getChakraSemanticTokens'
import figmaTokensJson from '../figmaTokens.json'
const semanticTokens = getChakraSemanticTokens(figmaTokensJson)

const overrides = {
  styles,
  semanticTokens,
  // Other foundational style overrides go here
  components: {
    Button,
    Avatar,
    Checkbox,
    Tag
    // Other components go here
  }
}

export default extendTheme(overrides)
