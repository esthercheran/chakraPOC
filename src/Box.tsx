import * as React from "react";
import {Box, ChakraProvider, BoxProps} from '@chakra-ui/react'
import theme from './theme/index'

export function BoxChakra(props: BoxProps) {
    return (
      <ChakraProvider resetCSS theme={theme}>
        <Box {...props} >
            {props.slot}
          </Box>
        
        {/* <ThemeSwitcher /> */}
      </ChakraProvider>
    )
  }