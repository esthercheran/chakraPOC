import * as React from 'react'
import { Checkbox, ChakraProvider, CheckboxProps } from '@chakra-ui/react'
import theme from './theme/index'

// const ThemeSwitcher = () => {
//   const { toggleColorMode } = useColorMode()
//   return (
//     <Button mt={'20'} variant='secondary' size='sm' onClick={toggleColorMode}>
//       Toggle theme
//     </Button>
//   )
// }

export function CheckboxChakra(props: CheckboxProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Checkbox size='sm'>
          {props.title}
        </Checkbox>
      
      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}