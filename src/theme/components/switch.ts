import { ComponentStyleConfig, SliderProvider } from '@chakra-ui/react'

const Switch: ComponentStyleConfig = {
  // The styles all switch have in common
  baseStyle: {
    borderRadius: 'switch.border-radius'
  },
  // Three sizes: sm md and lg
  sizes: {  
    small: {
        switch:{
        height:'switch.sm.height',
        width:'switch.sm.width'
        },
        thumb:{
        height:'switch.sm.thumb.height',
        width:'switch.sm.thumb.width'
        }
    },
    md: {
        switch:{
            height:'switch.md.height',
            width:'switch.md.width'
            },
            thumb:{
            height:'switch.md.thumb.height',
            width:'switch.md.thumb.width'
            }
    },
    lg: {
        switch:{
            height:'switch.lg.height',
            width:'switch.lg.width'
            },
            thumb:{
            height:'switch.lg.thumb.height',
            width:'switch.lg.thumb.width'
            }
    }
  },
  // Two variants: Selected and UnSelected
  variants: {
    unSelected: {

        _defaut:{
            switch:{
      bg: 'radio.unselected.default.background-color'
            },
            thumb:{
      bg:'switch.thumb.unselected.default.background-color'
            }
        },

      _disabled: {
        switch:{
        bg: 'radio.unselected.disabled.background-color'
              },
        thumb:{
        bg:'switch.thumb.unselected.default.background-color'
              }
      }

    },
    selected: {

        _default:{
            switch:{
      bg: 'radio.selected.default.background-color'
            },
        thumb:{
      bg:'switch.thumb.selected.default.background-color'
        }
        },

      _disabled: {
        switch:{
        bg: 'radio.selected.disabled.background-color'
        },
        thumb:{
            bgThumb:'switch.thumb.selected.default.background-color'
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    variant: 'unchecked'
  }
}
}

export default Switch
