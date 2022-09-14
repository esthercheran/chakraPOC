import * as React from 'react'
import { Tag, ChakraProvider, TagProps } from '@chakra-ui/react'
import theme from './theme/index'
// import { InfoIcon } from '@chakra-ui/icons'

// const ThemeSwitcher = () => {
//   const { toggleColorMode } = useColorMode()
//   return (
//     <Button mt={'20'} variant='secondary' size='sm' onClick={toggleColorMode}>
//       Toggle theme
//     </Button>
//   )
// }

export function TagChakra(props: TagProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Tag {...props}>
          {props.title}
        </Tag>
      
      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}