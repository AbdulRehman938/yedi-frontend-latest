import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-auto bg-transparent flex flex-col items-center justify-start'>
      {/* Desktop View - Hidden on mobile */}
      <div className='hidden sm:flex w-full h-[85vh] flex-col items-center justify-between py-[5vw] 3xl:h-[100vh]'>
        <div className='w-full h-[40%] flex flex-col items-center justify-center 3xl:mt-[-3rem]'>
          <h1 className='text-8xl font-black text-[#6fa598]'>Locations</h1>
          <p className='text-[#4c4c4c] text-3xl font-medium leading-[5vw]'>Find trusted restrooms near you</p>
        </div>
        <img src="/Locations-hero.png" alt="Locations Hero" className='w-full h-auto object-contain relative bottom-0 left-0' />
      </div>

      {/* Mobile View - Only visible on mobile */}
      <div className='flex sm:hidden w-full h-[60vh] flex-col items-center justify-around px-4 py-8'>
        <div className='w-full flex flex-col items-center justify-center text-center mb-8'>
          <h1 className='text-5xl font-black text-[#6fa598] mb-4'>Locations</h1>
          <p className='text-[#4c4c4c] text-xl font-medium leading-relaxed'>Find trusted restrooms near you</p>
        </div>
        <div className='w-full flex justify-center'>
          <img src="/Locations-hero.png" alt="Locations Hero" className='w-full h-full scale-[3] object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Hero