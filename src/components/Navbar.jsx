
import React from 'react'
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
    <header className='flex justify-center items-center p-6 gap-2 bg-transparent absolute top-0 left-0 w-full z-50'>
        <div className='bg-[#1F2528] flex rounded-full px-[20px] py-[15px] justify-between w-full items-center'>
            <div>
                <img src={logo} className="h-[25px] w-auto" alt="Logo" />
            </div>
            <div className='flex gap-8 text-white items-center'>
                <a href='#'>Services</a>
                <a href='#'>Roadmap</a>
                <a href='#'>Work</a>
                <a href='#'>Why Balari</a>
                <a href='#'>FAQ</a>
                <a href='#' className='bg-[#BD9749] px-[18px] py-[9px] rounded-full'>Book Your Consult</a>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar
