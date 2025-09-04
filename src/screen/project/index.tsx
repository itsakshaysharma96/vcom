import React from 'react'
import BlocksRenderer from './components/BlocksRenderer'

type ProjectData = {
  id: string
  theme?: { mode?: 'light' | 'dark'; primary?: string }
  blocks: any[]
}

const projectMain: React.FC<{ data: ProjectData }> = ({ data }) => {
  return <BlocksRenderer blocks={data.blocks || []} />
}

export default projectMain