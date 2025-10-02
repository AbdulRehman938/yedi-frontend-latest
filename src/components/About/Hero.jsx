import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-auto bg-transparent flex flex-col items-center justify-start 3xl:h-[100vh]'>
      {/* Desktop View - Hidden on mobile */}
      <div className='hidden sm:flex w-full h-[85vh] flex-col items-center justify-between py-[5vw]'>
        <div className='w-full h-[40%] flex flex-col items-center justify-center'>
          <h1 className='text-8xl font-black text-[#6fa598] 3xl:text-7xl 3xl:mt-[-5vw]'>About us</h1>
          <p className='text-[#4c4c4c] text-3xl font-medium leading-[5vw] 3xl:text-2xl 3xl:mt-[2vw]'>What started as a personal problem turned into a bigger mission.</p>
        </div>
        <img src="/About Hero.png" alt="Locations Hero" className='w-full h-auto object-contain relative bottom-0 left-0 3xl:top-28' />
      </div>

      {/* Mobile View - Only visible on mobile */}
      <div className='flex sm:hidden w-full min-h-[80vh] flex-col items-center justify-center px-4 py-8 gap-8'>
        <div className='w-full flex flex-col items-center justify-center text-center mt-[15vw]'>
          <h1 className='text-5xl font-black text-[#6fa598] mb-4'>About us</h1>
          <p className='text-[#4c4c4c] text-xl font-medium leading-relaxed'>What started as a personal problem turned into a bigger mission.</p>
        </div>
        <div className='w-full flex justify-center items-center min-h-[400px] mt-[-10vw]'>
          <img src="/AboutHeroMobile.png" alt="About Hero Mobile" className='w-full scale-[1.1] max-w-[400px] h-auto object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Hero