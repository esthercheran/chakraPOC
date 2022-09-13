import * as React from 'react'
import { Box, Button, ChakraProvider, Flex, useColorMode, VStack, Spacer, ButtonProps } from '@chakra-ui/react'
import theme from './theme/index'
import { InfoIcon } from '@chakra-ui/icons'

// const ThemeSwitcher = () => {
//   const { toggleColorMode } = useColorMode()
//   return (
//     <Button mt={'20'} variant='secondary' size='sm' onClick={toggleColorMode}>
//       Toggle theme
//     </Button>
//   )
// }

export function ButtonChakra(props: ButtonProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Button {...props}>
          {props.title}
        </Button>
      
      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}
