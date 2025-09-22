import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      smoothTouch: true,
      gestureOrientation: 'vertical',
      syncTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
      lerp: 0.15,
    })
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="w-full overflow-hidden bg-transparent min-h-screen">
      {/* Background Images */}
      <div className="absolute w-full h-full">
        <AnimatedItem className="absolute inset-0">
          <img src="/path.svg" alt="path" className="hidden sm:block w-full h-full min-h-screen object-cover" />
        </AnimatedItem>
        <AnimatedItem className="absolute inset-0">
          <img src="/pathHomeMobile.svg" alt="path mobile" className="sm:hidden w-full h-[50rem] object-contain" />
        </AnimatedItem>
        <div className="pb-[50rem] sm:pb-0" />
      </div>

      {/* Desktop / Tablet Layout */}
      <div className="hidden sm:block relative w-full">
        <div className="w-full h-screen px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 pt-24 pb-0 grid grid-cols-12 gap-4 lg:gap-8 items-center max-w-[1536px] mx-auto ">
          {/* Image left */}
          <AnimatedItem className="col-span-5 flex justify-center items-center relative z-10 xl:mt-[4rem] 2xl:mt-[-5] 3xl:mt-[5rem]">
            <img src="/Home-character.svg" alt="character" className="w-[70%] sm:w-[65%] md:w-[75%] lg:w-[85%] xl:w-[75%] 3xl:w-[120%] 3xl:mt-[-5rem] 2xl:w-[120%] 2xl:mt-[-5rem] max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px]" />
          </AnimatedItem>
          {/* Text right */}
          <AnimatedItem className="col-span-7 flex flex-col items-start justify-center z-10 pl-4 lg:pl-0 xl:mt-[-30rem] 3xl:ml-[13rem] 3xl:mb-[-15rem] 2xl:mt-[-30rem] 2xl:ml-[10rem] lg:mt-[-35rem] lg:ml-[6rem]  ">
            <h1 className="text-primary font-bold leading-tight
                sm:text-[2.5rem] sm:leading-[2.2rem]
                md:text-[3.5rem] md:leading-[3rem]
                lg:text-[6rem] lg:leading-[5rem]
                xl:text-[5.5rem] xl:mt-[10rem] xl:leading-[5rem]
                2xl:text-[8rem] 2xl:leading-[7rem]
                3xl:text-[8rem] 3xl:leading-[7rem]">
              Find Your <br /> Restroom
            </h1>
            <p className="text-black mt-4 lg:mt-6
                sm:text-base
                md:text-lg
                lg:text-xl lg:ml-[0.5rem]
                xl:text-2xl
                2xl:text-3xl 2xl:ml-4">
              Find. Scan. Unlock
            </p>
            <div className="flex justify-start items-center gap-4 lg:gap-6 mt-6 lg:mt-8 flex-wrap">
              <AnimatedItem>
                <button className="bg-transparent font-medium border border-primary text-primary rounded-[2rem]
                    hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300 lg:px-10
                    px-4 py-2 sm:px-6 sm:py-3 text-sm lg:text-base whitespace-nowrap 2xl:px-16">
                  LOCATIONS
                </button>
              </AnimatedItem>
              <AnimatedItem>
                <button className="bg-primary/80 font-medium text-white rounded-[2rem]
                    hover:bg-primary hover:scale-105 ease-in-out duration-300 2xl:px-14
                    px-4 py-2 sm:text-sm xs:text-xs text-sm lg:text-base whitespace-nowrap">
                  DOWNLOAD APP
                </button>
              </AnimatedItem>
            </div>
          </AnimatedItem>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-start w-full px-4 text-center mt-0 pt-4 max-w-screen-sm mx-auto min-h-[85vh] pb-16">
        <AnimatedItem className="z-10 flex flex-col items-center bg-transparent mt-20">
          <h1 className="text-primary text-7xl font-bold leading-tight mb-4">Find Your Restroom</h1>
          <p className="text-black text-xl mb-8">Find. Scan. Unlock</p>
        </AnimatedItem>
        <AnimatedItem>
          <img src="/Home-character.svg" alt="character" className="relative w-[65%] ml-6 left-4 max-w-[250px] mt-10 mb-5 bottom-4 z-20" />
        </AnimatedItem>
        <div className="flex justify-between items-center w-[90%] gap-8 z-10">
          <AnimatedItem>
            <button className="bg-transparent font-medium border border-primary text-primary rounded-[2rem]
              hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300
              py-2 px-8 text-sm xs:px-6 xss:px-6">
              LOCATIONS
            </button>
          </AnimatedItem>
          <AnimatedItem>
            <button className="bg-primary/80 font-medium whitespace-nowrap text-white rounded-[2rem]
              hover:bg-primary hover:scale-105 ease-in-out duration-300
              py-2 px-4 text-sm xs:text-xs xs:py-3 xss:text-xs xss:px-6 xss:py-3">
              DOWNLOAD APP
            </button>
          </AnimatedItem>
        </div>
      </div>
    </div>
  )
}

export default Hero
