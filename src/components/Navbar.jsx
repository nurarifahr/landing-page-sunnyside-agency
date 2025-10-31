import React, { useEffect, useState } from 'react'

const Navbar = () => {
   const [open, setOpen] = useState(null);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <>
      <nav className={`fixed w-full mx-auto p-6 flex flex-row justify-between ${isScrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <img src="/images/logo.svg" alt="" />
        <button
          onClick={() => setOpen(true)}
          className="absolute top-6 right-6 z-50">
          <img src="/images/icon-hamburger.svg" alt="close"/>
        </button>
      </nav>

          <div className={`fixed top-0 z-40 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out  ${open? "translate-y-0" : "-translate-y-full"}`}>

              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 z-50">
                <img src="/images/icon-close-menu.svg" alt="close"/>
              </button>

          <ul className='my-15 justify-center space-y-4 text-center font-barlow font-medium text-slate-500'>
            <li>About</li>
            <li>Service</li>
            <li>Project</li>
            <button className='py-2 px-4 font-fraunces font-semibold text-sm bg-amber-300 text-black rounded-full'>CONTACT</button>
          </ul>
        </div>

            {open && (
              <div className='fixed inset-0 bg-black opacity-40 z-30' onClick={()=>setOpen(false)}>
              </div>
            )}

    </>
  )
}

export default Navbar