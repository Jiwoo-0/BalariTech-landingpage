
import React from 'react'
import navbar_logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
    <header className='flex justify-center items-center p-6 gap-2 bg-transparent absolute top-0 left-0 w-full z-50'>
        <div className='inline-block skew-x-[-12deg] bg-white px-8 py-2 rounded-md'>
            <img  src={navbar_logo} alt='' className='skew-x-[12deg] w-[120px]'/>
        </div>
        <nav className=' bg-white skew-x-[-12deg] rounded-md'>
            <div className='flex flex-2 flex-row justify-center gap-28 px-16 py-2 skew-x-[12deg]'>
                <a href='#services'><h2 className='text-xl'>Services</h2></a>
                <a href='#roadmap'><h2 className='text-xl'>Roadmap</h2></a>
                <a href='#work'><h2 className='text-xl'>Work</h2></a>
                <a href='#why'><h2 className='text-xl'>Why Balari</h2></a>
                <a href='#faq'><h2 className='text-xl'>FAQ</h2></a>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar
