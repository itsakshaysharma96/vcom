"use client"

import Image from 'next/image'
import React from 'react'
import { ImageGalleryBlock } from './ImageGallery'
import { useInView } from '@/lib/useInView'

type Props = {
  block: ImageGalleryBlock
}

const ImageGalleryTwo: React.FC<Props> = ({ block }) => {
  const { layout, images } = block
  const { ref, isInView } = useInView<HTMLDivElement>()

  const getGridClasses = () => {
    switch (layout) {
      case 'grid-2x2':
        return 'grid grid-cols-1 md:grid-cols-2 gap-6'
      case 'grid-1x3':
        return 'grid grid-cols-1 md:grid-cols-3 gap-6'
      case 'grid-3x1':
        return 'grid grid-cols-1 md:grid-cols-3 gap-6'
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-6'
    }
  }

  const getImageClasses = (index: number) => {
    const baseClasses = 'rounded-none overflow-hidden'

    if (layout === 'masonry') {
      return `${baseClasses} break-inside-avoid`
    }

    // For grid layouts, make first image larger if it's a 2x2 grid
    if (layout === 'grid-2x2' && index === 0) {
      return `${baseClasses}`
    }

    return baseClasses
  }

  return (
    <section className="w-full px-6 pt-16 md:pb-32 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className={getGridClasses()} ref={ref}>
          {images.map((image, index) => (
            <div key={index} className={`gallery-image ${getImageClasses(index)} ${isInView ? 'in-view' : ''}`}>
              <Image
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGalleryTwo
