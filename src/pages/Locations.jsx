import React from 'react'
import Hero from '../components/Locations/Hero'
import Cities from '../components/Locations/Cities'
import Form from '../components/Locations/Form'

const Locations = () => {
  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <div className='hidden sm:flex w-[100vw] min-h-screen bg-transparent flex-col items-center justify-start'>
        <Hero />
        <Cities />
        <Form />
      </div>

      {/* Mobile View - Only visible on mobile */}
      <div className='flex sm:hidden w-full min-h-screen bg-transparent flex-col items-center justify-start'>
        <Hero />
        <Cities />
        <Form />
      </div>
    </>
  )
}

export default Locations