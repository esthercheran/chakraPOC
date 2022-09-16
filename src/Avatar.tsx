import * as React from 'react'
import { Avatar, ChakraProvider, AvatarProps } from '@chakra-ui/react'
import theme from './theme/index'

// const ThemeSwitcher = () => {
//   const { toggleColorMode } = useColorMode()
//   return (
//     <Button mt={'20'} variant='secondary' size='sm' onClick={toggleColorMode}>
//       Toggle theme
//     </Button>
//   )
// }

export function AvatarChakra(props: AvatarProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Avatar {...props}>
          {props.title}
        </Avatar>
      
      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}