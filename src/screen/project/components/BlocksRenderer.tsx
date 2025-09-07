import React from 'react'
import Hero, { HeroBlock } from './Hero'
import Slider, { SliderBlock } from './Slider'
import ProjectDescription, { ProjectDescriptionBlock } from './ProjectDescription'
import ImageGallery, { ImageGalleryBlock } from './ImageGallery'
import ProjectSlider, { ProjectSliderBlock } from './ProjectSlider'
import ImageGalleryTwo from './imageGallery2'

type ProjectDescriptionBlock2 = Omit<ProjectDescriptionBlock, 'type'> & { type: 'project-description2' }
type ImageGalleryBlock2 = Omit<ImageGalleryBlock, 'type'> & { type: 'image-gallery2' }

type AnyBlock =
  | HeroBlock
  | SliderBlock
  | ProjectDescriptionBlock
  | ImageGalleryBlock
  | ProjectDescriptionBlock2
  | ImageGalleryBlock2
  | ProjectSliderBlock

type Props = {
  blocks: AnyBlock[]
}

const BlocksRenderer: React.FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'hero':
            return <Hero key={index} block={block} />
          case 'slider':
            return <Slider key={index} block={block} />
          case 'project-description':
            return <ProjectDescription key={index} block={block} />
          case 'image-gallery':
            return <ImageGallery key={index} block={block} />
          case 'project-description2':
            return <ProjectDescription key={index} block={block} />
          case 'image-gallery2':
            return <ImageGalleryTwo key={index} block={block} />
          case 'project-slider':
            return <ProjectSlider key={index} block={block} />
          default:
            return null
        }
      })}
    </>
  )
}

export default BlocksRenderer


