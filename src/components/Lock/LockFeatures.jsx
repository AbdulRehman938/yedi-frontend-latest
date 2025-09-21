import React from 'react';
import { CiVolumeHigh } from 'react-icons/ci';
import { FaBluetoothB, FaMobileAlt } from 'react-icons/fa';
import { TbRadar2 } from 'react-icons/tb';

const LockFeatures = () => {
    return (
        <div className='w-full h-full flex flex-col bg-transparent justify-between items-center'>
            {/* First Feature */}
            <div
                id='first'
                className='w-full h-[32%] bg-white flex justify-between items-center rounded-[4rem] pl-20 shadow-md'
            >
                {/* Left Content */}
                <div className='flex flex-col items-start justify-center w-[45%] space-y-4'>
                    <div className='flex items-center gap-4 text-gray-400 text-5xl'>
                        <FaBluetoothB />
                        <FaMobileAlt />
                    </div>
                    <h3 className='text-6xl font-semibold text-[#55887c]'>
                        Bluetooth & NFC for tap-and-Go entry
                    </h3>
                    <p className='text-gray-500 text-2xl'>
                        Our lock responds instantly to your phone's NFC scan—fast,
                        contactless, and friction-free.
                    </p>
                </div>

                {/* Right Image */}
                <div className='flex justify-center w-1/2'>
                    <img
                        src='/Feature1.svg' // Replace with your actual image later
                        alt='Feature'
                        className='h-full w-full relative top-0 object-contain'
                    />
                </div>
            </div>

            {/* Empty Placeholders */}
            <div
                id='second'
                className='w-full h-[32%] bg-white flex justify-between items-center rounded-[4rem] pr-12 shadow-md'
            >
                <div className='flex justify-center w-1/2'>
                    <img
                        src='/Feature2.svg' // Replace with your actual image later
                        alt='Feature'
                        className='h-full w-full relative top-10 object-contain'
                    />
                </div>
                {/* Left Content */}
                <div className='flex flex-col items-start justify-center w-[45%] space-y-4'>
                    <div className='flex items-center gap-4 text-gray-400 text-5xl'>
                        <TbRadar2 />
                    </div>
                    <h3 className='text-6xl font-semibold text-[#55887c]'>
                        Infrared Presence Sensor
                    </h3>
                    <p className='text-gray-500 text-2xl'>
                        Built-in infrared sensors detect when the space is occupied—keeping entries smart and informed.
                    </p>
                </div>
            </div>

            <div
                id='first'
                className='w-full h-[32%] bg-white flex justify-between items-center rounded-[4rem] pl-20 shadow-md'
            >
                {/* Left Content */}
                <div className='flex flex-col items-start justify-center w-[45%] space-y-4'>
                    <div className='flex items-center gap-4 text-gray-400 text-5xl'>
                        <CiVolumeHigh />
                    </div>
                    <h3 className='text-6xl font-semibold text-[#55887c]'>
                        Built-in audio feedback for seamless interactions
                    </h3>
                    <p className='text-gray-500 text-2xl'>
                        Know when you’ve locked, unlocked, or pressed a button—with tactile precision built into every interaction.
                    </p>
                </div>

                {/* Right Image */}
                <div className='flex justify-center w-1/2'>
                    <img
                        src='/Feature3.svg' // Replace with your actual image later
                        alt='Feature'
                        className='h-full w-full relative top-0 object-contain'
                    />
                </div>
            </div>
        </div>
    );
};

export default LockFeatures;
