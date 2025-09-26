import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: -40, transition: { duration: 1.5, ease: 'easeIn' } }
}

const AnimatedItem = ({ children, className }) => {
  const ref = useRef(null)
  const [inView, setInView] = React.useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {inView && (
          <motion.div
            drag
            dragElastic={0.2}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Hero = () => {

  return (
    <div className="w-full overflow-hidden bg-transparent min-h-screen">
      {/* Background Images */}
      <div className="absolute w-full h-full">
        <AnimatedItem className="absolute inset-0">
          <img loading="lazy" src="/path.png" alt="path" className="hidden sm:block w-full h-full min-h-screen object-cover" />
        </AnimatedItem>
        <div className="pb-[50rem] sm:pb-0" />
      </div>

      {/* Desktop / Tablet Layout */}
      <div className="hidden sm:block relative w-full">
        <div className="w-full h-screen px-4 pt-24 pb-0 grid grid-cols-12 gap-4 items-center max-w-[1536px] mx-auto">
          {/* Image left */}
          <div className="col-span-5 flex justify-center items-center relative lg:mt-[18rem] mt-20 z-10">
           
          </div>
          {/* Text right */}
          <div className="col-span-7 flex flex-col items-start justify-center z-10 ml-[15vw] mt-[-50vh] pl-4">
            <h1 className="text-primary font-bold leading-[15vh] text-8xl">
              Find Your <br /> Restroom
            </h1>
            <p className="text-black mt-4 text-xl">
              Find. Scan. Unlock
            </p>
            <div className="flex justify-start items-center gap-4 mt-6 flex-wrap">
              <div>
                <button className="bg-transparent font-normal border border-primary text-primary rounded-[2rem] hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300 px-16 py-3 text-sm whitespace-nowrap">
                  LOCATIONS
                </button>
              </div>
              <div>
                <button className="bg-primary/80 font-normal text-white rounded-[2rem] hover:bg-primary hover:scale-105 ease-in-out duration-300 px-12 py-3 text-sm whitespace-nowrap">
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-start w-full px-4 text-center mt-0 pt-4 max-w-screen-sm mx-auto min-h-[85vh] pb-16">
        <AnimatedItem className="absolute inset-0">
          <img loading="lazy"  src="/pathHomeMobile.svg" alt="path mobile" className="sm:hidden w-full h-[50rem] object-contain" />
        </AnimatedItem>
        <AnimatedItem className="z-10 flex flex-col items-center bg-transparent mt-[2rem]">
          <h1 className="text-primary text-5xl font-black leading-[3.5rem] mb-4 mt-[4rem]">Find Your <br /> Restroom</h1>
          <p className="text-[#676666] text-xl mb-8">Find. Scan. Unlock</p>
        </AnimatedItem>
        <AnimatedItem>
          <img loading="lazy"  src="/Home-character.svg" alt="character" className="relative w-[50%] ml-[4.5rem] max-w-[250px] -mt-3 mb-5 z-20" />
        </AnimatedItem>
        <div className="flex justify-between items-center w-[100%] mt-5 gap-8 z-10">
          <AnimatedItem>
            <button className="bg-transparent font-medium border border-primary text-primary rounded-[3rem] hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300 py-3 px-9 text-sm">
              LOCATIONS
            </button>
          </AnimatedItem>
          <AnimatedItem>
            <button className="bg-primary/80 font-medium whitespace-nowrap text-white rounded-[3rem] hover:bg-primary hover:scale-105 ease-in-out duration-300 py-3 px-6 text-sm">
              DOWNLOAD APP
            </button>
          </AnimatedItem>
        </div>
      </div>
    </div>
  )
}

export default Hero
