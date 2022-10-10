import React, { useState } from "react";
import { Link } from "react-router-dom";



const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleBar = () =>{
    showSidebar 
      ? setShowSidebar(false)
      : setShowSidebar(true)
  }


  return (
    <>
    {/* phone navigation */}
    <div className='lg:hidden  select-none bg-slate-100 font-poppins'>
      <div className='flex items-center gap-2 text-xl p-2'>
        <Link  to="/" className=''>
          <span>Nasa</span>{' '}
          <span className='font-semibold text-action'>App</span>
        </Link>
      </div>
      {showSidebar ? (
        <button
          className='flex text-5xl text-white items-center cursor-pointer fixed right-12 top-0 z-50'
          onClick={toggleBar}
        >
          x
        </button>
      ) : (
        <svg
          onClick={toggleBar}
          className='fixed  z-30 flex items-center cursor-pointer right-10 top-4'
          viewBox='0 0 100 80'
          width='30'
          height='30'
        >
          <rect width='100' height='10'></rect>
          <rect y='30' width='100' height='10'></rect>
          <rect y='60' width='100' height='10'></rect>
        </svg>
      )}
      <div
        className={`top-0 right-0 w-[100vw] bg-black/90
                text-white fixed h-full z-40  ease-in-out duration-300
                flex flex-col justify-start items-center
                pt-20 gap-20
      ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        <div className='flex gap-4 w-1/3'>
          <Link onClick={toggleBar} to="/" className='text-2xl'>Home</Link>
        </div>
        <div className='flex gap-4 w-1/3'>
          <Link onClick={toggleBar} to ="/landing" className='text-2xl'>Landings</Link>
        </div>
        <div className='flex gap-4 w-1/3'>
          <Link onClick={toggleBar} to ="/neas" className='text-2xl'>Neas</Link>
        </div>
      </div>
    </div>

    {/* PC navigation */}
    <div className='font-poppins hidden lg:flex justify-between px-24 py-4 bg-neutral-100/90 shadow-md items-center select-none'>
      <div className='flex items-center gap-2 text-xl group'>
        <Link  to="/" className='text-2xl'>
          Nasa <span className='text-action font-semibold'>App</span>
        </Link>
      </div>
      <div className='flex gap-14 text-xl items-center'>
        <Link  to="/landing" className='flex items-center gap-2 group'>
          <span>Landings</span>
        </Link>
        <Link  to="/neas" className='flex items-center gap-2 group'>
          <span>Neas</span>
        </Link>
        
      </div>
    </div>
  </>
  )
}

export default Nav