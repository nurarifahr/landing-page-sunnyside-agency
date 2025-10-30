import React from 'react'

const Intro = () => {
  return (
<div className="bg-[url('/images/mobile/image-header.jpg')] md:bg-[url('/images/desktop/image-header.jpg')] bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center text-white px-6">
  <h1 className="text-4xl md:text-6xl font-fraunces tracking-[0.2em] text-center mb-10 uppercase font-black">
    WE ARE CREATIVES
  </h1>
  <img src="/images/icon-arrow-down.svg" alt="arrow down" className="w-8" />
</div>
  )
}

export default Intro
