import { ComponentStyleConfig } from '@chakra-ui/react'

// You can also use the more specific type for
// a multipart component: ComponentMultiStyleConfig
const Checkbox: ComponentStyleConfig = {
  // All parts of multipart components can be found in the @chakra-ui/anatomy package,
  // the menuAnatomy has as well these parts: button, list, groupTitle, command, divider
  parts: ['control', 'label', 'icon'],
  baseStyle: {
    control: {
      background: 'green',
      borderColor: 'grey',
      _checked: {
        background: 'blue',
        borderColor: 'cyan',
        _hover: {
          background: '#bada55',
          borderColor: 'black'
        }
      },
      _indeterminate: {
        background: 'purple'
      },
      _invalid: {
        background: 'orange'
      },
      _focusVisible: {}
    },
    label: {
      color: 'red'
    },
    icon: {}
  },
  sizes: {
    sm: {
      control: {
        height: '12px',
        width: '12px'
      },
      label: {
        fontSize: '12px'
      },
      icon: {}
    },
    md: {
      control: {
        height: '16px',
        width: '16px'
      },
      label: {
        fontSize: '16px'
      },
      icon: {}
    },
    lg: {
      control: {
        height: '18px',
        width: '18px'
      },
      label: {
        fontSize: '18px'
      },
      icon: {}
    }
  },
  variants: {
    bold: {
      control: {
        // these 4 are from the tokens json just wanted to make sure tokens work too
        background: 'color-rose-700',
        borderColor: 'color-rose-900',
        _checked: {
          background: 'semantic-warning-fg',
          borderColor: 'semantic-warning-emphasised',
          _hover: {}
        },
        _indeterminate: {},
        _invalid: {},
        _focusVisible: {}
      },
      label: {
        color: 'blue'
      },
      icon: {}
    },
    colorful: {
      control: {},
      label: {},
      icon: {}
    }
  },
  defaultProps: {
    size: 'md'
  }
}

export default Checkbox
