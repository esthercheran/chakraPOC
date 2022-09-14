import { ComponentStyleConfig } from '@chakra-ui/react'

const Avatar: ComponentStyleConfig = {
  // The styles all Checkbox have in common
  baseStyle: {
    borderRadius: 'avatar-border-radius',
    // bg: 'btn-primary-default-background-color',
    borderColor: 'btn-primary-default-background-color'
    // Width: 'checkbox.border-width'
  },
  // Three sizes: sm md and large 
  // sizes: {
  //   sm: {
  //       height:'avatar-s-height',
  //       width:'avatar-s-width'
  //   },
  //   md: {
  //       height:'avatar-m-height',
  //       width:'avatar-m-height'
  //   },
  //   lg: {
  //     height:'avatar-l-height',
  //     width:'avatar-l-height'
  //   }
  // },
  // Two variants: Checked and Unchecked
  // variants: {
  //   selected: {
  //       _defaut:{
  //     bg: 'checkbox.selected.default.background-color',
  //    iconColor: 'checkbox.checkmark.selected.default.icon-color',
  //     borderColor: 'checkbox.selected.default.border-color'
  //       },
  //     _invalid: {
  //     },
  //     _hover: {
  //       bg: 'checkbox.selected.hover.background-color',
  //    iconColor: 'checkbox.checkmark.selected.hover.icon-color',
  //     borderColor: 'checkbox.selected.hover.border-color'
  //     },
  //     _disabled: {
  //       bg: 'checkbox.selected.disabled.background-color',
  //    iconColor: 'checkbox.checkmark.selected.disabled.icon-color',
  //     borderColor: 'checkbox.selected.disabled.border-color'
  //     }
  //   },
  //   unselected: {
  //       _default:{
  //     bg: 'checkbox.unselected.default.background-color',
  //     borderColor: 'checkbox.unselected.default.border-color',
  //       },
  //       _invalid: {
  //           bg: 'checkbox.unselected.error.background-color',
  //           borderColor: 'checkbox.unselected.error.border-color',
  //     },
  //     _disabled: {
  //       bg: 'checkbox.unselected.disabled.background-color',
  //           borderColor: 'checkbox.unselected.disabled.border-color',
  //     }
  //   }
  // },
  // The default size and variant values
  defaultProps: {
  }
}

export default Avatar
