import { ComponentStyleConfig, SliderProvider } from '@chakra-ui/react'

const Checkbox: ComponentStyleConfig = {
  // The styles all Input have in common
  baseStyle: {
    borderRadius: 'input.border-radius',
    borderWidth: 'input.border-width',
    fontFamily:'semantic.font-family.inputs',
    fontWeight:'semantic.font-weight.inputs'

  },
  // Three sizes: sm md and lg  
  sizes: {
    small: {
        inputHeight:'input.sm.height',
        iconSize:'input.sm.icon-size',
        fontSize:'input.sm.font-size',
        height:'input.sm.height',
        paddingRight:'input.sm.padding-right',
        paddingLeft:'input.sm.padding-left'
    },
    md: {
        inputHeight:'input.md.height',
        iconSize:'input.md.icon-size',
        fontSize:'input.md.font-size',
        height:'input.sm.height',
        paddingRight:'input.sm.padding-right',
        paddingLeft:'input.sm.padding-left'
    },
    lg: {
        inputHeight:'input.lg.height',
        iconSize:'input.lg.icon-size',
        fontSize:'input.md.font-size',
        height:'input.sm.height',
        paddingRight:'input.sm.padding-right',
        paddingLeft:'input.sm.padding-left'
    }
  },
  // four variants: outlined,filled,flushed and addonOutlined
  variants: {
    outlined: {
        _defaut:{
      bg: 'input.default.outlined.background-color',
     iconColor: 'input.default.outlined.icon-color',
      borderColor: 'input.default.outlined.border-color',
      itemSpacing:'input.space-between',
      textColor:'input.default.outlined.text-color'
        },
      _hover: {
        bg: 'input.hover.outlined.background-color',
        iconColor: 'input.hover.outlined.icon-color',
         borderColor: 'input.default.outlined.border-color',
         itemSpacing:'input.space-between',
         textColor:'input.hover.outlined.text-color'
      },
      _focus: {
        bg: 'input.focus.outlined.background-color',
        iconColor: 'input.focus.outlined.icon-color',
         borderColor: 'input.focus.outlined.border-color',
         itemSpacing:'input.space-between',
         textColor:'input.focus.outlined.text-color'
      },
      _invalid: {
        bg: 'input.invalid.outlined.background-color',
        iconColor: 'input.invalid.outlined.icon-color',
         borderColor: 'input.invalid.outlined.border-color',
         itemSpacing:'input.space-between',
         textColor:'input.invalid.outlined.text-color'
      },
      _disabled: {
        bg: 'input.disabled.outlined.background-color',
        iconColor: 'input.disabled.outlined.icon-color',
         borderColor: 'input.disabled.outlined.border-color',
         itemSpacing:'input.space-between',
         textColor:'input..outlined.text-color'
    }
},
filled: {
    _defaut:{
  bg: 'input.default.filled.background-color',
 iconColor: 'input.default.filled.icon-color',
  borderColor: 'input.default.filled.border-color',
  itemSpacing:'input.space-between',
  textColor:'input.default.filled.text-color'
    },
  _hover: {
    bg: 'input.hover.filled.background-color',
    iconColor: 'input.hover.filled.icon-color',
     borderColor: 'input.default.filled.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.hover.filled.text-color'
  },
  _focus: {
    bg: 'input.focus.filled.background-color',
    iconColor: 'input.focus.filled.icon-color',
     borderColor: 'input.focus.filled.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.focus.filled.text-color'
  },
  _invalid: {
    bg: 'input.invalid.filled.background-color',
    iconColor: 'input.invalid.filled.icon-color',
     borderColor: 'input.invalid.filled.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.invalid.filled.text-color'
  },
  _disabled: {
    bg: 'input.disabled.filled.background-color',
    iconColor: 'input.disabled.filled.icon-color',
     borderColor: 'input.disabled.filled.border-color',
     itemSpacing:'input.space-between',
     textColor:'input..filled.text-color'
}
},
flushed: {
    _defaut:{
  bg: 'input.default.flushed.background-color',
 iconColor: 'input.default.flushed.icon-color',
  borderColor: 'input.default.flushed.border-color',
  itemSpacing:'input.space-between',
  textColor:'input.default.flushed.text-color'
    },
  _hover: {
    bg: 'input.hover.flushed.background-color',
    iconColor: 'input.hover.flushed.icon-color',
     borderColor: 'input.default.flushed.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.hover.flushed.text-color'
  },
  _focus: {
    bg: 'input.focus.flushed.background-color',
    iconColor: 'input.focus.flushed.icon-color',
     borderColor: 'input.focus.flushed.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.focus.flushed.text-color'
  },
  _invalid: {
    bg: 'input.invalid.flushed.background-color',
    iconColor: 'input.invalid.flushed.icon-color',
     borderColor: 'input.invalid.flushed.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.invalid.flushed.text-color'
  },
  _disabled: {
    bg: 'input.disabled.flushed.background-color',
    iconColor: 'input.disabled.flushed.icon-color',
     borderColor: 'input.disabled.flushed.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.flushed.text-color'
}
},
addonOutlined: {
    _defaut:{
  bg: 'input.default.outlined.background-color',
 iconColor: 'input.default.outlined.icon-color',
  borderColor: 'input.default.outlined.border-color',
  itemSpacing:'input.space-between',
  textColor:'input.default.outlined.text-color',
  backgroundColor:'input.add-on.background-color '
    },
  _hover: {
    bg: 'input.hover.outlined.background-color',
    iconColor: 'input.hover.outlined.icon-color',
     borderColor: 'input.default.outlined.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.hover.outlined.text-color',
     backgroundColor:'input.add-on.background-color'
  },
  _focus: {
    bg: 'input.focus.outlined.background-color',
    iconColor: 'input.focus.outlined.icon-color',
     borderColor: 'input.focus.outlined.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.focus.outlined.text-color',
     backgroundColor:'input.add-on.background-color'
  },
  _invalid: {
    bg: 'input.invalid.outlined.background-color',
    iconColor: 'input.invalid.outlined.icon-color',
     borderColor: 'input.invalid.outlined.border-color',
     itemSpacing:'input.space-between',
     textColor:'input.invalid.outlined.text-color',
     backgroundColor:'input.add-on.background-color'
  },
  _disabled: {
    bg: 'input.disabled.outlined.background-color',
    iconColor: 'input.disabled.outlined.icon-color',
     borderColor: 'input.disabled.outlined.border-color',
     itemSpacing:'input.space-between',
     textColor:'input..outlined.text-color',
     backgroundColor:'input.add-on.background-color'
}
},
  },
  // The default size and variant values
  defaultProps: {
    variant: 'default'
  }
}

export default Checkbox
