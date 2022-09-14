import * as React from 'react'
import { Checkbox, ChakraProvider, CheckboxProps } from '@chakra-ui/react'
import theme from './theme/index'

export function CheckboxChakra(props: CheckboxProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Checkbox {...props}>{props.title}</Checkbox>
    </ChakraProvider>
  )
}
