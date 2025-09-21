import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    setActiveIndex((prev) =>
      prev === 0 ? demoImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full h-[60rem] bg-transparent flex flex-row justify-center items-center mt-10 rounded-xl">
      {/* LEFT SIDE */}
      <div
        id="left"
        className="w-[45%] h-full flex flex-col justify-center items-center relative"
      >
        {/* Main Image */}
        <div className="pointer-events-none relative">
          <img
            src={demoImages[activeIndex]}
            alt="Zen Lock"
            className="h-[35rem] object-contain"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-10 text-gray-600 hover:text-black text-7xl z-50 pointer-events-auto"
        >
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-10 text-gray-600 hover:text-black text-7xl z-50 pointer-events-auto"
        >
          <FaChevronRight />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-6 mt-10">
          {demoImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              className={`w-20 h-20 object-contain rounded-2xl cursor-pointer border-4 border-third transition-colors ${
                activeIndex === index
                  ? 'border-gray-700'
                  : 'border-transparent'
              }`}
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
        <h2 className="text-8xl font-semibold text-third">Zen Lock</h2>
        <hr className="w-full border-gray-700" />
        <p className="text-3xl text-third/80 font-bold">A smart lock for inner peace.</p>
        <p className="text-2xl leading-relaxed">
          Automate, monitor, and manage your restrooms with the Yedi Zen Lock.
          Our lock offers frictionless restroom entry with app-based or QR code
          unlock. Designed for reliability and ease, it ensures controlled access
          without the need for staff intervention.
        </p>
        <p className="text-2xl leading-relaxed">
          The Yedi Zen Lock, combined with CleanSense and the entire Yedi
          Platform, are a state-of-the-art solution for America’s public/private
          restroom access crisis.
        </p>
        <button className="mt-6 px-12 py-4 bg-[#bab5a2] hover:bg-gray-500 text-white rounded-full transition-all">
          BOOK A DEMO
        </button>
      </div>
    </div>
  );
};

export default LockMover;
