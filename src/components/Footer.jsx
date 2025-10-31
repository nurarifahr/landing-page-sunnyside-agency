import React from 'react'

const Footer = () => {
  return (
    <div className='bg-bg-footer py-15 px-6 text-center'>
      <div className='flex flex-col space-y-6'>
        <h1 className='text-green-footer font-black text-4xl'>sunnyside</h1>

        <ul className='flex flex-row justify-around font-barlow font-semibold text-green-footer'>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
        </ul>

        <div className='flex flex-row justify-around px-12 pt-4'>
            <img src="/images/icon-facebook.svg" alt="" />
            <img src="/images/icon-instagram.svg" alt="" />
            <img src="/images/icon-twitter.svg" alt="" />
            <img src="/images/icon-pinterest.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
