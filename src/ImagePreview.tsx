import React from 'react'
import { ImageChakra } from './Image'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { ImageChakra }

const code = `
  <ImageChakra />
`

export const ImagePreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}
