import { ComponentStyleConfig } from '@chakra-ui/react'

const Text: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'text-font-family',
    lineHeight: 'text-line-height',
    color: 'text-text-color'
  },
  // Four sizes: xs,sm,md and large
  sizes: {
    xs: {
      fontSize: 'text-xs-text-size'
    },
    sm: {
        fontSize: 'text-sm-text-size'
    },
    md: {
        fontSize: 'text-md-text-size'
    },
    lg: {
        fontSize: 'text-lg-text-size'
    },
    xl: {
        fontSize: 'text-xl-text-size'
    },
    "2xl": {
        fontSize: 'text-2xl-text-size'
    },
    "3xl": {
        fontSize: 'text-3xl-text-size'
    },
    "4xl": {
        fontSize: 'text-4xl-text-size'
    },
    "5xl": {
        fontSize: 'text-5xl-text-size'
    },
    "6xl": {
        fontSize: 'text-6xl-text-size'
    },
  },
  // Two variants: outline and solid
  variants: {
    light: {
        fontWeight: 'text-light-font-weight'
    },
    regular: {
        fontWeight: 'text-regular-font-weight'
    },
    semiBold: {
        fontWeight: 'text-semi-bold-font-weight'
    },
    bold: {
        fontWeight: 'text-bold-font-weight'
    }
    },
  
  // The default size and variant values
  defaultProps: {
    variant: 'regular'
  }
}

export default Text