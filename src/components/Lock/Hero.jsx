import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  ControlContent,
  EarnContent,
  UnlockContent,
  IntegrateContent,
} from './PanelContent';

const panels = [
  {
    title: 'CONTROL',
    color: 'bg-[#668F85]',
    hoverColor: 'bg-[#7AA99E]',
    activeColor: 'bg-[#4F6D65]',
    Content: ControlContent,
  },
  {
    title: 'EARN',
    color: 'bg-[#5E7972]',
    hoverColor: 'bg-[#72938B]',
    activeColor: 'bg-[#4B615B]',
    Content: EarnContent,
  },
  {
    title: 'UNLOCK',
    color: 'bg-[#535E5B]',
    hoverColor: 'bg-[#6A7A76]',
    activeColor: 'bg-[#424C49]',
    Content: UnlockContent,
  },
  {
    title: 'INTEGRATE',
    color: 'bg-[#4C4C4C]',
    hoverColor: 'bg-[#656565]',
    activeColor: 'bg-[#3A3A3A]',
    Content: IntegrateContent,
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
        <h1 className="text-9xl text-white font-black leading-[10rem] w-[70%] text-center">
          Restrooms Reimagined
        </h1>
      </div>
      <img
        src="/Yedi-Lock1.svg"
        alt="lock1"
        className="w-[50%] h-full object-contain absolute z-10 top-[-10rem] right-[15rem]"
      />

      {/* Panels */}
      <div className="w-full mt-[25rem] flex flex-col items-center gap-[5rem] bg-[#6FA598] rounded-t-[5rem] pt-[5rem] relative z-30">
        <h1 className="text-5xl font-semibold w-[60%] text-center leading-tight">
          It’s still your bathroom, but better. With the Yedi platform you have more control, cleaner
          experiences, and better conditions for staff.
        </h1>

        <div className="w-full flex flex-col">
          {panels.map((panel, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoverIndex === index;
            const Content = panel.Content;

            // Determine header color: darker when open, lighter on hover, default otherwise
            const headerColor = isOpen
              ? panel.activeColor
              : isHovered
              ? panel.hoverColor
              : panel.color;

            return (
              <div key={index} className="overflow-hidden transition-all duration-500">
                {/* Header */}
                <div
                  className={`flex justify-between items-center px-20 py-24 cursor-pointer transition-colors duration-300 ${headerColor}`}
                  onClick={() => togglePanel(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <h2 className="text-white font-bold text-5xl">{panel.title}</h2>
                  {isOpen ? (
                    <FaMinus className="text-white text-5xl transition-transform duration-300" />
                  ) : (
                    <FaPlus className="text-white text-5xl transition-transform duration-300" />
                  )}
                </div>

                {/* Content (always base color) */}
                <div
                  className={`${panel.color} px-20 transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[100rem] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <Content />
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
