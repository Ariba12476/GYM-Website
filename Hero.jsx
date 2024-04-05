import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url("https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1708387200&semt=ais")] h-[80vh] w-screen bg-no-repeat bg-center bg-cover relative flex justify-center'>
       <div className='absolute top-0 left-0 z-10 bg-black opacity-60 h-[80vh] w-screen'></div>
       <div className='relative z-20 flex flex-col items-center text-white h-[100%] w-[100%] justify-center gap-4'>
        <h4 className= 'text-5x1 font-semibold'>CHANGE</h4>
        <p>YOUR LIFESTYLE</p>
        
       </div>
    </div>
  )
}

export default Hero