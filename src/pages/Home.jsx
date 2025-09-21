import React from 'react'
import Hero from '../components/Home/Hero'
import Mirror from '../components/Home/Mirror'
import Work from '../components/Home/Work'
import Locations from '../components/Home/Locations'
import HomeForm from '../components/Home/HomeForm'

const Home = () => {
  const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
  }
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Mirror />
      <Work />
      <Locations />
      <HomeForm fadeVariant={fadeVariant} />
    </div>
  )
}

export default Home
