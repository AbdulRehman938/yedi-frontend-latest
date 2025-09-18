import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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
        <div className='locations-container w-full h-screen relative flex flex-col justify-center items-start bg-white 2xl:h-[90rem]'>
            {/* Gradient BG */}
            <div className='locations-bg-top absolute w-full h-[10rem] -top-10 bg-gradient-to-t from-white to-background 2xl:mt-[-10rem] 2xl:h-[30rem]'></div>
            <div className='absolute w-full h-[10rem] bg-third bottom-0'></div>

            {/* Locations Section */}
            <motion.div
                className='locations-section w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col justify-start items-start bg-transparent z-10 lg:ml-20 lg:mt-[-20rem] 2xl:pt-[20rem]'
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className='locations-heading text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6'>Locations</h1>
                <p className='locations-subtext text-lg lg:text-xl font-semibold text-gray-500'>Discover Yedi in your City</p>

                <motion.div
                    className='city-carousel relative w-[100vw] mt-12 lg:mt-16 2xl:w-[100vw] '
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="overflow-hidden 2xl:overflow-visible">
                        <div
                            id="city-container"
                            className="city-list flex transition-transform duration-500 ease-in-out gap-4 lg:gap-6"
                            style={{ transform: `translateX(-${index * 18}rem)` }}
                        >
                            {cities.map((city, i) => (
                                <motion.div
                                    key={i}
                                    className="city-card h-[16rem] lg:h-[20rem] w-[16rem] lg:w-[15rem] xl:w-[20rem] flex-shrink-0 2xl:w-[22rem] "
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
                    <div className='city-arrows flex justify-center gap-4 lg:gap-6 items-center mt-6 lg:mt-8 2xl:ml-[50rem] lg:ml-[30rem]'>
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

            <motion.div className="w-full flex justify-center mt-8 lg:mt-12">
                <button
                    className='learn-more-btn text-gray-600 px-8 py-3 border-2 border-gray-500 text-base lg:text-lg cursor-pointer hover:bg-secondary hover:scale-105 transition duration-300 hover:border-transparent rounded-3xl flex justify-center items-center'
                >
                    LEARN MORE
                </button>
            </motion.div>

            {/* Newsletter Section with Formik */}
            <motion.div
                className='newsletter-section w-full bg-secondary rounded-t-[3rem] z-40 flex flex-col justify-center items-center gap-8 2xl:h-[50rem] lg:p-10 lg:h-[30rem] lg:my-5 lg:flex-row lg:justify-between lg:items-center lg:gap-0 lg:rounded-[5rem] px-6 py-10 2xl:px-20 2xl:py-16 2xl:mt-[5rem]'
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className='newsletter-text w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6 text-center lg:text-left'>
                    <h1 className='newsletter-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary'>Yedi News Alerts!</h1>
                    <p className='newsletter-subtext text-base lg:text-lg xl:text-xl text-gray-600'>
                        Be the first to know when Yedi comes to your town, get special offers and discounts from partners, and more!
                    </p>
                </div>

                <Formik
                    initialValues={{ email: '', city: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        alert(`Submitted: ${JSON.stringify(values, null, 2)}`)
                        resetForm()
                    }}
                >
                    {() => (
                        <Form className='newsletter-form w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6'>
                            <div className='form-field w-full'>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className='form-input py-3 px-4 w-full border-2 border-third text-third text-base lg:text-lg xl:text-xl rounded-full bg-transparent focus:outline-none focus:border-primary'
                                />
                                <ErrorMessage name="email" component="div" className="form-error text-red-500 text-sm mt-1 ml-4" />
                            </div>
                            <div className='form-field w-full'>
                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className='form-input py-3 px-4 w-full border-2 border-third text-third text-base lg:text-lg xl:text-xl rounded-full bg-transparent focus:outline-none focus:border-primary'
                                />
                                <ErrorMessage name="city" component="div" className="form-error text-red-500 text-sm mt-1 ml-4" />
                            </div>
                            <button
                                type="submit"
                                className='form-submit-btn py-3 px-8 lg:px-12 text-white text-base lg:text-lg xl:text-xl rounded-full bg-primary hover:bg-third transition duration-300 self-center lg:self-start'
                            >
                                SUBMIT
                            </button>
                        </Form>
                    )}
                </Formik>
            </motion.div>
        </div>
    )
}

export default Locations
