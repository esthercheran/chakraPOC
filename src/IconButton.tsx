import * as React from 'react'
import {IconButton, ChakraProvider, IconButtonProps } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import theme from './theme/index'

export function IconButtonChakra(props: IconButtonProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <IconButton {...props} icon={<SearchIcon />}>
          {props.title}
        </IconButton>
      
      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}