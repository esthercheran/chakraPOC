import { ComponentStyleConfig, SliderProvider } from '@chakra-ui/react'

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'btn-font-weight',
    textTransform: 'uppercase',
    width: 'auto',
    paddingLeft: 'btn-xs-padding-left',
    borderRadius: 'btn-border-radius',
    fontFamily: 'btn-font-family',
    border: 'btn-border-width',
    borderStyle: 'solid'
  },
  // Four sizes: xs,sm,md and large
  sizes: {
    xs: {
      paddingLeft: 'btn-xs-padding-left',
      paddingRight: 'btn-xs-padding-right',
      h: 'btn-xs-height',
      fontSize: 'btn-xs-text-size'
    },
    small: {
      paddingLeft: 'btn-sm-padding-left',
      paddingRight: 'btn-sm-padding-right',
      height: 'btn-sm-height',
      fontSize: 'btn-sm-text-size'
    },
    md: {
      paddingLeft: 'btn-md-padding-left',
      paddingRight: 'btn-md-padding-right',
      height: 'btn-md-height',
      fontSize: 'btn-md-text-size'
    },
    lg: {
      paddingLeft: 'btn-lg-padding-left',
      paddingRight: 'btn-lg-padding-right',
      height: 'btn-lg-height',
      fontSize: 'btn-lg-text-size'
    }
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      _default:{
      bg: 'btn-primary-default-background-color',
      color: 'btn-primary-default-text-color',
      borderColor: 'btn-primary-default-border-color',
      iconColor:"btn-primary-default-icon-color"

      },
      _hover: {
        bg: 'btn-primary-hover-background-color',
        color: 'btn-primary-hover-text-color',
        borderColor: 'btn-primary-hover-border-color',
        iconColor:'btn-primary-hover-icon-color'
      },
      _active: {
        bg: 'btn-primary-active-background-color',
        color: 'btn-primary-active-text-color',
        borderColor: 'btn-primary-active-border-color',
        iconColor:'btn-primary-active-icon-color'
      },
      _disabled: {
        bg: 'btn-primary-disabled-background-color',
        color: 'btn-primary-disabled-text-color',
        borderColor: 'btn-primary-disabled-border-color',
        iconColor:'btn-primary-disabled-icon-color'
      }
    },
    secondary: {
      _default: {
      bg: 'btn-secondary-default-background-color',
      color: 'btn-secondary-default-text-color',
      borderColor: 'btn-secondary-default-border-color',
      iconColor:'btn-secondary-default-icon-color'
      },
      _hover: {
        bg: 'btn-secondary-hover-background-color',
        color: 'btn-secondary-hover-text-color',
        borderColor: 'btn-secondary-hover-border-color',
        iconColor:'btn-secondary-hover-icon-color'
      },
      _active: {
        bg: 'btn-secondary-active-background-color',
        color: 'btn-secondary-active-text-color',
        borderColor: 'btn-secondary-active-border-color',
        iconColor:'btn-secondary-active-icon-color'
      },
      _disabled: {
        bg: 'btn-secondary-disabled-background-color',
        color: 'btn-secondary-disabled-text-color',
        borderColor: 'btn-secondary-disabled-border-color',
        iconColor:'btn-secondary-disabled-icon-color'
      }
    },
    negative: {
      _default:{
      bg: 'btn-negative-default-background-color',
      color: 'btn-negative-default-text-color',
      borderColor: 'btn-negative-default-border-color',
      iconColor:'btn-negative-default-icon-color'
      },
      _hover: {
        bg: 'btn-negative-hover-background-color',
        color: 'btn-negative-hover-text-color',
        borderColor: 'btn-negative-hover-border-color',
        iconColor:'btn-negative-hover-icon-color'

        
      },
      _acive: {
        bg: 'btn-negative-acive-background-color',
        color: 'btn-negative-acive-text-color',
        borderColor: 'btn-negative-active-border-color',
        iconColor:'btn-negative-active-icon-color'

      },
      _disabled: {
        bg: 'btn-negative-disabled-background-color',
        color: 'btn-negative-disabled-text-color',
        borderColor: 'btn-negative-disabled-border-color',
        iconColor:'btn-negative-disabled-icon-color'

      }
    }
  },
  // The default size and variant values
  defaultProps: {
    variant: 'primary'
  }
}

export default Button
