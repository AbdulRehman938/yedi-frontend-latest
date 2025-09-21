import React from 'react'
import Hero from '../components/Lock/Hero'
import Locations from '../components/Home/Locations'

const Locks = () => {
  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -40, transition: { duration: 1.5, ease: 'easeIn' } }
  }
  return (
    <div>
      <Hero />
      <Locations fadeVariant={fadeVariant} />
    </div>
  )
}

export default Locks