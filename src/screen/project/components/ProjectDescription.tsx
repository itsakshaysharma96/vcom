import React from 'react'

export type ProjectDescriptionBlock = {
  type: 'project-description' | 'project-description2'
  title: string
  description: string
}

type Props = {
  block: ProjectDescriptionBlock
}

const ProjectDescription: React.FC<Props> = ({ block }) => {
  const { title, description } = block

  return (
    <section className="w-full px-6 md:py-16 py-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl md:text-[28px] font-serif font-medium text-black leading-[1.5]">
              {title}
            </h2>
          </div>
          <div>
            <p className="text-[14px] text-black leading-[1.3]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription
