import React from 'react'
import { SwitchChakra } from './Switch'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { SwitchChakra }

const code = `
  <SwitchChakra />
`

export const SwitchPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}
