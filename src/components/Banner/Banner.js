import React from 'react'
import banner from '../../images/car.jpg'
const Banner = () => {
  return (
    <div className='md:flex justify-between items-center my-16'>
      <div class="basis-1/2 sm:px-4 sm:py-4">
        <h1 className='font-mono font-bold tracking-normal text-4xl'>The <span className='text-purple-500  text-5xl'>Lotus Cars</span></h1>
        <h3 className='text-3xl bg-orange-200 inline-block px-5 rounded-md py-1 my-5'>Best Brand In the World</h3>
        <p className='text-xs'>The Brits have really outdone themselves with Lotus simply because of how exquisite their cars really are. The best part about them is that the Lotus cars are quite rare, meaning that you’ll always be at the center of attention when you roll up in one.</p>
        <button className='my-4 px-6 py-1 bg-purple-400 rounded-3xl text-white hover:ring-1 ring-offset-1 duration-200'>Live Demo</button>
      </div>
      <div className="basis-1/2">
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner
