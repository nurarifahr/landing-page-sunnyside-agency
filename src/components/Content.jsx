import React from 'react'

const Content = () => {
  return (
    <div className='md:grid md:grid-cols-2'>
      <picture className='md:order-2'>
        <source media="(min-width: 768px)" srcSet="/images/desktop/image-transform.jpg" />
        <img
          src="/images/mobile/image-transform.jpg"
          alt="image-transform"
          className="w-full h-auto object-cover"
        />
      </picture>

      {/* 2 */}
      <div className='text-center px-6 py-15 space-y-6 md:order-1 md:text-left md:mx-25 md:my-auto md:py-0'>
        <h1 className='font-fraunces text-4xl md:text-5xl font-bold'>Transform your brand</h1>
        <p className='font-barlow font-semibold text-slate-500 text-lg md:text-[10x]'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <button className="relative font-fraunces font-bold text-lg -z-10 cursor-pointer ">
          LEARN MORE
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 rounded-lg h-3 bg-yellow-100 -z-20 -translate-y-1"></span>
        </button>
      </div>

      {/* 3 */}
      <picture className='md:order-3'>
        <source media="(min-width: 768px)" srcSet="/images/desktop/image-stand-out.jpg" />
        <img
          src="/images/mobile/image-stand-out.jpg"
          alt="image-stand-out"
          className="w-full h-auto object-cover"
        />
      </picture>


      {/* 4 */}
      <div className='text-center px-6 py-15 space-y-6 md:order-4 md:text-left md:mx-25 md:my-auto md:py-0'>
        <h1 className='font-fraunces text-4xl md:text-5xl font-bold'>Stand out to the right audience</h1>
        <p className='font-barlow font-semibold text-slate-500 text-lg'>Using collaborative formula of designers, researchers, photographers, videographers, and copywrites, we'll build and extend your brand in digital places.</p>
        <button className="relative font-fraunces font-bold text-lg -z-10 cursor-pointer">
          LEARN MORE
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 rounded-lg h-3 bg-rose-100 -translate-y-1 -z-20"></span>
        </button>
      </div>

      {/* 5 */}
      <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] bg-no-repeat bg-cover h-screen md:order-5 md:bg-[url('/images/desktop/image-graphic-design.jpg')]">
        <div className='text-center px-6 pt-94 space-y-6 text-green-graphic md:space-y-10'>
          <h1 className='font-fraunces text-3xl md:text-5xl font-bold'>Graphic Design</h1>
          <p className='font-barlow font-semibold text-sm md:text-xl md:w-md md:mx-auto'>Great design makes you memorable. We deliverartwork that underscores your brand message and capture potential clients's attention.</p>
        </div>
      </div>

      {/* 6 */}
      <div className="bg-[url('/images/mobile/image-photography.jpg')] bg-no-repeat bg-cover h-screen md:order-6 md:bg-[url('/images/desktop/image-photography.jpg')]">
        <div className='text-center px-6 pt-94 space-y-6 text-blue md:space-y-10'>
          <h1 className='font-fraunces text-3xl md:text-5xl font-bold'>Photography</h1>
          <p className='font-barlow font-semibold text-sm md:text-xl md:w-md md:mx-auto'>Increase your credibillity by getting the most stunning, high-uaity photos that improve your business image.</p>
        </div>
      </div>
    </div>
  )
}

export default Content
