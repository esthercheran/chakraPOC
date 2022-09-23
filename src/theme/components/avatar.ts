import { ComponentStyleConfig } from '@chakra-ui/react'

const Avatar: ComponentStyleConfig = {
  parts: ['container', 'badge'],
  // The styles all Checkbox have in common
  baseStyle: {
    badge: {
      borderRadius: 'avatar-border-radius',
      height: '100%'
    }
    // bg: 'btn-primary-default-background-color',
    // borderColor: 'btn-primary-default-background-color'
    // Width: 'checkbox.border-width'
  },
  // Three sizes: sm md and large
  sizes: {
    sm: {
      container: {
        height: 'avatar-s-height',
        width: 'avatar-s-width'
      }
    },
    md: {
      container: {
        height: 'avatar-m-height',
        width: 'avatar-m-width'
      }
    },
    lg: {
      container: {
        height: 'avatar-l-height',
        width: 'avatar-l-width'
      }
    }
  },
  defaultProps: {
    size: 'sm'
  }
}

export default Avatar
