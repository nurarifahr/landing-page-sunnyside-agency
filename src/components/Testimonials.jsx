import React from 'react'

const Testimonials = () => {
  return (
    <div className='px-6'>
      <h1 className='font-fraunces text-xl tracking-[0.2em] font-bold text-center py-12 text-slate-400'>CLIENT TESTIMONIALS</h1>

      <div className='space-y-16 pb-12'>
      {/* 1 */}
      <div className='space-y-6 flex flex-col justify-center items-center text-center leading-7'>
        <img src="/images/image-emily.jpg" alt="" className='w-24 rounded-full'/>
        <p className='font-barlow font-semibold text-md text-slate-600 px-2'>We put our trust in sunnyside and they delivered, making sure our need were met and deadlines were always hit.</p>
        <div className='space-y-2'>
            <h2 className='font-fraunces font-extrabold text-lg'>Emily R.</h2>
            <p className='text-sm text-slate-400 font-medium font-barlow'>Marketing Director</p>
        </div>
      </div>

        {/* 2 */}
        <div className='space-y-6 flex flex-col justify-center items-center text-center leading-7'>
            <img src="/images/image-thomas.jpg" alt="" className='w-24 rounded-full'/>
            <p className='font-barlow font-semibold text-md text-slate-600 px-2'>Sunnyside's enthusiasm coupled with their keen  interest in our brand's success made it a satisfying and enjoyable experience.</p>
            <div className='space-y-2'>
                <h2 className='font-fraunces font-extrabold text-lg'>Thomas S.</h2>
                <p className='text-sm text-slate-400 font-medium font-barlow'>Chief Operating Officer</p>
            </div>
        </div>

        {/* 3 */}
        <div className='space-y-6 flex flex-col justify-center items-center text-center leading-7'>
            <img src="/images/image-jennie.jpg" alt="" className='w-24 rounded-full'/>
            <p className='font-barlow font-semibold text-md text-slate-600 px-2'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div className='space-y-2'>
                <h2 className='font-fraunces font-extrabold text-lg'>Jennie F.</h2>
                <p className='text-sm text-slate-400 font-medium font-barlow'>Business Owner</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
