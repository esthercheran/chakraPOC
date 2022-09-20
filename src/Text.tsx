import * as React from 'react'
import {Text, ChakraProvider, TextProps } from '@chakra-ui/react'
import theme from './theme/index'

export function TextChakra(props: TextProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Text {...props}>
          {props.title}
        </Text>
    </ChakraProvider>
  )
}