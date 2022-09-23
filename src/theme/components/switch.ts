import { ComponentStyleConfig } from '@chakra-ui/react'

const Switch: ComponentStyleConfig = {
  // declaring parts of switch
  parts: ['track', 'thumb'],
  // The styles all switch have in common
  baseStyle: {
    track: {
      borderRadius: '100px',
      borderColor: 'switch-default-border-color',
      bg: 'gray',
      _checked: {
        borderColor: 'switch-default-border-color',
        bg: 'yellow'
      }
    },
    thumb: {
      borderRadius: 'switch-border-radius',
      borderColor: 'switch-thumb-unselected-default-background-color',
      bg: 'red',
      _checked: {
        borderColor: 'switch-default-border-color',
        bg: 'switch-thumb-selected-default-background-color'
      }
    }
  },
  // Three sizes: sm md and lg
  sizes: {
    sm: {
      track: {
        height: '16px',
        width: '26px'
      },
      thumb: {
        height: '10px',
        width: '10px'
      }
    },
    md: {
      track: {
        height: 'switch.md.height',
        width: 'switch.md.width'
      },
      thumb: {
        height: 'switch.md.thumb.height',
        width: 'switch.md.thumb.width'
      }
    },
    lg: {
      track: {
        height: 'switch.lg.height',
        width: 'switch.lg.width'
      },
      thumb: {
        height: 'switch.lg.thumb.height',
        width: 'switch.lg.thumb.width'
      }
    }
  }
  // Two variants: Selected and UnSelected
  //   variants: {
  //     unSelected: {

  //         _defaut:{
  //             switch:{
  //       bg: 'radio.unselected.default.background-color'
  //             },
  //             thumb:{
  //       bg:'switch.thumb.unselected.default.background-color'
  //             }
  //         },

  //       _disabled: {
  //         switch:{
  //         bg: 'radio.unselected.disabled.background-color'
  //               },
  //         thumb:{
  //         bg:'switch.thumb.unselected.default.background-color'
  //               }
  //       }

  //     },
  //     selected: {

  //         _default:{
  //             switch:{
  //       bg: 'radio.selected.default.background-color'
  //             },
  //         thumb:{
  //       bg:'switch.thumb.selected.default.background-color'
  //         }
  //         },

  //       _disabled: {
  //         switch:{
  //         bg: 'radio.selected.disabled.background-color'
  //         },
  //         thumb:{
  //             bgThumb:'switch.thumb.selected.default.background-color'
  //       }
  //     }
  //   },
  //   // The default size and variant values
  //   defaultProps: {
  //     variant: 'unchecked'
  //   }
  // }
}

export default Switch
