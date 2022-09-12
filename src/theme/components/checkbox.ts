import { ComponentStyleConfig, SliderProvider } from '@chakra-ui/react'

const Checkbox: ComponentStyleConfig = {
  // The styles all Checkbox have in common
  baseStyle: {
    borderRadius: 'semantic.border-radius.inputs',
    borderWidth: 'checkbox.border-width'
  },
  // Three sizes: sm md and large 
  sizes: {
    small: {
        checkmarkHeight:'checkbox.sm.checkmark.height',
        checkmarkWidth:'checkbox.sm.checkmark.width'
    },
    md: {
        checkmarkHeight:'checkbox.md.checkmark.height',
        checkmarkWidth:'checkbox.md.checkmark.width'
    },
    lg: {
        checkmarkHeight:'checkbox.lg.checkmark.height',
        checkmarkWidth:'checkbox.lg.checkmark.width'
    }
  },
  // Two variants: Checked and Unchecked
  variants: {
    selected: {
        _defaut:{
      bg: 'checkbox.selected.default.background-color',
     iconColor: 'checkbox.checkmark.selected.default.icon-color',
      borderColor: 'checkbox.selected.default.border-color'
        },
      _invalid: {
      },
      _hover: {
        bg: 'checkbox.selected.hover.background-color',
     iconColor: 'checkbox.checkmark.selected.hover.icon-color',
      borderColor: 'checkbox.selected.hover.border-color'
      },
      _disabled: {
        bg: 'checkbox.selected.disabled.background-color',
     iconColor: 'checkbox.checkmark.selected.disabled.icon-color',
      borderColor: 'checkbox.selected.disabled.border-color'
      }
    },
    unselected: {
        _default:{
      bg: 'checkbox.unselected.default.background-color',
      borderColor: 'checkbox.unselected.default.border-color',
        },
        _invalid: {
            bg: 'checkbox.unselected.error.background-color',
            borderColor: 'checkbox.unselected.error.border-color',
      },
      _disabled: {
        bg: 'checkbox.unselected.disabled.background-color',
            borderColor: 'checkbox.unselected.disabled.border-color',
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    variant: 'unselected'
  }
}

export default Checkbox
