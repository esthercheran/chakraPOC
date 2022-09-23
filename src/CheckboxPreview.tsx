import React from 'react'
import { CheckboxChakra } from './Checkbox'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { CheckboxChakra }

const code = `
  <CheckboxChakra title="Checkbox title" size="md" />
`

export const CheckboxPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}
