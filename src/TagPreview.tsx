import React from 'react'
import { TagChakra } from './Tag'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = { TagChakra }

const code = `
  <TagChakra title="Tag title" />
`

export const TagPreview = () => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor style={{ height: '100px', background: '#000', color: '#fff' }} />
      <LivePreview style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }} />
    </LiveProvider>
  )
}
