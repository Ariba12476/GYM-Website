import React from 'react'
import Topic from './common/Topic'
import Title from './common/Title'

const Products = () => {
  return (
    
    <div className='flex-1'>
        <div className='text-4x1 font-bclassNameold font-logo text-primary' >

            <Title title="Latest Products"/>
            <div className='grid grid-cols-3 gap-2'>
                <div className='bg-white'>
                <img className='max-w-[300px]'src='https://i.pinimg.com/1200x/1b/0c/76/1b0c7647d7b031c8c04a94787f86dbac.jpg'alt=''/>
            </div> 
            <div>
                <img className='max-w-[300px]'src='https://www.physioshop.pk/wp-content/uploads/2017/12/Home-Gym.jpg'alt=''/>
            </div>
            <div>
                <img className='max-w-[300px]'src='https://secondstrength.co.uk/wp-content/uploads/image-10-2-300x300.jpeg'alt=''/>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default Products