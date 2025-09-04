import React from 'react'
import Hero, { HeroBlock } from './Hero'
import Slider, { SliderBlock } from './Slider'
import ProjectDescription, { ProjectDescriptionBlock } from './ProjectDescription'
import ImageGallery, { ImageGalleryBlock } from './ImageGallery'
import ProjectSlider, { ProjectSliderBlock } from './ProjectSlider'
import ImageGalleryTwo from './imageGallery2'

type AnyBlock = HeroBlock | SliderBlock | ProjectDescriptionBlock | ImageGalleryBlock | ProjectSliderBlock | Record<string, unknown>

type Props = {
  blocks: AnyBlock[]
}

const BlocksRenderer: React.FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch ((block as any).type) {
          case 'hero':
            return <Hero key={index} block={block as HeroBlock} />
          case 'slider':
            return <Slider key={index} block={block as SliderBlock} />
          case 'project-description':
            return <ProjectDescription key={index} block={block as ProjectDescriptionBlock} />
          case 'image-gallery':
            return <ImageGallery key={index} block={block as ImageGalleryBlock} />
          case 'project-description2':
            return <ProjectDescription key={index} block={block as ProjectDescriptionBlock} />
          case 'image-gallery2':
            return <ImageGalleryTwo key={index} block={block as ImageGalleryBlock} />
          case 'project-slider':
            return <ProjectSlider key={index} block={block as ProjectSliderBlock} />
          default:
            return null
        }
      })}
    </>
  )
}

export default BlocksRenderer


