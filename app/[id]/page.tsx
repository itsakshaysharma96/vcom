import React from 'react'
import ProjectMain from '@/src/screen/project'
import { notFound } from 'next/navigation'
import fs from 'node:fs/promises'
import path from 'node:path'

type Params = { params: { id: string } }

async function loadData(id: string) {
  const file = path.join(process.cwd(), 'src', 'screen', 'data', 'project', `${id}.json`)
  try {
    const json = await fs.readFile(file, 'utf-8')
    return JSON.parse(json)
  } catch (e) {
    return null
  }
}

const ProjectPage = async ({ params }: Params) => {
  const data = await loadData(params.id)
  if (!data) return notFound()
  return <ProjectMain data={data} />
}

export default ProjectPage