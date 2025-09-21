import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import * as Yup from 'yup'

const cities = [
    { name: 'Washington, D.C.', img: '/Washington.svg' },
    { name: 'New York', img: '/NewYork.svg' },
    { name: 'Los Angeles', img: '/LosAngeles.svg' },
    { name: 'Chicago', img: '/Chicago.png' },
    { name: 'San Francisco', img: '/SanFrancisco.png' },
    { name: 'Miami', img: '/Miami.png' },
]

const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().min(2, 'Too short').required('City is required')
})

const Locations = () => {
    const [index, setIndex] = useState(0)

    const scrollLeft = () => setIndex(prev => Math.max(prev - 1, 0))
    const scrollRight = () => setIndex(prev => Math.min(prev + 1, cities.length - 3))

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
            smoothTouch: true,
            gestureOrientation: 'vertical',
            syncTouch: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 1.2,
            lerp: 0.1,
        })
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => lenis.destroy()
    }, [])

    return (
        <div className=' w-full min-h-screen relative flex flex-col justify-start items-start bg-white overflow-hidden py-16 lg:py-24'>
            {/* Gradient BG */}
            <div className='locations-bg-top absolute w-full h-[10rem] -top-20 bg-gradient-to-t from-white to-background'></div>
            <div className='locations-bg-bottom absolute w-full z-30 h-[10rem] bg-third bottom-0'></div>

            {/* Locations Section */}
            <motion.div
                className='locations-section w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col justify-start items-start bg-white z-10 overflow-hidden'
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className='locations-heading text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6'>Locations</h1>
                <p className='locations-subtext text-lg lg:text-xl font-semibold text-gray-500'>Discover Yedi in your City</p>

                <motion.div
                    className='city-carousel relative w-full mt-12 lg:mt-16'
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="overflow-hidden">
                        <div
                            id="city-container"
                            className="city-list flex transition-transform duration-500 ease-in-out gap-4 lg:gap-6"
                            style={{ transform: `translateX(-${index * (window.innerWidth < 1024 ? 280 : 320)}px)` }}
                        >
                            {cities.map((city, i) => (
                                <motion.div
                                    key={i}
                                    className="city-card h-[16rem] lg:h-[20rem] w-[15rem] lg:w-[18rem] xl:w-[20rem] flex-shrink-0"
                                    variants={fadeVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className="city-img-wrapper h-[85%] w-full rounded-2xl lg:rounded-3xl overflow-hidden relative">
                                        <img
                                            loading="lazy"
                                            src={city.img}
                                            alt={city.name}
                                            className={`city-img w-full h-full object-cover transition duration-300 ${i > 1 ? 'filter grayscale' : ''}`}
                                        />
                                        {i > 1 && (
                                            <div className="city-coming-soon absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                                                <span className="city-coming-soon-text text-white text-lg lg:text-2xl xl:text-3xl font-bold tracking-widest">
                                                    COMING SOON
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="city-name text-base lg:text-lg text-gray-500 mt-2 text-center">{city.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <div className='city-arrow s flex justify-center gap-4 lg:gap-6 items-center mt-6 lg:mt-8 ml-[10rem]'>
                        <button
                            onClick={scrollLeft}
                            className='arrow-left w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-background hover:bg-primary flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300'
                            disabled={index === 0}
                        >
                            <FaChevronLeft className='arrow-icon text-white text-lg lg:text-xl' />
                        </button>
                        <button
                            onClick={scrollRight}
                            className='arrow-right w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-background hover:bg-primary flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300'
                            disabled={index >= cities.length - 3}
                        >
                            <FaChevronRight className='arrow-icon text-white text-lg lg:text-xl' />
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="w-full flex justify-center mt-10 lg:mt-12">
                <button
                    className='learn-more-btn text-gray-600 px-8 py-3 border-2 border-gray-500 text-base lg:text-lg cursor-pointer hover:bg-secondary hover:scale-105 transition duration-300 hover:border-transparent rounded-3xl flex justify-center items-center'
                >
                    LEARN MORE
                </button>
            </motion.div>

           
        </div>
    )
}

export default Locations
