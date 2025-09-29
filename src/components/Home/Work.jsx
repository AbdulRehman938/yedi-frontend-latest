import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.8, ease: 'easeInOut' } },
}

const Work = () => {

    return (
        <>
            {/* ===== Desktop / Larger Screens ===== */}
            <div className="work-container w-full lg:mt-[-5rem] 3xl:mt-[-5rem] lg:h-[120rem] bg-background relative justify-center items-start hidden sm:block">
                <motion.img
                    src="/HomeWorkSlide.png"
                    loading="lazy"
                    alt="slide"
                    className="work-main-slide w-[100vw] h-[133%] object-contain absolute z-30 top-64 lg-xl:mt-[-15rem] 3xl:mt-[-5rem]"
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.2 }}
                />
                <div className="hidden sm:flex w-[70%] h-[15%] bg-background absolute z-20 lg:top-[15rem] lg:right-[45rem]"></div>

                {/* <motion.div
                    className="work-decor-box w-[15%] h-[15%] bg-[#b8dbef] absolute z-20 lg:top-[92rem] lg:left-[62rem] rounded-3xl overflow-hidden flex justify-end items-end"
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="work-decor-inner w-[90%] h-full bg-[#77b0d2] rounded-tl-3xl rounded-bl-3xl"></div>
                </motion.div> */}

                <div className="work-sections w-[80%] h-[55%] mt-[19rem] absolute z-40 ml-[10%] gap-10 flex flex-col justify-between items-center">
                    {/* Section 1 */}
                    <motion.div
                        className="work-section1 w-full h-[40%] flex flex-row justify-center items-center"
                        variants={fadeVariant}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="work-section1-img w-[50%] h-full">
                            <img
                                src="/HomeMobile.svg"
                                loading="lazy"
                                alt="mobile"
                                className="work-section1-image w-full h-full object-contain mt-16"
                            />
                        </div>
                        <div className="work-section1-text w-[48%] ml-5 mt-[-13rem] h-full flex flex-col justify-start items-start">
                            <h1 className="3xl:font-black work-section1-title text-primary font-black text-[4.5rem] relative bottom-[2rem]">
                                How it works
                            </h1>
                            <div className="work-step1 w-full ml-10 mt-10 h-[15rem] flex justify-between items-start">
                                <div className="work-step1-number w-[3rem] h-[3rem] bg-[#6fa598] rounded-full flex justify-center mt-2 items-center text-2xl text-white font-semibold">
                                    1
                                </div>
                                <div className="work-step1-content w-[85%] h-full flex flex-col justify-start gap-10 items-start">
                                    <h1 className="work-step1-title text-[#6fa598] font-bold text-6xl">Find</h1>
                                    <p className="work-step1-desc text-gray-600 text-2xl">
                                        Browse the map to find nearby <br /> restrooms with details like distance, <br /> availability, and amenities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        className="work-section2 w-full h-[40%] flex flex-row justify-center items-center mt-20"
                        variants={fadeVariant}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="work-section2-img w-[50%] h-full">
                            <img
                                src="/HomeMobile2.svg"
                                loading="lazy"
                                alt="Mobile2"
                                className="work-section2-image w-full h-full object-contain"
                            />
                        </div>
                        <div className="work-section2-text w-[50%] h-full mt-[-2rem] flex flex-col justify-start items-start">
                            <div className="work-step2 w-full ml-20 mt-5 h-[15rem] flex justify-between items-start">
                                <div className="work-step2-number w-[3rem] h-[3rem] bg-[#6fa598] rounded-full flex justify-center mt-2 items-center text-2xl text-white font-semibold">
                                    2
                                </div>
                                <div className="work-step2-content w-[85%] h-full flex flex-col justify-start gap-10 items-start">
                                    <h1 className="work-step2-title text-[#6fa598] font-bold text-6xl">Scan</h1>
                                    <p className="work-step2-desc text-gray-600 text-2xl">
                                        At the door, scan the QR code for <br /> instant access.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        className="work-section3 w-full h-[40%] flex flex-row justify-center items-center"
                        variants={fadeVariant}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="work-section3-img w-[50%] h-full">
                            <img
                                src="/HomeMobile3.svg"
                                loading="lazy"
                                alt="Mobile3"
                                className="work-section3-image w-full h-full object-contain"
                            />
                        </div>
                        <div className="work-section3-text w-[50%] mt-[-2rem] h-full flex flex-col justify-start items-start">
                            <div className="work-step3 w-full ml-20 h-[15rem] flex justify-between items-start">
                                <div className="work-step3-number w-[3rem] h-[3rem] bg-[#6fa598] rounded-full flex justify-center items-center mt-2 text-2xl text-white font-semibold">
                                    3
                                </div>
                                <div className="work-step3-content w-[85%] h-full flex flex-col justify-start gap-10 items-start">
                                    <h1 className="work-step3-title text-[#6fa598] font-bold text-6xl">Unlock</h1>
                                    <p className="work-step3-desc text-gray-600 text-2xl">
                                        When the light blinks green, turn the <br /> handle and enjoy a clean, comfortable <br /> restroom.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ===== Mobile-only Layout ===== */}
            <motion.div className="sm:hidden w-full bg-background px-4 pt-10 mt-[20rem]">
                <h1 className="text-primary font-bold text-4xl text-right mb-8">How it works</h1>

                {/* Step 1 */}
                <motion.div className="grid grid-cols-[auto_1fr] gap-4 relative">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-bold">1</div>
                        <div className="w-px flex-1 bg-dotted-line mt-2"></div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-primary font-bold text-4xl mb-1">Find</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            Browse the map to find nearby restrooms with details like distance, availability, and amenities.
                        </p>
                        <img loading="lazy" src="/HomeMobile.svg" alt="Find" className="rounded-md w-[98%] mb-8" />
                    </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div className="grid grid-cols-[auto_1fr] gap-4 relative">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-bold">2</div>
                        <div className="w-px flex-1 bg-dotted-line mt-2"></div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-primary font-bold text-4xl mb-1">Scan</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            At the door, scan the QR code for instant access.
                        </p>
                        <img loading="lazy" src="/HomeMobile2.svg" alt="Scan" className="rounded-md w-[98%] mb-8" />
                    </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div className="grid grid-cols-[auto_1fr] gap-4 relative">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-bold">3</div>
                        <div className="w-px h-[21rem] bg-dotted-line mt-2"></div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-primary font-bold text-4xl mb-1">Unlock</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            When the light blinks green, turn the handle and enjoy a clean, comfortable restroom.
                        </p>
                        <img loading="lazy" src="/HomeMobile3.svg" alt="Unlock" className="rounded-md w-[98%] mb-8" />
                    </div>
                </motion.div>

                {/* Extra image for mobile */}
                <div className="sm:hidden w-[100vw] h-full mt-[-15rem] ml-[-3rem]">
                    <img
                        src="/charslidemobile.png"
                        loading="lazy"
                      
                        className="w-[100vw] object-cover h-auto"
                    />
                </div>
            </motion.div>
        </>
    )
}

export default Work
