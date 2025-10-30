import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full'>
      <div className='mx-auto max-w-6xl p-6 flex flex-row justify-between items-center'>
        <img src="/images/logo.svg" alt="" />
        <button>
            <img src="/images/icon-hamburger.svg" alt="" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
