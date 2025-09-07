import React from 'react'
import BlocksRenderer from './components/BlocksRenderer'
import { HeroBlock } from './components/Hero'
import { SliderBlock } from './components/Slider'
import { ProjectDescriptionBlock } from './components/ProjectDescription'
import { ImageGalleryBlock } from './components/ImageGallery'
import { ProjectSliderBlock } from './components/ProjectSlider'

type ProjectData = {
  id: string
  theme?: { mode?: 'light' | 'dark'; primary?: string }
  blocks: (HeroBlock | SliderBlock | ProjectDescriptionBlock | ImageGalleryBlock | ProjectSliderBlock)[]
}

const projectMain: React.FC<{ data: ProjectData }> = ({ data }) => {
  return <BlocksRenderer blocks={data.blocks || []} />
}

export default projectMain