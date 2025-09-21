import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const panels = [
  {
    title: 'CONTROL',
    color: 'bg-[#668F85]',
    content:
      'Control your restrooms like never before with live monitoring and easy access settings.',
  },
  {
    title: 'EARN',
    color: 'bg-[#5E7972]',
    content:
      'Generate revenue streams by offering premium restroom experiences and partner discounts.',
  },
  {
    title: 'UNLOCK',
    color: 'bg-[#535E5B]',
    content:
      'Unlock smart features that improve hygiene and user satisfaction seamlessly.',
  },
  {
    title: 'INTEGRATE',
    color: 'bg-[#4C4C4C]',
    content:
      'Integrate with your existing systems for staff, maintenance, and customer analytics.',
  },
];

const Hero = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary text-white mt-[-5rem] w-full flex flex-col items-center overflow-hidden relative">
      {/* Main Title */}
      <div className="w-full h-[50rem] flex items-center justify-center">
        <h1 className="text-[12rem] text-white font-black leading-[10rem] w-[70%] text-center">
          Restrooms Reimagined
        </h1>
      </div>
      <img
        src="/Yedi-Lock1.svg"
        alt="lock1"
        className="w-[50%] h-full object-contain absolute z-10 top-[-13rem] right-[15rem]"
      />

      {/* Panels */}
      <div className="w-full mt-[25rem] flex flex-col items-center gap-[5rem] bg-[#6FA598] rounded-t-[5rem] pt-[5rem] text-white relative z-30">
        <h1 className="text-5xl font-semibold w-[60%] leading-tight text-center">
          It’s still your bathroom, but better. With the Yedi platform you have more control over your
          bathroom, cleaner experiences for your customers, and better conditions for your staff.
        </h1>
        <button className="p-5 px-20 rounded-[5rem] cursor-pointer hover:scale-105 duration-300 ease-in-out border-white border-2 text-white bg-transparent text-xl">
          About Us
        </button>

        <div className="w-full flex flex-col">
          {panels.map((panel, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoverIndex === index;

            return (
              <div key={index} className="transition-all duration-500 ease-in-out overflow-hidden">
                {/* Header */}
                <div
                  className={`flex justify-between items-center px-20 py-28 cursor-pointer select-none transition-colors duration-300 ${isOpen || isHovered ? panel.hoverColor : panel.color
                    }`}
                  onClick={() => togglePanel(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <h2 className="text-white font-bold text-5xl">{panel.title}</h2>
                  {isOpen ? (
                    <FaMinus className="text-white font-bold text-5xl transition-transform duration-300" />
                  ) : (
                    <FaPlus className="text-white font-bold text-5xl transition-transform duration-300" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`px-20 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[50rem] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                    }`}
                >
                  <p className="text-lg">{panel.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
