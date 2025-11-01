import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`fixed w-full mx-auto p-6 flex flex-row justify-between ${isScrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-transparent"} md:pt-8 md:px-10`}>
        <img src="/images/logo.svg" alt="" className='object-contain md:w-36'/>
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-6 right-6 z-50 md:hidden">
          <img src={open? "/images/icon-close-menu.svg" : "/images/icon-hamburger.svg"} alt="close" />
        </button>

        <div className={`fixed top-0 z-40 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out  ${open ? "translate-y-0" : "-translate-y-full"} md:static md:w-auto md:translate-y-0 md:bg-transparent`}>

          <ul className='my-15 justify-center space-y-4 text-center font-barlow font-medium text-slate-500 md:flex md:flex-row md:my-0 md:space-x-12 md:items-center md:space-y-0 md:text-white'>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <button className='py-2 px-4 font-fraunces font-semibold text-sm bg-amber-300 text-black rounded-full md:bg-white hover:bg-white/30 md:font-normal hover:text-white cursor-pointer'>CONTACT</button>
          </ul>
        </div>

      {open && (
        <div className='fixed inset-0 bg-black opacity-40 z-30' onClick={() => setOpen(false)}>
        </div>
      )}

      </nav>
    </>
  )
}

export default Navbar