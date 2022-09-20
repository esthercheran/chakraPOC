import { ComponentStyleConfig } from '@chakra-ui/react'

const IconButton: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    width: 'auto',
    borderRadius: 'icon-button-border-radius',
    border: 'btn-border-width',
    borderStyle: 'solid',
    _isRound: {
        borderRadius: 'icon-button-round-border-radius'
    }
  },
  // Four sizes: xs,sm,md and large
  sizes: {
    xs: {
      height: 'icon-button-xs-height',
      width: 'icon-button-xs-width',
      fontSize: 'icon-button-xs-icon-size'
    },
    sm: {
        h: 'icon-button-sm-height',
        minW: 'icon-button-sm-width',
        fontSize: 'icon-button-sm-icon-size'
    },
    md: {
        h: 'icon-button-md-height',
        minW: 'icon-button-md-width',
        fontSize: 'icon-button-md-icon-size'
    },
    lg: {
        h: 'icon-button-lg-height',
        minW: 'icon-button-lg-width',
        fontSize: 'icon-button-lg-icon-size'
    }
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      bg: 'icon-button-default-background-color',
      color: 'icon-button-default-icon-color',
      borderColor: 'icon-button-default-border-color',
      iconColor:"icon-button-default-icon-color",
      _hover: {
        bg: 'btn-primary-hover-background-color',
        color: 'btn-primary-hover-text-color',
        borderColor: 'btn-primary-hover-border-color',
        iconColor:'btn-primary-hover-icon-color'
      },
      _isActive: {
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
      bg: 'btn-secondary-default-background-color',
      color: 'btn-secondary-default-text-color',
      borderColor: 'btn-secondary-default-border-color',
      iconColor:'btn-secondary-default-icon-color',
      _hover: {
        bg: 'btn-secondary-hover-background-color',
        color: 'btn-secondary-hover-text-color',
        borderColor: 'btn-secondary-hover-border-color',
        iconColor:'btn-secondary-hover-icon-color'
      },
      _isActive: {
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
      bg: 'btn-negative-default-background-color',
      color: 'btn-negative-default-text-color',
      borderColor: 'btn-negative-default-border-color',
      iconColor:'btn-negative-default-icon-color',
      _hover: {
        bg: 'btn-negative-hover-background-color',
        color: 'btn-negative-hover-text-color',
        borderColor: 'btn-negative-hover-border-color',
        iconColor:'btn-negative-hover-icon-color'

        
      },
      _isActive: {
        bg: 'btn-negative-active-background-color',
        color: 'btn-negative-active-text-color',
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

export default IconButton
