import React from 'react'
import { IconButtonChakra } from './IconButton'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { IconButtonChakra }

const code = `
  <IconButtonChakra  />
`

export const IconButtonPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}
