import React, { useState } from 'react';
const demoImages = [
  '/MoveLock1.svg',
  '/MoveLock2.svg',
  '/MoveLock3.svg',
  '/MoveLock4.svg',
];

const LockMover = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    console.log('Next clicked');
    setActiveIndex((prev) => (prev + 1) % demoImages.length);
  };

  const prevImage = () => {
    console.log('Prev clicked');
    setActiveIndex((prev) => (prev === 0 ? demoImages.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-transparent mt-10">
      {/* ===== Desktop / Tablet View ===== */}
      <div className="hidden sm:flex w-full h-[60rem] flex-row justify-center items-center rounded-xl">
        {/* LEFT SIDE */}
        <div
          id="left"
          className="w-[45%] h-full flex flex-col justify-center items-center relative"
        >
          <div className="pointer-events-none relative">
            <img
              src={demoImages[activeIndex]}
              loading="lazy"
              alt="Zen Lock"
              className={`h-[30rem] object-contain lg-xl:h-[25rem] ${activeIndex === 3 ? 'h-[25rem] lg-xl:h-[20rem]' : ''}`}
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-10 text-gray-600 font-thin hover:text-[#4c4c4c] text-7xl z-50 pointer-events-auto"
          >
            <img loading="lazy" src="/Left arrow.svg" alt="left" className='w-16 h-16' />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-10 text-gray-600 font-thin hover:text-[#4c4c4c] text-7xl z-50 pointer-events-auto"
          >
            <img loading="lazy" id='right-arrow' src="/Left arrow.svg" alt="right" className='w-16 h-16 rotate-180' />
          </button>

          <div className="flex gap-6 mt-10 relative z-30">
            {demoImages.map((img, index) => (
              <img
                key={index}
                loading="lazy"
                src={img}
                alt={`thumbnail-${index}`}
                className={`w-24 h-24 object-contain rounded-2xl cursor-pointer border-2 border-third transition-colors ${activeIndex === index ? 'border-gray-700' : 'border-transparent'
                  } ${index < 3 ? 'bg-white p-2' : 'bg-gray-100'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          id="right"
          className="w-[45%] h-full flex flex-col justify-center items-start px-10 space-y-12 text-gray-700"
        >
          <h2 className="text-6xl font-semibold text-third">Zen Lock</h2>
          <hr className="w-full border-gray-700" />
          <p className="text-2xl text-third/80 font-bold">A smart lock for inner peace.</p>
          <p className="text-xl leading-relaxed">
            Automate, monitor, and manage your restrooms with the Yedi Zen Lock.
            Our lock offers frictionless restroom entry with app-based or QR code unlock.
            Designed for reliability and ease, it ensures controlled access without the need
            for staff intervention.
          </p>
          <p className="text-xl leading-relaxed">
            The Yedi Zen Lock, combined with CleanSense and the entire Yedi Platform, are a
            state-of-the-art solution for America’s public/private restroom access crisis.
          </p>
          <button className="mt-6 px-12 py-4 bg-[#bab5a2] hover:bg-gray-500 text-white rounded-full transition-all">
            BOOK A DEMO
          </button>
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="flex sm:hidden flex-col items-start w-full px-4 py-10 gap-8 text-left">
        {/* Mover Image Carousel */}
        <div className="relative w-full flex justify-center">
          <img
            src={demoImages[activeIndex]}
            loading="lazy"
            alt="Zen Lock"
            className="w-[90%] h-[20rem] object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute -left-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#4c4c4c] text-4xl z-50"
          >
            <img loading="lazy" src="/Left arrow.svg" alt="left" className='w-10 h-10' />
          </button>
          <button
            onClick={nextImage}
            className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#4c4c4c] text-4xl z-50"
          >
            <img loading="lazy" src="/Left arrow.svg" alt="left" className='w-10 h-10 rotate-180' />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4 justify-center">
          {demoImages.map((img, index) => (
            <img
              key={index}
              src={img}
              loading="lazy"
              alt={`thumbnail-${index}`}
              className={`w-16 h-16 object-contain rounded-xl cursor-pointer border-2 transition-colors ${activeIndex === index ? 'border-gray-700' : 'border-transparent'
                }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Zen Lock Heading */}
        <h2 className="text-5xl font-bold text-third text-left mt-6">Zen Lock</h2>
        <hr className='text-[#4c4c4c] bg-[#4c4c4c] w-[90vw] ml-[-1rem] h-[0.1rem]' />
        {/* Text Content */}
        <p className="text-xl font-semibold text-third/80">A smart lock for inner peace.</p>
        <p className="font-normal text-base text-[#676666]">
          Automate, monitor, and manage your restrooms with the Yedi Zen Lock. Our lock offers
          frictionless restroom entry with app-based or QR code unlock. Designed for reliability
          and ease, it ensures controlled access without staff intervention.
        </p>
        <p className="font-normal text-base text-[#676666]">
          The Yedi Zen Lock, combined with CleanSense and the entire Yedi Platform, are a
          state-of-the-art solution for America’s public/private restroom access crisis.
        </p>

        <button className="mt-4 px-10 py-3 ml-14 bg-[#bab5a2] hover:bg-gray-500 text-white rounded-full transition-all">
          BOOK A DEMO
        </button>
      </div>
    </div>
  );
};

export default LockMover;
