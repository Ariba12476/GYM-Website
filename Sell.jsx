import React from 'react'
import Topic from './common/Topic'

const Sell = () => {
  return (
    <div className='bg-gray'>
        <div className='max-w-[130s0px] mx-auto grid grid-cols-2 gap-2 items-center p-6'>
         <div className='rounded-md'>
             <img className='rounded-md w-[80%] 'src="https://cdn.create.vista.com/api/media/small/219769856/stock-photo-athletic-sportsman-sportswoman-exercising-cube-together-dark-gym" alt=""/>
            </div>
            <div>
        <Topic topic={Sell}/>
                    <br></br>
                    <p>Combining aerobic exercise with other kinds of
                     exercise like strength training with weigths 
                     and stretching keeps muscles,ligaments,joints,and tendons healthy,
                     flexible,and strong,so when one becomes older,
                     He is stronger and has less risk of being out of balance and falling causing fractures or other injuries
                     </p><br></br>
                     <button className='px-4 py-2 text-white rounded-full bg-primary items-center w-auto'>Buy Now</button>
                </div>
        </div>
    </div>
  )
}

export default Sell