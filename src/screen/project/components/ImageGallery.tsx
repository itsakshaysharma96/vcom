import Image from 'next/image'
import React from 'react'

export type GalleryImage = {
  src: string
  alt?: string
  title?: string
  description?: string
}

export type ImageGalleryBlock = {
  type: 'image-gallery'
  layout: 'grid-2x2' | 'grid-1x3' | 'grid-3x1' | 'masonry'
  images: GalleryImage[]
}

type Props = {
  block: ImageGalleryBlock
}

const ImageGallery: React.FC<Props> = ({ block }) => {
  const { layout, images } = block

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
    const baseClasses = 'rounded overflow-hidden'

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
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
            <div>
              <Image
                src={images[0].src}
                alt={images[0].alt || `Gallery image`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className={getGridClasses()}>
              {/* this map start at index 1 */}
              {images.map((image, index) => {
                if (index === 0) return null
                return (
                  <div key={index} className={getImageClasses(index)}>
                    <Image
                      src={image.src}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )

              })}
        </div>
        </div>

      </div>
    </section>
  )
}

export default ImageGallery
