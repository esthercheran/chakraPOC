import { ComponentStyleConfig } from '@chakra-ui/react'

const Heading: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontFamily: 'heading-font-family',
    lineHeight: 'heading-line-height',
    color: 'heading-text-color'
  },
  // Four sizes: xs,sm,md and large
  sizes: {
    xs: {
      fontSize: 'heading-xs-text-size'
    },
    sm: {
        fontSize: 'heading-sm-text-size'
    },
    md: {
        fontSize: 'heading-md-text-size'
    },
    lg: {
        fontSize: 'heading-lg-text-size'
    },
    xl: {
        fontSize: 'heading-xl-text-size'
    },
    xxl: {
        fontSize: 'heading-2xl-text-size'
    },
    xxxl: {
        fontSize: 'heading-3xl-text-size'
    },
    xxxxl: {
        fontSize: 'heading-4xl-text-size'
    },
  },
  // Two variants: outline and solid
  variants: {
    light: {
        fontWeight: 'heading-light-font-weight'
    },
    regular: {
        fontWeight: 'heading-regular-font-weight'
    },
    semiBold: {
        fontWeight: 'heading-semi-bold-font-weight'
    },
    bold: {
        fontWeight: 'heading-bold-font-weight'
    }
    },
  
  // The default size and variant values
  defaultProps: {
    variant: 'regular'
  }
}

export default Heading