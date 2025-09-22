import React from 'react';
import { CiVolumeHigh } from 'react-icons/ci';
import { FaBluetoothB, FaMobileAlt } from 'react-icons/fa';
import { TbRadar2 } from 'react-icons/tb';

const LockFeatures = () => {
    return (
        <>
            {/* Desktop & Tablet Layout */}
            <div className="hidden sm:flex w-full h-full flex-col bg-transparent justify-between items-center">
                {/* First Feature */}
                <div
                    id="first"
                    className="w-full h-[32%] bg-white flex justify-between items-center rounded-[4rem] pl-20 shadow-md"
                >
                    {/* Left Content */}
                    <div className="flex flex-col items-start justify-center w-[45%] space-y-4">
                        <div className="flex items-center gap-4 text-gray-400 text-5xl">
                            <FaBluetoothB />
                            <FaMobileAlt />
                        </div>
                        <h3 className="text-6xl font-semibold text-[#55887c]">
                            Bluetooth & NFC for tap-and-Go entry
                        </h3>
                        <p className="text-gray-500 text-2xl">
                            Our lock responds instantly to your phone's NFC scan—fast,
                            contactless, and friction-free.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center w-1/2">
                        <img
                            src="/Feature1.svg"
                            alt="Feature"
                            className="h-full w-full relative top-0 object-contain"
                        />
                    </div>
                </div>

                {/* Second Feature */}
                <div
                    id="second"
                    className="w-full h-[32%] bg-white flex justify-between items-center rounded-[4rem] pr-12 shadow-md"
                >
                    <div className="flex justify-center w-1/2">
                        <img
                            src="/Feature2.svg"
                            alt="Feature"
                            className="h-full w-full relative top-10 object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center w-[45%] space-y-4">
                        <div className="flex items-center gap-4 text-gray-400 text-5xl">
                            <TbRadar2 />
                        </div>
                        <h3 className="text-6xl font-semibold text-[#55887c]">
                            Infrared Presence Sensor
                        </h3>
                        <p className="text-gray-500 text-2xl">
                            Built-in infrared sensors detect when the space is occupied—keeping entries smart and informed.
                        </p>
                    </div>
                </div>

                {/* Third Feature */}
                <div
                    id="third"
                    className="w-full h-[32%] bg-white flex justify-between items-center rounded-[4rem] pl-20 shadow-md"
                >
                    <div className="flex flex-col items-start justify-center w-[45%] space-y-4">
                        <div className="flex items-center gap-4 text-gray-400 text-5xl">
                            <CiVolumeHigh />
                        </div>
                        <h3 className="text-6xl font-semibold text-[#55887c]">
                            Built-in audio feedback for seamless interactions
                        </h3>
                        <p className="text-gray-500 text-2xl">
                            Know when you’ve locked, unlocked, or pressed a button—with tactile precision built into every interaction.
                        </p>
                    </div>

                    <div className="flex justify-center w-1/2">
                        <img
                            src="/Feature3.svg"
                            alt="Feature"
                            className="h-full w-full relative top-0 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden w-full flex flex-col gap-8">
                {/* Feature 1 */}
                <div className="bg-white rounded-2xl shadow-md flex flex-col items-start pb-10">
                    <img
                        src="/Feature1.svg"
                        alt="Feature"
                        className="w-[50rem] rounded-xl object-contain"
                    />
                    <div className="flex items-center gap-3 text-gray-400 text-4xl mb-4 px-5">
                        <FaBluetoothB />
                        <FaMobileAlt />
                    </div>
                    <h3 className="text-2xl text-left font-semibold text-[#55887c] mb-2 px-5">
                        Bluetooth & NFC for tap-and-Go entry
                    </h3>
                    <p className="text-gray-500 text-base text-left px-5">
                        Our lock responds instantly to your phone's NFC scan—fast, contactless, and friction-free.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-2xl shadow-md flex flex-col items-start pb-10">
                    <img
                        src="/Feature2.svg"
                        alt="Feature"
                        className="w-[50rem] rounded-xl object-contain"
                    />
                    <div className="flex items-center gap-3 text-gray-400 text-4xl mb-4 px-5">
                        <TbRadar2 />
                    </div>
                    <h3 className="text-2xl text-left font-semibold text-[#55887c] mb-2 px-5">
                        Infrared Presence Sensor
                    </h3>
                    <p className="text-gray-500 text-base text-left px-5">
                        Built-in infrared sensors detect when the space is occupied—keeping entries smart and informed.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-2xl shadow-md flex flex-col items-start pt-10">
                    
                    <div className="flex items-center gap-3 text-gray-400 text-4xl mb-4 px-5">
                        <CiVolumeHigh />
                    </div>
                    <h3 className="text-2xl text-left font-semibold text-[#55887c] mb-2 px-5">
                        Built-in audio feedback for seamless interactions
                    </h3>
                    <p className="text-gray-500 text-base text-left px-5">
                        Know when you’ve locked, unlocked, or pressed a button—with tactile precision built into every interaction.
                    </p>
                    <img
                        src="/Feature3.svg"
                        alt="Feature"
                        className="w-[50rem] rounded-xl object-contain"
                    />
                </div>
            </div>

        </>
    );
};

export default LockFeatures;
