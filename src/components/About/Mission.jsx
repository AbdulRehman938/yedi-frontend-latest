import React from 'react'

const Mission = () => {
    return (
        <>
            {/* Desktop View - Hidden on mobile */}
            <div className='hidden sm:flex w-full h-[180vw] bg-[#efece9] relative top-[-5vw] flex-col justify-center items-center gap-[25vw] 3xl:top-[-5vw] 3xl:h-[150vw] 4xl:top-[-10vw]'>
                <div id='child1' className='h-[60%] w-[70%] flex flex-col bg-transparent justify-center items-start text-left gap-20 relative z-10'>
                    <h2 className='text-xl font-semibold text-[#B9B5A2] text-left'>Our Story</h2>
                    <div className='w-full h-[80%] flex flex-col justify-between items-start text-left'>
                        <h1 className='text-3xl font-bold text-[#55887C]'>Public restrooms used to terrify me</h1>
                        <p className='text-xl font-normal text-[#676666] leading-loose'>When someone once told us, “I avoid eating out unless I’m near a restroom,” we <br /> realized this wasn’t just inconvenience—it was anxiety. In fact, 44% of people feel <br /> anxious about using public restrooms, whether because of privacy concerns, <br /> cleanliness, or accessibility.</p>
                        <p className='text-xl font-normal text-[#676666] leading-loose'>These aren’t just small inconveniences—they disrupt everyday life. That’s why we <br /> built Yedi.</p>
                        <p className='text-xl font-normal text-[#676666] leading-loose'>We’ve all felt it — that awkward dance in a café, wondering if you should buy <br /> something just to ask for the code. That sinking feeling when you’re told, “Sorry, <br /> restrooms are for customers only.” Or worse, when there isn’t a restroom available at <br /> all.</p>
                        <p className='text-xl font-normal text-[#676666] leading-loose'>Yedi is a simple idea: make restroom access easy, respectful, and stress-free — for <br /> everyone. Using smart locks, QR codes, and a friendly app, we’re unlocking doors in <br /> cities across the country. No more gatekeeping. No more <br /> awkward requests. No more worrying if you’ll find a clean, accessible restroom when you need one.</p>
                        <p className='text-xl font-normal text-[#676666] leading-loose'>It’s about more than access. It’s about restoring peace of mind. It’s about helping <br /> people feel welcome wherever they are. It’s about transforming a daily pain point into <br /> something trustworthy and dignified.</p>
                        <p className='text-xl font-normal text-[#676666] leading-loose'>And it’s working — for guests, for businesses, for entire communities. Because <br /> everyone deserves to feel at home in public.</p>
                    </div>
                </div>
                {/* Background Image - Behind child1 and child2 */}
                <img src="/About curved.png" alt="curved-path" className='absolute inset-0 w-full h-full object-contain top-[60vw] z-0 3xl:top-[45vw]' />

                <div id='child2' className='w-[85%] h-[20%] bg-[#f7f6f4] rounded-[3rem] z-20 relative top-[-20vw] flex justify-around items-start px-10 pt-40'>
                    <h1 className='text-5xl font-black text-[#91BAB0]'>Our Mission</h1>
                    <div className=' w-[60%] h-[40%] rounded-[2rem] flex flex-col justify-center items-start mt-5'>
                        <p className='text-xl font-black text-[#676666]'>To make restrooms more accessible, comfortable, and <br /> secure—for everyone.</p>
                        <p className='text-xl font-black text-[#676666]'>We empower public spaces with smart tools that give <br /> people peace of mind and give businesses more <br /> control. Because no one should have to ask permission <br /> to meet a basic need.</p>
                    </div>
                </div>
            </div>

            {/* Mobile View - Only visible on mobile */}
            <div className='flex sm:hidden w-full h-[480vw] xs:h-[500vw] iphone-pro:h-[420vw] bg-[#efece9] relative flex-col items-center justify-start px-4 py-8 pt-20 gap-8 mt-[-45vw]'>
                {/* Background Image - Behind mobile content */}
                <img src="/About curved mobile.png" alt="curved-path" className='absolute inset-0 w-full h-full object-contain top-[100vw] scale-[1.2] xs:top-[180vw] iphone-pro:top-[150vw] iphone-pro:absolute z-0' />

                <div className='w-full text-center mb-4 relative z-10 px-5'>
                    <h2 className='text-lg font-semibold text-[#B9B5A2] mb-4 text-left'>Our Story</h2>
                    <h1 className='text-2xl font-bold text-[#55887C] mb-6 text-left'>Public restrooms used to terrify me</h1>
                </div>

                <div className='w-full flex flex-col gap-4 text-left px-5 mt-[-10vw] relative z-10'>
                    <p className='text-base font-normal text-[#676666] leading-relaxed'>
                        When someone once told us, "I avoid eating out unless I'm near a restroom," we realized this wasn't just inconvenience—it was anxiety. In fact, 44% of people feel anxious about using public restrooms, whether because of privacy concerns, cleanliness, or accessibility.
                    </p>
                    <p className='text-base font-normal text-[#676666] leading-relaxed'>
                        These aren't just small inconveniences—they disrupt everyday life. That's why we built Yedi.
                    </p>
                    <p className='text-base font-normal text-[#676666] leading-relaxed'>
                        We've all felt it — that awkward dance in a café, wondering if you should buy something just to ask for the code. That sinking feeling when you're told, "Sorry, restrooms are for customers only." Or worse, when there isn't a restroom available at all.
                    </p>
                    <p className='text-base font-normal text-[#676666] leading-relaxed'>
                        Yedi is a simple idea: make restroom access easy, respectful, and stress-free — for everyone. Using smart locks, QR codes, and a friendly app, we're unlocking doors in cities across the country. No more gatekeeping. No more awkward requests. No more worrying if you'll find a clean, accessible restroom when you need one.
                    </p>
                    <p className='text-base font-normal text-[#676666] leading-relaxed'>
                        It's about more than access. It's about restoring peace of mind. It's about helping people feel welcome wherever they are. It's about transforming a daily pain point into something trustworthy and dignified.
                    </p>
                    <p className='text-base font-normal text-[#676666] leading-relaxed'>
                        And it's working — for guests, for businesses, for entire communities. Because everyone deserves to feel at home in public.
                    </p>
                </div>

                <div className='w-full bg-[#f7f6f4] flex flex-col justify-center gap-10 items-start rounded-2xl p-6 mt-20 relative z-10 iphone-pro:mt-40 iphone-pro:h-[100vw]'>
                    <h1 className='text-3xl font-black text-[#91BAB0] text-center mb-4'>Our Mission</h1>
                    <div className='flex flex-col gap-4 text-left'>
                        <p className='text-lg font-bold text-[#676666]'>
                            To make restrooms more accessible, comfortable, and secure—for everyone.
                        </p>
                        <p className='text-lg font-bold text-[#676666]'>
                            We empower public spaces with smart tools that give people peace of mind and give businesses more control. Because no one should have to ask permission to meet a basic need.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission