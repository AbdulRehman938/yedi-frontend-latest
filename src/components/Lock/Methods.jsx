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

    const scrollLeft = () => {
        setIndex((prev) => Math.max(prev - 1, 0))
    }

    const scrollRight = () => {
        setIndex((prev) => Math.min(prev + 1, cities.length - 3))
    }



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
            <div className="hidden sm:block">
                {/* Access Methods Section */}
                <div className="mb-8 w-[95%] ">
                    <h2 className="text-5xl font-medium text-primary mb-4">Access Methods</h2>

                    <div className="grid grid-cols-2 gap-4 mb-6 mt-10">
                        {/* QR Scan */}
                        <div className="bg-[#e1e1e1] rounded-3xl px-4 py-2 flex items-center gap-3 shadow-sm">
                            <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                                <img src="/QR Scan.svg" alt="QR Scan" className='w-10 h-10 object-contain' />
                            </div>
                            <span className="text-gray-800 text-2xl ml-[1rem] font-medium">QR Scan</span>
                        </div>

                        {/* NFC Tap */}
                        <div className="bg-[#e1e1e1] rounded-3xl px-4 py-2 flex items-center gap-3 shadow-sm">
                            <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                                <img src="/NFC Tap.svg" alt="NFC Tap" className='w-10 h-10 object-contain' />
                            </div>
                            <span className="text-gray-800 text-2xl ml-[1rem] font-medium">NFC Tap</span>
                        </div>

                        {/* Keypad Code */}
                        <div className="bg-[#e1e1e1] rounded-3xl px-4 py-2 flex items-center gap-3 shadow-sm">
                            <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                                <img src="/Keypad Code.svg" alt="Keypad Code" className='w-10 h-10 object-contain' />
                            </div>
                            <span className="text-gray-800 text-2xl ml-[1rem] font-medium">Keypad Code</span>
                        </div>

                        {/* Master Key */}
                        <div className="bg-[#e1e1e1] rounded-3xl px-4 py-2 flex items-center gap-3 shadow-sm">
                            <div className="w-20 h-20 flex items-center border-r-2 border-white justify-center">
                                <img src="/Master Key.svg" alt="Master Key" className='w-10 h-10 object-contain' />
                            </div>
                            <span className="text-gray-800 text-2xl ml-[1rem] font-medium">Master Key</span>
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className='mt-20 w-[95%]'>
                    <h2 className="text-5xl font-medium text-primary mb-8">Product Details</h2>

                    <div className="bg-transparent rounded-lg overflow-hidden">
                        {/* Finish */}
                        <div className="flex justify-start items-start h-40 3xl:gap-[35%] pt-10 pl-2 border-b border-gray-700 border-t lg-xl:gap-[35%]">
                            <span className="text-gray-500 font-medium text-4xl">Finish</span>
                            <span className="text-gray-500 text-2xl text-left ">Matte Black</span>
                        </div>

                        {/* Material */}
                        <div className="flex justify-start items-start h-40 3xl:gap-[32%] pt-10 pl-2 border-b border-gray-700 lg-xl:gap-[32%]">
                            <span className="text-gray-500 font-medium text-4xl">Material</span>
                            <span className="text-gray-500 text-2xl text-left">Vibranium Exterior</span>
                        </div>

                        {/* Dimensions */}
                        <div className="pl-2 border-b border-gray-700">
                            <div className="flex justify-start h-72 gap-[28%] pt-10 items-start mb-2">
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
                        <div className="flex justify-start h-52 3xl:gap-[32%] items-start pt-10 pl-2 border-b border-gray-700 lg-xl:gap-[32%]">
                            <span className="text-gray-500 font-medium text-4xl">Battery</span>
                            <span className="text-gray-500 text-2xl text-left max-w-xs">
                                Not sure if we actually want to put battery information but its here just in case.
                            </span>
                        </div>

                        {/* What's Included */}
                        <div className="pl-2">
                            <div className="flex justify-start h-64 gap-[21%] items-start pt-10">
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

                <div className='w-[100%] 3xl:h-[70vh] flex flex-col justify-around absolute z-[1100] rounded-[4rem] bottom-0 left-0 3xl:mt-[20rem] items-start py-5 bg-white overflow-hidden lg-xl:h-[100vh] 2xl:h-[80vh] xl:h-[100vh] xl:py-20 xl:mb-[-0rem] '>
                    {/* Locations Section */}
                    <motion.div
                        className='locations-section w-full max-w-7xl h-full mx-auto mr-0 pl-4 lg:px-8 flex flex-col justify-start items-start bg-white z-10 3xl:ml-[8rem]'
                        variants={fadeVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h1 className='locations-heading text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-semibold 3xl:mb-4 3xl:mt-10 lg:mb-6'>Locations</h1>
                        <p className='locations-subtext text-lg lg:text-2xl font-medium text-gray-500'>Discover Yedi in your City</p>


                        <div className="relative w-full h-[20rem] top-[5rem] left-[0rem]">
                            <div
                                className="flex w-[100vw] gap-6 h-[15rem] transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${index * (20 * 16 + 24)}px)`,
                                    // 20rem = 20*16px = 320px + gap-6(24px)
                                }}
                            >
                                {cities.map((city, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 w-[22rem] h-[18rem] relative"
                                    >
                                        <img
                                            src={city.img}
                                            alt={city.name}
                                            loading="lazy"
                                            className={`w-full h-full object-cover rounded-2xl ${i > 1 ? 'grayscale' : ''}`}
                                        />
                                        {i > 1 && (
                                            <div className="absolute inset-0 rounded-2xl bg-[#4c4c4c]/10 flex items-center justify-center">
                                                <span className="text-[#4c4c4c] w-full text-center py-4 bg-white/70 text-xl font-medium tracking-widest">
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
                        <div className='flex justify-center gap-4 lg:gap-6 items-center mt-20 ml-[60rem] 3xl:mt-[8rem] lg:mt-8 lg-xl:ml-[65rem] lg-xl:mt-[8rem]'>
                            <button
                                onClick={scrollLeft}
                                className='arrow-left w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#91bab0]/50 hover:bg-primary flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:scale-100 disabled:cursor-not-allowed'
                                disabled={index === 0}

                            >
                                <FaChevronLeft className='arrow-icon text-white hover:text-[#ffffff] text-lg lg:text-xl' />
                            </button>
                            <button
                                onClick={scrollRight}
                                className='arrow-right w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#91bab0]/50 hover:bg-primary flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:scale-100 disabled:cursor-not-allowed'
                                disabled={index >= cities.length - 3}
                            >
                                <FaChevronRight className='arrow-icon text-white hover:text-white text-lg lg:text-xl' />
                            </button>
                        </div>
                    </motion.div>


                    <motion.div className="w-full flex justify-center 3xl:mt-[-1rem] lg:mt-12 mr-10 relative z-50">
                        <button
                            className='learn-more-btn text-gray-600 px-8 py-3 border-2 border-gray-500 text-base lg:text-lg cursor-pointer hover:bg-secondary hover:scale-105 transition duration-300 hover:border-transparent rounded-3xl flex justify-center items-center'
                        >
                            LEARN MORE
                        </button>
                    </motion.div>
                </div>
            </div>



            {/** Mobile View */}
            <div className="sm:hidden mt-12 h-[110rem]  w-full flex flex-col gap-8 text-sm">
                {/* Mobile Access Methods */}
                <div className="flex flex-col gap-4 w-[90vw] ml-[-1.5rem]">
                    <h1 className='text-2xl font-semibold text-[#55887c] text-left'>Access Methods</h1>
                    {[
                        { img: '/QR Scan.svg', label: 'QR Scan' },
                        { img: '/NFC Tap.svg', label: 'NFC Tap' },
                        { img: '/Keypad Code.svg', label: 'Keypad Code' },
                        { img: '/Master Key.svg', label: 'Master Key' }
                    ].map((m, i) => (
                        <div
                            key={i}
                            className="bg-[#e1e1e1] rounded-2xl p-3 flex items-center gap-2 w-full shadow-sm"
                        >
                            <div className="w-10 h-10 flex items-center border-r border-white justify-center">
                                <img src={m.img} alt={m.label} className='w-6 h-6 object-contain' />
                            </div>
                            <span className="text-gray-800 text-base ml-3 font-medium">{m.label}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile Product Details */}
                <div className="mt-16 w-[90vw] ml-[-1rem]">
                    <h2 className="text-2xl font-semibold text-[#55887c] text-left mb-10">Product Details</h2>

                    <div className="bg-transparent rounded-lg overflow-hidden">
                        {/* Finish */}
                        <div className="flex justify-start items-start h-20 gap-[30%] pt-4 pl-2 border-b border-gray-700 border-t">
                            <span className="text-[#4C4C4C] font-medium text-lg">Finish</span>
                            <span className="text-gray-500 text-lg text-left">Matte Black</span>
                        </div>

                        {/* Material */}
                        <div className="flex justify-start items-start h-20 gap-[23%] pt-4 pl-2 border-b border-gray-700">
                            <span className="text-[#4C4C4C] font-medium text-lg">Material</span>
                            <span className="text-gray-500 text-lg text-left">Vibranium Exterior</span>
                        </div>

                        {/* Dimensions */}
                        <div className="pl-1 border-b border-gray-700">
                            <div className="flex justify-start h-64 gap-[16%] pt-6 items-start mb-2">
                                <span className="text-[#4C4C4C] font-medium text-lg">Dimensions</span>
                                <div className="text-gray-500 text-left text-base">
                                    <div className="font-medium mb-1">External (W x H x D)</div>
                                    <div className="mb-1">86mm x 250mm x 45mm</div>
                                    <div className="mb-2">3.39" x 9.84" x 1.93"</div>

                                    <div className="font-medium mb-1 mt-2">Internal (W x H x D)</div>
                                    <div className="mb-1">86mm x 234mm x 35mm</div>
                                    <div>3.39" x 9.21" x 1.38"</div>
                                </div>
                            </div>
                        </div>

                        {/* Battery */}
                        <div className="flex justify-start h-44 gap-[25%] items-start pt-6 pl-2 border-b border-gray-700">
                            <span className="text-[#4C4C4C] font-medium text-lg">Battery</span>
                            <span className="text-gray-500 text-base text-left max-w-xs">
                                Not sure if we actually want to put battery information but its here just in case.
                            </span>
                        </div>

                        {/* What's Included */}
                        <div className="">
                            <div className="flex justify-start h-48 gap-[10%] items-start pt-6">
                                <span className="text-[#4C4C4C] font-medium text-lg text-left">What's Included</span>
                                <div className="text-gray-500 text-sm text-left">
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

                {/* Mobile Locations */}
                <div className="bg-white ml-[-2.4rem] absolute w-[100vw] bottom-[0rem] h-[35rem] rounded-2xl shadow-md flex flex-col items-start pl-5 py-4 sm:hidden z-[10]">
                    <h3 className="text-4xl font-semibold text-[#55887c] mb-3 ml-3">Locations</h3>
                    <p className="text-gray-500 text-xs mb-3 ml-3">Discover Yedi in your city.</p>

                    <div className="relative w-full h-full overflow-hidden mt-10">
                        {/* Carousel Track */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-4 px-4"
                            style={{
                                transform: `translateX(-${index * 70}%)`

                            }}
                        >
                            {cities.map((city, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-[70%] flex flex-col items-start relative"
                                >
                                    {/* Image wrapper with fixed size */}
                                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                        <img
                                            loading="lazy"
                                            src={city.img}
                                            alt={city.name}
                                            className={`w-full h-full object-cover ${i > 1 ? 'grayscale' : ''
                                                }`}
                                        />
                                        {i > 1 && (
                                            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[20px] text-white bg-white/60 px-2 w-full py-2 rounded">
                                                COMING SOON
                                            </span>
                                        )}
                                    </div>
                                    {/* City name - larger and left aligned */}
                                    <span className="text-sm font-medium mt-2 text-gray-700">
                                        {city.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex justify-center gap-10 w-full absolute bottom-[8rem] left-[5rem] px-4">
                            <button
                                onClick={() =>
                                    setIndex((prev) => (prev === 0 ? cities.length - 1 : prev - 1))
                                }
                                className="bg-primary/30 hover:bg-primary text-white rounded-full p-5"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={() =>
                                    setIndex((prev) =>
                                        prev === cities.length - 1 ? 0 : prev + 1
                                    )
                                }
                                className="bg-primary/30 hover:bg-primary text-white rounded-full p-5"
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                        <button className='text-primary bg-transparent px-8 py-3 mt-[10rem] text-lg border-2 rounded-[4rem]'>LEARN MORE</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Methods
