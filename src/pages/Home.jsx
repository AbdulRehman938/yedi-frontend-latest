import React from 'react'
import Hero from '../components/Home/Hero'
import Mirror from '../components/Home/Mirror'
import Work from '../components/Home/Work'
import Locations from '../components/Home/Locations'

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Mirror />
      <Work />
      <Locations />
    </div>
  )
}

export default Home
