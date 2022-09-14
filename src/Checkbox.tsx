import * as React from 'react'
import { Checkbox, ChakraProvider, CheckboxProps } from '@chakra-ui/react'
import theme from './theme/index'

export function CheckboxChakra(props: CheckboxProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Checkbox size='sm'>Small</Checkbox>
      <Checkbox size='md'>Medium</Checkbox>
      <Checkbox size='lg'>Large</Checkbox>

      <Checkbox size='md' variant='bold'>
        Medium bold variant
      </Checkbox>

      <Checkbox size='md' variant='bold' isInvalid isDisabled>
        Medium invalid disabled
      </Checkbox>
    </ChakraProvider>
  )
}
