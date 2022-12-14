import React from 'react'
import { AvatarChakra } from './Avatar'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { AvatarChakra }

const code = `
  <AvatarChakra name='Ryan Florence' size="md" src='https://bit.ly/ryan-florence' />
`

export const AvatarPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}
