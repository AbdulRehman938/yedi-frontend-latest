import React from 'react'
import Hero from '../components/Locations/Hero'
import Cities from '../components/Locations/Cities'

const Locations = () => {
  return (
    <div className='w-[100vw] h-[200rem] bg-transparent flex flex-col items-center justify-start'>
      <Hero />
      <Cities />
    </div>
  )
}

export default Locations