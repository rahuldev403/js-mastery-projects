import { FaUserAstronaut } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <header className='bg-black py-1 px-7 flex justify-between sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff]'>
      <div className='flex lg:gap-14 gap-4 items-center'>
        <img src="public\images\logo.png" className='md:w-16 w-12 cursor-pointer' />
        <div className='hidden md:flex gap-5 items-center'>
          <button className='h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
            Play Now
          </button>
          <button className='h-8 px-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
            Play Now
          </button>
        </div>
      </div>
      <nav className="justify-around items-center gap-7 hidden md:flex lg:gap-8 gap-4">
        <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
          <FaUserAstronaut /> Avtar
        </a>
        <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
          <IoDiamondSharp /> Arena
        </a>
        <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
          <MdKeyboardDoubleArrowUp /> Beyond
        </a>
        <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
          <FaShopify /> Shop
        </a>
      </nav>
      <button className="text-3xl md:hidden transition-transform duration-300 ease-in-out" onClick={() => setMenu(!menu)}>
        {menu ? (
          <IoClose className="transition-transform duration-300 ease-in-out transform rotate-180" />
        ) : (
          <CiMenuFries className="transition-transform duration-300 ease-in-out transform rotate-0" />
        )}
      </button>
      {
        menu && <div className="fixed top-14 right-0 left-0 bg-black p-5 md:hidden">
          <nav className=" items-center gap-4 flex lg:gap-6 flex-col">
            <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
              <FaUserAstronaut /> Avtar
            </a>
            <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
              <IoDiamondSharp /> Arena
            </a>
            <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
              <MdKeyboardDoubleArrowUp /> Beyond
            </a>
            <a href="#" className="flex items-center justify-center  relative py-1 text-lg hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap gap-2">
              <FaShopify /> Shop
            </a>
          </nav>
          <div className="flex flex-col gap-3 w-full mt-4">
            <button className="bg-purple-700 py-2 rounded text-center">
              Play Now
            </button>
            <button className="bg-gray-500 py-2 rounded">
              NFT Store
            </button>
          </div>
        </div>
      }
    </header>
  )
}

export default Header
