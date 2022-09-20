import * as React from 'react'
import { Avatar, ChakraProvider, AvatarProps } from '@chakra-ui/react'
import theme from './theme/index'


export function AvatarChakra(props: AvatarProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Avatar {...props}>
          {props.title}
        </Avatar>
      
    </ChakraProvider>
  )
}