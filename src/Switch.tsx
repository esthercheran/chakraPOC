import * as React from 'react'
import { Switch, ChakraProvider, SwitchProps } from '@chakra-ui/react'
import theme from './theme/index'

export function SwitchChakra(props: SwitchProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Switch {...props}>{props.title}</Switch>
    </ChakraProvider>
  )
}
