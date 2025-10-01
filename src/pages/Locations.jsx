import React from 'react'
import Hero from '../components/Locations/Hero'
import Cities from '../components/Locations/Cities'
import Form from '../components/Locations/Form'

const Locations = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Cities />
      <Form />
    </div>
  )
}

export default Locations