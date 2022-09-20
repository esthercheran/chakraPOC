import * as React from 'react'
import {Image, ChakraProvider, ImageProps } from '@chakra-ui/react'
import theme from './theme/index'

export function ImageChakra(props: ImageProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Image src={props.src} boxSize={props.boxSize}/>
    </ChakraProvider>
  )
}