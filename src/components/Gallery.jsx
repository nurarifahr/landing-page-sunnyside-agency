import React from 'react'

const Gallery = () => {
  return (
    <div className='grid grid-cols-2 md:flex'>

      <picture>
        <source media="(min-width: 768px)" srcSet="/images/desktop/image-gallery-milkbottles.jpg" />
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          alt="image-gallery-milkbottles"
        />
      </picture>

      <picture>
        <source media="(min-width: 768px)" srcSet="/images/desktop/image-gallery-orange.jpg" />
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          alt="image-gallery-orange"
        />
      </picture>

      <picture>
        <source media="(min-width: 768px)" srcSet="/images/desktop/image-gallery-cone.jpg" />
        <img
          src="/images/mobile/image-gallery-cone.jpg"
          alt="image-gallery-cone"
        />
      </picture>

      <picture>
        <source media="(min-width: 768px)" srcSet="/images/desktop/image-gallery-sugarcubes.jpg" />
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="image-gallery-sugar-cubes"
        />
      </picture>
    </div>
  )
}

export default Gallery
