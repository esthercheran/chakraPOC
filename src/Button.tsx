import * as React from 'react'
import { Button, ChakraProvider, ButtonProps } from '@chakra-ui/react'
import theme from './theme/index'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
// import { InfoIcon } from '@chakra-ui/icons'

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
      <Button {...props} leftIcon={props.leftIcon ? <SearchIcon /> : undefined} rightIcon={props.rightIcon ? <Search2Icon /> : undefined}>
        {props.title}
      </Button>

      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}
