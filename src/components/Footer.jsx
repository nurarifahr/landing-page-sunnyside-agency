import React from 'react'

const Footer = () => {
  return (
    <div className='bg-bg-footer py-15 px-6 text-center'>
      <div className='flex flex-col space-y-6'>
        <h1 className='text-green-footer font-black text-4xl'>sunnyside</h1>

        <ul className='flex flex-row justify-around font-barlow font-semibold text-green-footer md:justify-center md:gap-10 '>
            <li className='hover:text-white cursor-pointer'>About</li>
            <li className='hover:text-white cursor-pointer'>Services</li>
            <li className='hover:text-white cursor-pointer'>Project</li>
        </ul>

        <div className='flex flex-row justify-around px-12 pt-4 md:justify-center md:gap-10'>
            <img src="/images/icon-facebook.svg" alt="" className='hover:invert hover:brightness-0 cursor-pointer' />
            <img src="/images/icon-instagram.svg" alt="" className='hover:invert hover:brightness-0 cursor-pointer'/>
            <img src="/images/icon-twitter.svg" alt="" className='hover:invert hover:brightness-0 cursor-pointer'/>
            <img src="/images/icon-pinterest.svg" alt="" className='hover:invert hover:brightness-0 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
