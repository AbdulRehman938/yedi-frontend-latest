import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-auto min-h-screen bg-transparent flex flex-col items-center justify-start'>
      <div className='w-full h-[85vh] flex flex-col items-center justify-between pt-[2vw]'>
        <div className='w-full h-[40%] flex flex-col items-center justify-center'>
          <h1 className='text-8xl font-black text-[#6fa598]'>Locations</h1>
          <p className='text-[#4c4c4c] text-3xl font-medium leading-[5vw]'>Find trusted restrooms near you</p>
        </div>
        <img src="/Locations-hero.png" alt="Locations Hero" className='w-full h-auto object-contain relative bottom-0 left-0' />
      </div>
    </div>
  )
}

export default Hero