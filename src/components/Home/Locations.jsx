import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Lenis from '@studio-freight/lenis'

const cities = [
    { name: 'Washington, D.C.', img: '/Washington.svg' },
    { name: 'New York', img: '/NewYork.svg' },
    { name: 'Los Angeles', img: '/LosAngeles.svg' },
    { name: 'Chicago', img: '/Chicago.png' },
    { name: 'San Francisco', img: '/SanFrancisco.png' },
    { name: 'Miami', img: '/Miami.png' },
]

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().min(2, 'Too short').required('City is required'),
})

const Locations = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
            smoothTouch: true,
        })
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => lenis.destroy()
    }, [])

    const prev = () =>
        setActiveIndex((prev) => {
            if (prev <= 0) return prev // already at the start
            return prev - 1
        })

    const next = () =>
        setActiveIndex((prev) => {
            if (prev >= cities.length - 1) return prev // already at the end, don’t move
            return prev + 1
        })


    return (
        <section className="w-full flex flex-col relative z-20 items-center py-16 bg-gradient-to-b from-transparent to-[#f8fafc]">
            <div className='absolute w-full h-[100%] -z-10 top-[-10rem] bg-white blur-3xl'></div>
            {/* ====== MOBILE VIEW ====== */}
            <div className="sm:hidden w-full flex flex-col items-start px-4">
                <h2 className="text-3xl font-bold text-primary mb-2">Locations</h2>
                <p className="text-gray-600 text-sm mb-4">
                    Discover Yedi in your City
                </p>

                {/* Mobile carousel */}
                <div className="relative w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-4"
                        style={{
                            transform: `translateX(-${activeIndex * 60}%)`,
                        }}
                    >
                        {cities.map((city, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 relative w-[60%] h-[100%] flex flex-col items-start"
                            >
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className={`w-full h-[100%] object-cover rounded-xl ${i > 1 ? 'grayscale' : ''
                                        }`}
                                />
                                {i > 1 && (
                                    <span className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded">
                                        COMING SOON
                                    </span>
                                )}
                                <span className="mt-2 text-base font-medium text-gray-700">
                                    {city.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
                        <button
                            onClick={prev}
                            className="bg-black/40 text-white rounded-full p-2"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={next}
                            className="bg-black/40 text-white rounded-full p-2"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Learn More Button */}
                <div className="w-full flex justify-center mt-8">
                    <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-third">
                        LEARN MORE
                    </button>
                </div>
            </div>

            {/* ====== DESKTOP VIEW ====== */}
            <div className="hidden sm:flex flex-col h-[40rem] items-start w-full max-w-7xl px-8">
                <h1 className="text-5xl font-black text-primary mb-6 ml-[3rem]">Locations</h1>
                <p className="text-lg text-gray-500 mb-8 ml-[3rem]">
                    Discover Yedi in your City
                </p>

                <div className="relative w-full left-[10rem] overflow-hidden">
                    <div
                        className="flex gap-6 h-[20rem] transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * 320}px)`,
                        }}
                    >
                        {cities.map((city, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[16rem] h-[15rem] relative"
                            >
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className={`w-full h-full object-cover rounded-2xl ${i > 1 ? 'grayscale' : ''
                                        }`}
                                />
                                {i > 1 && (
                                    <div className="absolute inset-0 rounded-2xl bg-black/40 flex items-center justify-center">
                                        <span className="text-white text-xl font-bold tracking-widest">
                                            COMING SOON
                                        </span>
                                    </div>
                                )}
                                <p className="text-center text-gray-600 mt-2">{city.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows */}
                <div className="relative w-full left-[85%] top-10 flex gap-4">
                    <button
                        onClick={prev}
                        className="bg-primary/50 text-white hover:bg-primary rounded-full p-5"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className="bg-primary/50 hover:bg-primary text-white rounded-full p-5"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Learn More Button */}
                <div className="ml-[43%] mt-[10%]">
                    <button className="px-8 py-3 border-2 border-gray-500 rounded-3xl text-gray-700 hover:bg-secondary hover:border-transparent">
                        LEARN MORE
                    </button>
                </div>
            </div>

            {/* ====== NEWSLETTER FORM ====== */}
            <div className="w-full bg-secondary h-[60vh] z-40 rounded-3xl mt-16 px-4 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-around gap-8">
                <div className="flex flex-col gap-4 text-left mt-[-10rem] lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-black text-primary">
                        Yedi News Alerts!
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg">
                        Be the first to know when Yedi comes to your town, <br /> get special
                        offers, and more!
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
                        <Form className="flex flex-col mt-20 gap-4 w-full max-w-md">
                            <div>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border-2 border-third rounded-full px-4 py-3"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 ml-2"
                                />
                            </div>
                            <div>
                                <Field
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                    className="w-full border-2 border-third rounded-full px-4 py-3"
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 ml-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-third"
                            >
                                SUBMIT
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Locations
