import React from 'react'
import { ButtonChakra } from './Button'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { ButtonChakra }

const code = `
  <ButtonChakra variant="secondary" title="my title" />
`

export const ButtonPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '200px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #000', padding: '50px' }} />
    </LiveProvider>
  )
}
