import React, { useState } from 'react';
import {
  ControlContent,
  EarnContent,
  UnlockContent,
  IntegrateContent,
} from './PanelContent';
import LockMover from './LockMover';
import LockFeatures from './LockFeatures';
import Methods from './Methods';

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
    console.log('Toggle panel called with index:', index, 'Current openIndex:', openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#ebebeb] text-white mt-[-5rem] w-full flex flex-col items-center overflow-hidden relative">
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden sm:flex flex-col items-center w-full">
        {/* Main Title */}
        <div className="w-full h-[50rem] flex items-center justify-center">
          <h1 className="text-9xl font-kumbh text-white font-black leading-[15vh] w-[70%] text-center">
            Restrooms Reimagined
          </h1>
        </div>
        <img
          src="/Yedi-Lock1.svg"
          alt="lock1"
          className="w-[50%] h-full object-contain absolute z-10 top-[-180rem] right-[12rem]"
        />

        {/* Panels */}
        <div className="w-full mt-[25rem] flex flex-col items-center gap-[5rem] overflow-visible sm:overflow-hidden rounded-b-[4rem] bg-[#6FA598] rounded-t-[5rem] pt-[5rem] relative z-30">
          <h1 className="text-4xl font-medium w-[60%] text-center leading-tight">
            It's still your bathroom, but better. With <br /> the Yedi platform you have more control <br /> over your bathroom, cleaner
            experiences <br /> for your customers, and better conditions <br /> for your staff.
          </h1>
          <button className='bg-transparent cursor-pointer hover:bg-[#656565] border-2 border-white text-white font-normal py-3 px-20 rounded-full'>ABOUT US</button>
          <div className="w-full flex flex-col">
            {panels.map((panel, index) => {
              const isOpen = openIndex === index;
              const isHovered = hoverIndex === index;
              const Content = panel.Content;

              // Determine header color
              const headerColor = isOpen
                ? panel.activeColor
                : isHovered
                  ? panel.hoverColor
                  : panel.color;

              return (
                <div key={index} className="overflow-hidden transition-all duration-500">
                  {/* Header */}
                  <div
                    className={`flex justify-between items-center px-20 py-16 cursor-pointer transition-colors duration-300 ${headerColor}`}
                    onClick={() => togglePanel(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <h2 className="text-white font-extrabold text-3xl">{panel.title}</h2>
                    {isOpen ? (
                      <img
                        src="/Minus sign.svg"
                        alt="Open"
                        className="w-10 h-10 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src="/plus sign.svg"
                        alt="Open"
                        className="w-10 h-10 transition-transform duration-300"
                      />
                    )}

                  </div>

                  {/* Content */}
                  <div
                    className={`${panel.color} px-20 transition-all duration-500 ease-in-out ${isOpen
                      ? `max-h-[150rem] sm:max-h-[100rem] opacity-100 py-8 ${index === 3 ? 'rounded-b-[4rem]' : ''}`
                      : 'max-h-0 opacity-0 py-0'
                      }`}
                  >
                    <Content />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <LockMover />
        <div className="w-[93%] h-[7rem] bg-[#f9f9f9] rounded-3xl shadow-lg flex justify-between items-center px-5">
          <p className="text-black text-2xl">
            Want to learn more? Schedule an appointment and see the lock in action.
          </p>
          <button className="px-12 py-4 bg-[#bab5a2] hover:bg-gray-500 text-white rounded-full transition-all">
            BOOK A DEMO
          </button>
        </div>

        <div className="text-black w-[95%] h-[120rem] mt-20 flex flex-col justify-between items-center rounded-[4rem] overflow-hidden">
          <LockFeatures />
        </div>

        <div className="w-full h-[160rem] bg-transparent text-black mt-20 flex flex-col justify-between items-center overflow-hidden">
          <Methods />
        </div>
      </div>

      {/* Mobile Layout - Only visible on mobile */}
      <div className="sm:hidden flex flex-col items-center justify-start w-full px-4 text-center mt-0 pt-4 max-w-screen-sm mx-auto min-h-[85vh] pb-16">
        {/* Main Title Section */}
        <div className="z-10 flex flex-col items-center bg-transparent mt-20">
          <h1 className="text-white text-6xl font-bold leading-[4rem] mb-4">Restrooms Reimagined</h1>
        </div>

        {/* Hero Image */}
        <div className="w-full flex justify-center mb-8 mt-[20rem] ml-28 absolute">
          <img src="/Yedi-Lock1.svg" alt="lock1" className="w-[90%] max-w-[300px] h-auto object-contain" />
        </div>

        {/* Fixed the container - removed fixed height and overflow-hidden */}
        <div className='relative mt-[19rem] min-h-[40rem] sm:min-h-[51rem] w-[100vw] rounded-t-[3rem] pt-20 bg-primary'>
          {/* Subtitle Section */}
          <div className="mb-12 px-2">
            <h2 className="text-white text-3xl font-semibold leading-tight mb-4">
              It's still your bathroom, but better. With the <br /> Yedi
            </h2>
            <p className="text-[#9ac0b7] text-xl font-bold leading-relaxed">
              With the Yedi platform you have more control, cleaner experiences, and better conditions for staff.
            </p>
            <button className='text-white bg-transparent hover:bg-secondary py-2 px-10 border-2 border-white rounded-3xl mt-10'>ABOUT US</button>
          </div>

          {/* Mobile Panels - Now properly expands */}
          <div className="w-[100vw] flex flex-col">
            {panels.map((panel, index) => {
              const isOpen = openIndex === index;
              const Content = panel.Content;

              return (
                <div key={index} className="transition-all duration-500">
                  {/* Header */}
                  <div
                    className={`flex justify-between items-center w-[100vw] px-6 py-8 cursor-pointer transition-colors duration-300 ${panel.color}`}
                    onClick={() => togglePanel(index)}
                  >
                    <h3 className="text-white font-bold text-2xl">{panel.title}</h3>
                    {isOpen ? (
                      <img
                        src="/Minus sign.svg"
                        alt="Open"
                        className="w-5 h-5 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src="/plus sign.svg"
                        alt="Open"
                        className="w-5 h-5 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Content - Now properly expands without height restrictions */}
                  <div
                    className={`${panel.color} px-6 transition-all duration-500 ease-in-out ${isOpen
                      ? 'opacity-100 py-6'
                      : 'max-h-0 opacity-0 py-0 overflow-hidden'
                      }`}
                    style={{
                      maxHeight: isOpen ? 'none' : '0'
                    }}
                  >
                    <Content />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <LockMover />

        {/* Lock Features Mobile */}
        <div className="w-full">
          <LockFeatures />
        </div>

        {/* Methods Mobile */}
        <div className="w-full">
          <Methods />
        </div>
      </div>
    </div>
  );
};

export default Hero;