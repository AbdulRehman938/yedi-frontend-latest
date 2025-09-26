import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().min(2, 'Too short').required('City is required'),
})

const Locations = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const prev = () =>
        setActiveIndex((prev) => {
            if (prev <= 0) return prev // already at the start
            return prev - 1
        })

    const next = () =>
        setActiveIndex((prev) => {
            if (prev >= cities.length - 1) return prev
            return prev + 1
        })


    return (
        <section className="w-full flex flex-col relative z-20 items-center pt-16 bg-gradient-to-b from-transparent to-[#f8fafc]">
            <div className='hidden md:flex absolute w-full h-[100%] -z-10 top-[-10rem] bg-white blur-3xl'></div>

            {/* ====== MOBILE VIEW ====== */}
            <div className="sm:hidden w-full flex flex-col items-start mt-[0rem] px-4">
                <div className='sm:flex absolute w-[100vw] ml-[-1rem] h-[40%] -z-10 top-[2rem] bg-white blur-xl'></div>
                <div className='sm:flex absolute w-[100vw] ml-[-1rem] h-[40%] -z-10 top-[13rem] bg-white'></div>
                <h2 className="text-3xl font-bold mt-10 text-primary mb-2">Locations</h2>
                <p className="text-gray-600 text-sm mb-4">
                    Discover Yedi in your City
                </p>

                {/* Mobile carousel */}
                <div className="relative w-full overflow-hidden h-[17rem] mt-8">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-4 px-4"
                        style={{ transform: `translateX(-${activeIndex * 70}%)` }}
                    >
                        {cities.map((city, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[70%] flex flex-col items-start relative"
                            >
                                {/* Image wrapper with aspect ratio */}
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                    <img
                                        src={city.img}
                                        alt={city.name}
                                        loading="lazy"
                                        className={`w-full h-full object-cover ${i > 1 ? 'grayscale' : ''}`}
                                    />
                                    {i > 1 && (
                                        <span className="absolute bottom-14 w-full text-center left-1/2 -translate-x-1/2 text-[14px] text-white bg-white/60 px-3 py-2 rounded">
                                            COMING SOON
                                        </span>
                                    )}
                                </div>

                                {/* City name */}
                                <span className="text-sm font-medium mt-2 text-gray-700">
                                    {city.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex justify-center gap-10 w-full absolute bottom-[0.5rem] left-24">
                        <button
                            onClick={prev}
                            className="bg-primary/30 hover:bg-primary text-white rounded-full p-3"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={next}
                            className="bg-primary/30 hover:bg-primary text-white rounded-full p-3"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>


                {/* Learn More Button */}
                <div className="w-full flex justify-center mt-24">
                    <button className="px-10 py-3 bg-transparent border-2 border-third text-third rounded-full hover:bg-third">
                        LEARN MORE
                    </button>
                </div>

                {/* ====== NEWSLETTER (MOBILE ONLY) ====== */}
                <div className="w-[100vw] ml-[-1rem] mt-[2rem] h-[30rem] bg-secondary rounded-3xl relative z-20 px-4 py-8 flex flex-col items-center">
                    <h3 className="text-4xl font-bold text-primary mb-2">Yedi News Alerts!</h3>
                    <p className="text-gray-600 text-center mt-10 mb-6">
                        Be the first to know when Yedi comes to your town, get special offers, and more!
                    </p>

                    <Formik
                        initialValues={{ email: '', city: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            alert(`Submitted: ${JSON.stringify(values, null, 2)}`)
                            resetForm()
                        }}
                    >
                        {() => (
                            <Form className="flex flex-col gap-4 mt-10 w-full max-w-sm">
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
                                    className="px-8 py-3 bg-primary w-[70%] ml-10 text-white rounded-full hover:bg-third"
                                >
                                    SUBMIT
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>


            {/* ====== DESKTOP VIEW ====== */}
            <div className="hidden sm:flex flex-col h-[40rem] items-start w-full max-w-7xl px-8">
                <h1 className="text-5xl font-[#4c4c4c] text-primary mb-6 ml-[6rem]">Locations</h1>
                <p className="text-lg text-gray-500 mb-8 ml-[6rem]">
                    Discover Yedi in your City
                </p>

                <div className="relative w-full left-[6rem] overflow-hidden">
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
                                    loading="lazy"
                                    className={`w-full h-full object-cover rounded-2xl ${i > 1 ? 'grayscale' : ''
                                        }`}
                                />
                                {i > 1 && (
                                    <div className="absolute inset-0 rounded-2xl bg-[#4c4c4c]/40 flex items-center justify-center">
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
            <div className="hidden sm:flex w-full bg-secondary h-[70vh] z-40 rounded-3xl mt-16 px-4 lg:px-8 py-12flex-col lg:flex-row items-center justify-around gap-8">
                <div className="flex flex-col gap-4 text-left mt-[-10rem] lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-[#4c4c4c] text-primary">
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
