import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white bg-black'>
        <div className='max-w-[1350px] flex justify-between items-center p-6 mx-auto'>
        <h1 className ='text-4x1 font-bclassNameold font-logo'>Gym <span className='text-primary'>Mini Store</span></h1>
    <div >
    <u1 className='flex items-center gap-7 uppercase'>
        <li className='cursor-pointer hover:text-primary'> Home</li>
        <li className='cursor-pointer hover:text-primary'> Store</li>
        <li className='cursor-pointer hover:text-primary'> Blog</li>
    </u1>
    </div>
    <button className='px-4 py-2 text-white bg-primary rounded-full'>cart</button>
    
    </div>
    </div>
  )
}

export default Navbar