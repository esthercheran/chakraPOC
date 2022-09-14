import { ComponentStyleConfig, SliderProvider } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/react'
const $size = cssVar("checkbox-size")
const Checkbox: ComponentStyleConfig = {
  // The styles all Checkbox have in common
  parts:['control','label','icon'],
  // baseStyle: {
  //   borderRadius: 'semantic.border-radius.inputs',
  //   Width: 'checkbox.border-width',
  //   _checked: {
  //     bg: 'btn-negative-default-background-color',
  //     borderColor: 'btn-primary-default-background-color',
  //     color: 'btn-primary-default-background-color',
  //   }
  // },
  // Three sizes: sm md and large 
  // sizes: {
  //   small: {
  //       height:'checkbox.sm.checkmark.height',
  //       width:'checkbox.sm.checkmark.width'
  //   },
  //   md: {
  //       height:'checkbox.md.checkmark.height',
  //       width:'checkbox.md.checkmark.width'
  //   },
  //   lg: {
  //       height:'checkbox.lg.checkmark.height',
  //       width:'checkbox.lg.checkmark.width'
  //   }
  // },
  sizes: {
    sm: ({
      control: { 
        [$size.variable]:'btn-xs-height',
        width:'checkbox.sm.checkmark.width' },
      label: { fontSize: "btn-xs-text-size" },
      icon: { fontSize: "3xs" },
    }),
    md: ({
      control: { 
        height:'checkbox.sm.checkmark.height',
        width:'checkbox.sm.checkmark.width'
      },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: ({
      control: { 
        height:'checkbox.sm.checkmark.height',
        width:'checkbox.sm.checkmark.width'
       },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  // Two variants: Checked and Unchecked
  variants: {
    selected: {
      _checked:{
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
