import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-gray-200'>
        <div className='grid-cols-3 px-16 py-6 gap-6 '>
            <div>
                <h3 className='text-x1 font-semibold tex-white'>About Us</h3>
                <p className='text-sm py--44'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eius fuga aliquam non, eveniet minus dolorem id 
                    eum unde esse consequuntur molestiae eos, quidem aliquid velit. 
                    Perferendis enim pariatur eos sed!</p>
                    <div>
                        <ul className='text-sm flex flex-col gap-3 mt-4s'>
                            <li className='cursor-pointer hoever:text-white'>Home</li>
                            <li className='cursor-pointer hoever:text-white'>Store</li>
                            <li className='cursor-pointer hoever:text-white' >Blogs</li>
                        </ul>
                        <div>
                            <h3>NewsLetter</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Illum perspiciatis ipsam maxime amet laborum veritatis et tenetur qui aliquam, assumenda doloribus eius est! Necessitatibus impedit facilis repudiandae minus eligendi? Impedit.</p>
                              <input type='text'placeholder='Enter Email Address'/>
                              <button className='px-4 py-2 text-white bg-primary rounded-full'>Subscribe</button>
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Footer