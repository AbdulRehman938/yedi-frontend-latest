import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: -40, transition: { duration: 1, ease: 'easeIn' } },
}

const Mirror = () => {
  const [marginTop, setMarginTop] = useState('')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setMarginTop('9rem')
      } else if (window.innerWidth <= 767) {
        setMarginTop('8rem')
      } else {
        setMarginTop('')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mobileStyle = marginTop ? { marginTop } : {}

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
    <div className="w-full bg-secondary h-[352vh] mt-[30rem] flex flex-col items-center relative overflow-visible">
      <div className="w-full relative flex flex-col items-center px-4 sm:px-6 overflow-visible">
        {/* Top overflowing mirror image */}
        <motion.img
          src="/Mirror1.png"
          alt="mirror1"
          className="mirror1-img w-full h-auto object-contain mt-[-8rem] inset-0 z-30 absolute"
          style={mobileStyle}
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        />

        {/* Mirror container */}
        <motion.div
          id="mirror"
          className="w-[95%] object-contain sm:w-[90%] mt-[-20rem] ml-[0rem] max-w-[1440px] z-30 hidden sm:block h-[35rem] bg-transparent relative rounded-[50rem] overflow-hidden justify-center items-center"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.img
            src="/mirror thing.svg"
            alt="mirror"
            className="mirror-svg w-full h-full z-0 object-cover absolute max-w-[1440px]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          />
        </motion.div>

        {/* Sections */}
        <div id="second" className="w-[100vw] h-[225vh] relative z-20 flex-col overflow-visible mt-[20rem] hidden sm:block">
          <img
            src="/Mirror2.svg"
            alt="Mirror desktop"
            className="hidden sm:block w-full h-auto object-contain absolute z-10 top-[-20rem]"
          />

          {/* Brownmobile pieces for small screens */}
          <div className="absolute z-10 top-[-30rem] w-full h-[10rem] flex flex-col items-center -space-y-[80px] sm:hidden">
            <img src="/brownmobile4.svg" alt="Mirror part 4" className="brownmobile4 w-full max-h-[30rem] mt-[-20rem] object-cover" />
            <img src="/brownmobile1.svg" alt="Mirror part 1" className="brownmobile1 w-full max-h-[30rem] mt-[-20rem] object-cover" />
            <img src="/brownmobile2.svg" alt="Mirror part 2" className="brownmobile2 w-full max-h-[30rem] mt-[20rem] relative top-[20rem] object-cover" />
            <img src="/brownmobile3.svg" alt="Mirror part 3" className="brownmobile3 w-full max-h-[30rem] mt-[-20rem] relative top-[30rem] object-cover" />
          </div>

          {/* Section 1 */}
          <motion.div
            className="relative z-30 w-[80%] ml-28 flex  items-center justify-between gap-10 mt-[-8rem]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full flex flex-col gap-4 text-center mt-[-10rem] px-2">
              <h1 className="text-5xl text-primary font-bold">
                We've all been there
              </h1>
              <p className="text-xl text-gray-500 font-medium">
                You're away from home and unsure where you can <span className="text-black font-medium">go</span>.
              </p>
            </div>
            <div className="w-full flex justify-center mt-24">
              <img src="/Home-character2.svg" alt="char2" className="w-1/2 max-w-md" />
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="relative z-30 w-full flex items-center justify-between gap-10 py-24"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full flex justify-center mt-40">
              <img src="/Home-character3.svg" alt="char3" className="w-1/3 max-w-md" />
            </div>
            <div className="w-full flex flex-col gap-4 text-center mt-[-5rem] mr-[-5rem] px-2">
              <h1 className="text-4xl text-primary font-bold text-left">
                A tiny ask shouldn't feel <br /> so big.
              </h1>
              <p className="text-xl w-[80%] text-gray-500 font-medium text-left">
                Waiting in line, holding it in, just to <span className="text-black font-medium">beg</span> for a restroom key. It's awkward.
              </p>
            </div>

          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="relative z-30 w-full flex items-center justify-between gap-10 py-24 mt-[-5rem]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-[70%] flex flex-col gap-4 text-center px-2 ml-[10rem] mt-[-15rem]">
              <h1 className="text-6xl text-primary font-bold text-left">
                No more asking <br /> permission
              </h1>
              <p className="text-lg text-gray-500 font-medium text-left">
                With Yedi, it's easy—go straight in and <br /> scan the bathroom door to unlock and <br /> find <span className="text-black font-medium">relief</span>.
              </p>
            </div>
            <div className="w-full flex justify-center mt-40">
              <img src="/Home-character4.svg" alt="char4" className="w-[40%] max-w-md" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Mobile Layout Wrapper ===== */}
      <div className="sm:hidden w-full bg-secondary">
        <div className="flex flex-col items-center justify-start w-full px-4 text-center pt-4 max-w-screen-sm mx-auto min-h-[200vh] pb-16 relative z-40">
          {/* Mobile-only mirror */}
          <motion.img
            src="/Mirror1.png"
            alt="mirror1"
            className="mirror1-img w-full h-auto object-contain inset-0 z-10 absolute top-[-25rem]"
            style={mobileStyle}
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          />
          <div id="mirror" className="w-full h-auto bg-transparent relative rounded-[50rem] overflow-hidden flex justify-center items-center mt-[-20rem]">
            <img src="/mirror-thing2.svg" alt="mirror" className="w-full h-full z-20 object-fill relative" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mirror
