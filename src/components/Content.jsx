import React from 'react'

const Content = () => {
  return (
    <div className=''>
        {/* 1 */}
      <img src="/images/mobile/image-transform.jpg" alt="" className='w-full h-auto object-cover' />

        {/* 2 */}
      <div className='text-center px-6 py-15 space-y-6'>
        <h1 className='font-fraunces text-4xl md:text-5xl font-bold'>Transform your brand</h1>
        <p className='font-barlow font-semibold text-slate-500 text-lg'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <button class="relative font-fraunces font-bold text-lg">
        LEARN MORE
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 rounded-lg h-3 bg-yellow-100 -z-10 -translate-y-1"></span>
        </button>
      </div>

      {/* 3 */}
      <img src="/images/mobile/image-stand-out.jpg" alt="" className='w-full h-auto object-cover'/>

      {/* 4 */}
      <div className='text-center px-6 py-15 space-y-6'>
        <h1 className='font-fraunces text-4xl md:text-5xl font-bold'>Stand out to the right audience</h1>
        <p className='font-barlow font-semibold text-slate-500 text-lg'>Using collaborative formula of designers, researchers, photographers, videographers, and copywrites, we'll build and extend your brand in digital places.</p>
        <button class="relative font-fraunces font-bold text-lg">
        LEARN MORE
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 rounded-lg h-3 bg-rose-100 -z-10 -translate-y-1"></span>
        </button>
      </div>

              {/* 5 */}
        <div className="bg-[url('/images/mobile/image-graphic-design.jpg')] bg-no-repeat bg-cover h-screen">
             <div className='text-center px-6 pt-92 space-y-6 text-green-graphic'>
                <h1 className='font-fraunces text-3xl md:text-5xl font-bold'>Graphic Design</h1>
                <p className='font-barlow font-semibold text-sm'>Great design makes you memorable. We deliverartwork that underscores your brand message and capture potential clients's attention.</p>
            </div>
        </div>

              {/* 6 */}
        <div className="bg-[url('/images/mobile/image-photography.jpg')] bg-no-repeat bg-cover h-screen">
             <div className='text-center px-6 pt-92 space-y-6 text-blue'>
                <h1 className='font-fraunces text-3xl md:text-5xl font-bold'>Photography</h1>
                <p className='font-barlow font-semibold text-sm'>Increase your credibillity by getting the most stunning, high-uaity photos that improve your business image.</p>
            </div>
        </div>
    </div>
  )
}

export default Content
