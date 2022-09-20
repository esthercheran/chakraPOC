import * as React from 'react'
import {Heading, ChakraProvider, HeadingProps } from '@chakra-ui/react'
import theme from './theme/index'

export function HeadingChakra(props: HeadingProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Heading {...props}>
          {props.title}
        </Heading>
      
      {/* <ThemeSwitcher /> */}
    </ChakraProvider>
  )
}