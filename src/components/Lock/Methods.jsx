import React, { useState, useEffect } from 'react'
import { MdQrCodeScanner, MdNfc } from 'react-icons/md'
import { BiGridAlt } from 'react-icons/bi'
import { HiOutlineKey } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Lenis from '@studio-freight/lenis'

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

const Methods = () => {
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
        <div className="w-full h-full p-6 bg-transparent">
            {/* Access Methods Section */}
            <div className="mb-8 w-[95%]">
                <h2 className="text-6xl font-medium text-primary mb-4">Access Methods</h2>

                <div className="grid grid-cols-2 gap-4 mb-6 mt-10">
                    {/* QR Scan */}
                    <div className="bg-[#e1e1e1] rounded-3xl p-4 flex items-center gap-3 shadow-sm">
                        <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                            <MdQrCodeScanner className="w-10 h-10 text-gray-600" />
                        </div>
                        <span className="text-gray-800 text-2xl ml-[1rem] font-medium">QR Scan</span>
                    </div>

                    {/* NFC Tap */}
                    <div className="bg-[#e1e1e1] rounded-3xl p-4 flex items-center gap-3 shadow-sm">
                        <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                            <MdNfc className="w-10 h-10 text-gray-600" />
                        </div>
                        <span className="text-gray-800 text-2xl ml-[1rem] font-medium">NFC Tap</span>
                    </div>

                    {/* Keypad Code */}
                    <div className="bg-[#e1e1e1] rounded-3xl p-4 flex items-center gap-3 shadow-sm">
                        <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                            <BiGridAlt className="w-10 h-10 text-gray-600" />
                        </div>
                        <span className="text-gray-800 text-2xl ml-[1rem] font-medium">Keypad Code</span>
                    </div>

                    {/* Master Key */}
                    <div className="bg-[#e1e1e1] rounded-3xl p-4 flex items-center gap-3 shadow-sm">
                        <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                            <HiOutlineKey className="w-10 h-10 text-gray-600" />
                        </div>
                        <span className="text-gray-800 text-2xl ml-[1rem] font-medium">Master Key</span>
                    </div>
                </div>
            </div>

            {/* Product Details Section */}
            <div className='mt-20 w-[95%]'>
                <h2 className="text-7xl font-medium text-primary mb-8">Product Details</h2>

                <div className="bg-transparent rounded-lg overflow-hidden">
                    {/* Finish */}
                    <div className="flex justify-start items-start h-48 gap-[37%] pt-10 pl-2 border-b border-gray-700 border-t">
                        <span className="text-gray-500 font-medium text-5xl">Finish</span>
                        <span className="text-gray-500 text-3xl text-left ">Matte Black</span>
                    </div>

                    {/* Material */}
                    <div className="flex justify-start items-start h-48 gap-[36%] pt-10 pl-2 border-b border-gray-700 border-t">
                        <span className="text-gray-500 font-medium text-4xl">Material</span>
                        <span className="text-gray-500 text-2xl text-left">Vibranium Exterior</span>
                    </div>

                    {/* Dimensions */}
                    <div className="pl-2 border-b border-gray-700">
                        <div className="flex justify-start h-72 gap-[33%] pt-10 items-start mb-2">
                            <span className="text-gray-500 font-medium text-4xl">Dimensions</span>
                            <div className="text-gray-500 text-left text-2xl">
                                <div className="font-medium mb-1">External (W x H x D)</div>
                                <div className="mb-2">86mm x 250mm x 45mm</div>
                                <div className="mb-2">3.39" x 9.84" x 1.93"</div>

                                <div className="font-medium mb-1 mt-3">Internal (W x H x D)</div>
                                <div className="mb-2">86mm x 234mm x 35mm</div>
                                <div>3.39" x 9.21" x 1.38"</div>
                            </div>
                        </div>
                    </div>

                    {/* Battery */}
                    <div className="flex justify-start h-52 gap-[38%] items-start pt-10 pl-2 border-b border-gray-700">
                        <span className="text-gray-500 font-medium text-4xl">Battery</span>
                        <span className="text-gray-500 text-2xl text-left max-w-xs">
                            Not sure if we actually want to put battery information but its here just in case.
                        </span>
                    </div>

                    {/* What's Included */}
                    <div className="pl-2">
                        <div className="flex justify-start h-64 gap-[28%] items-start pt-10">
                            <span className="text-gray-500 font-medium text-4xl">What's Included</span>
                            <div className="text-gray-500 text-2xl text-left">
                                <div>Yedi Zen Lock</div>
                                <div>Installation Guide</div>
                                <div>Battery Charging Unit</div>
                                <div>Customer Code Primer</div>
                                <div>Mounting Hardware</div>
                                <div>White Glove Installation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










            <div className='w-full min-h-screen relative flex flex-col justify-start rounded-t-[4rem] items-start bg-white overflow-hidden py-16 lg:py-24'>
                
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
                </motion.div></div>
        </div>
    )
}

export default Methods