import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaLock, FaUnlockAlt } from 'react-icons/fa';
import { LuBadgeDollarSign } from 'react-icons/lu';

export const ControlContent = () => (
    <>
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden sm:flex flex-col lg:flex-row items-center gap-20 py-10">
            {/* Left Side - Text */}
            <div className="flex-1 text-left space-y-10 lg:ml-16">
                {/* Heading with Icon */}
                <div className="flex items-center gap-6 ml-[-3rem]">
                    <FaLock className="text-white text-7xl" />
                    <h3 className="text-5xl font-medium">
                        Keep restrooms secure and staff focused.
                    </h3>
                </div>
                <hr className="border-white/40" />

                {/* Features */}
                <div className="space-y-6 text-2xl">
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Rotating Codes</span>
                        <span className="w-1/2 text-left">
                            Issue rotating access codes to customers to prevent code sharing and bad actors.
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Protect Your Space</span>
                        <span className="w-1/2 text-left">
                            Prevent loitering, misuse, and vandalism.
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Free Up Staff</span>
                        <span className="w-1/2 text-left">
                            Let your team focus on service, not gatekeeping.
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Side - Demo Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
                <img
                    src="/Lock2.svg"
                    alt="Lock demo"
                    className="rounded-xl shadow-lg object-cover"
                />
            </div>
        </div>

        {/* Mobile Layout - Only visible on mobile */}
        <div className="sm:hidden flex flex-col items-center gap-6 py-6">
            {/* Heading with Icon */}
            <div className="flex items-center gap-4 text-left">
                <FaLock className="text-white text-5xl" />
                <h3 className="text-2xl font-semibold leading-tight">
                    Keep restrooms secure and staff focused.
                </h3>
            </div>

            {/* Features */}
            <div className="w-full">
                <div className="bg-transparent border-white [border-top-width:.1rem] [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Rotating Codes</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Issue rotating access codes to customers to prevent code sharing and bad actors.
                    </p>
                </div>

                <div className="bg-transparent border-white [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-base mb-4 text-left">Protect Your Space</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Prevent loitering, misuse, and vandalism.
                    </p>
                </div>


                <div className="bg-transparent py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Free Up Staff</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Let your team focus on service, not gatekeeping.
                    </p>
                </div>


            </div>

            {/* Demo Image */}
            <div className="w-full flex justify-center mb-4">
                <img
                    src="/Lock2.svg"
                    alt="Lock demo"
                    className="w-[98%] h-[17rem] rounded-xl shadow-lg object-cover"
                />
            </div>


        </div>
    </>
);

export const EarnContent = () => (
    <>
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden sm:flex flex-col lg:flex-row items-center gap-20 py-10">
            {/* Left Side - Demo Image */}
            <div className="flex-1 flex justify-center lg:justify-start">
                <img
                    src="/Lock3.svg"
                    alt="Lock demo"
                    className="rounded-xl shadow-lg object-cover"
                />
            </div>

            {/* Right Side - Text */}
            <div className="flex-1 text-left space-y-10 lg:mr-16">
                {/* Heading with Icon */}
                <div className="flex items-center gap-6 ml-[-5rem]">
                    <LuBadgeDollarSign className="text-white text-9xl" />
                    <h3 className="text-5xl font-medium">
                        Turn your restroom into a passive revenue stream
                    </h3>
                </div>
                <hr className="border-white/40" />

                {/* Features */}
                <div className="space-y-6 text-2xl">
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Revenue Sharing</span>
                        <span className="w-1/2 text-left">
                            Earn from Yedi subscribers and walk-in users.
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Operational Efficiency</span>
                        <span className="w-1/2 text-left">
                            Reduce time staff spends unlocking restrooms and managing access.
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Employee Incentives</span>
                        <span className="w-1/2 text-left">
                            Share restroom revenue with staff to encourage cleanings.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Layout - Only visible on mobile */}
        <div className="sm:hidden flex flex-col items-center gap-6 py-6">
            {/* Heading */}
            <div className="flex items-center gap-4 text-left">
                <LuBadgeDollarSign className="text-white text-5xl" />
                <h3 className="text-2xl font-semibold leading-tight">
                    Turn your restroom into a passive revenue stream
                </h3>
            </div>

            {/* Features */}
            <div className="w-full">
                <div className="bg-transparent border-white [border-top-width:.1rem] [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Revenue Sharing</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Earn from Yedi subscribers and walk-in users.
                    </p>
                </div>
                <div className="bg-transparent border-white [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Operational Efficiency</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Reduce time staff spends unlocking restrooms and managing access.
                    </p>
                </div>
                <div className="bg-transparent py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Employee Incentives</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Share restroom revenue with staff to encourage cleanings.
                    </p>
                </div>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center mb-4">
                <img
                    src="/Lock3.svg"
                    alt="Lock demo"
                    className="w-[98%] h-[17rem] rounded-xl shadow-lg object-cover"
                />
            </div>
        </div>

    </>
);

export const UnlockContent = () => (
    <>
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden sm:flex flex-col lg:flex-row items-center gap-20 py-10">
            {/* Left Side - Text */}
            <div className="flex-1 text-left space-y-10 lg:ml-16">
                {/* Heading with Icon */}
                <div className="flex items-center gap-6 ml-[-5rem]">
                    <BsGraphUpArrow className="text-white text-8xl" />
                    <h3 className="text-5xl font-medium">
                        Track, learn, and improve with real-time restroom data.
                    </h3>
                </div>
                <hr className="border-white/40" />

                {/* Features */}
                <div className="space-y-6 text-2xl">
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Usage Tracking</span>
                        <span className="w-1/2 text-left">
                            Leverage restroom usage data for better planning, inventory management, and staff scheduling.
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Performance Dashboard</span>
                        <span className="w-1/2 text-left">
                            Monitor cleanings, earnings, and access trends.
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Custom Reporting</span>
                        <span className="w-1/2 text-left">
                            Access tailored data insights by request.
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Side - Demo Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
                <img
                    src="/Lock4.svg"
                    alt="Lock demo"
                    className="rounded-xl shadow-lg object-cover"
                />
            </div>
        </div>
        {/* Mobile Layout - Only visible on mobile */}
        <div className="sm:hidden flex flex-col items-center gap-6 py-6">
            {/* Heading */}
            <div className="flex items-center gap-4 text-left">
                <BsGraphUpArrow className="text-white text-5xl" />
                <h3 className="text-2xl font-semibold leading-tight">
                    Track, learn, and improve with real-time restroom data.
                </h3>
            </div>

            {/* Features */}
            <div className="w-full">
                <div className="bg-transparent border-white [border-top-width:.1rem] [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Usage Tracking</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Leverage restroom usage data for better planning, inventory management, and staff scheduling.
                    </p>
                </div>
                <div className="bg-transparent border-white [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Performance Dashboard</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Monitor cleanings, earnings, and access trends.
                    </p>
                </div>
                <div className="bg-transparent py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Custom Reporting</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Access tailored data insights by request.
                    </p>
                </div>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center mb-4">
                <img
                    src="/Lock4.svg"
                    alt="Lock demo"
                    className="w-[98%] h-[17rem] rounded-xl shadow-lg object-cover"
                />
            </div>
        </div>

    </>
);

export const IntegrateContent = () => (
    <>
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden sm:flex flex-col lg:flex-row items-center gap-20 py-10">
            {/* Left Side - Demo Image */}
            <div className="flex-1 flex justify-center lg:justify-start">
                <img
                    src="/Lock5.svg"
                    alt="Lock demo"
                    className="rounded-xl shadow-lg object-cover"
                />
            </div>

            {/* Right Side - Text */}
            <div className="flex-1 text-left space-y-10 lg:mr-16">
                {/* Heading with Icon */}
                <div className="flex items-center gap-6 ml-[-5rem]">
                    <FaUnlockAlt className="text-white text-8xl" />
                    <h3 className="text-5xl font-semibold">
                        Connect with your systems, customers, and tools.
                    </h3>
                </div>
                <hr className="border-white/40" />

                {/* Features */}
                <div className="space-y-6 text-2xl">
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Multiple Access Methods</span>
                        <span className="w-1/2 text-left">
                            Allow restroom entry via printed code, QR scan, NFC, or integrated app.
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[0.1rem] border-b-white pb-5">
                        <span className="font-medium">Deeper Integration</span>
                        <span className="w-1/2 text-left">
                            Sync access with your rewards or point-of-sale systems.
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">CRM and Rewards</span>
                        <span className="w-1/2 text-left">
                            Future iterations of Yedi will allow for deep customer rewards integration, coupons, and in-store promotions.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Layout - Only visible on mobile */}
        <div className="sm:hidden flex flex-col items-center gap-6 py-6">
            {/* Heading */}
            <div className="flex items-center gap-4 text-left">
                <FaUnlockAlt className="text-white text-5xl" />
                <h3 className="text-2xl font-semibold leading-tight">
                    Connect with your systems, customers, and tools.
                </h3>
            </div>

            {/* Features */}
            <div className="w-full">
                <div className="bg-transparent border-white [border-top-width:.1rem] [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Multiple Access Methods</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Allow restroom entry via printed code, QR scan, NFC, or integrated app.
                    </p>
                </div>
                <div className="bg-transparent border-white [border-bottom-width:.1rem] py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">Deeper Integration</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Sync access with your rewards or point-of-sale systems.
                    </p>
                </div>
                <div className="bg-transparent py-4 flex items-start justify-between">
                    <h4 className="font-medium text-lg mb-2 text-left">CRM and Rewards</h4>
                    <p className="text-sm text-white/90 text-left w-[50%]">
                        Future iterations of Yedi will allow for deep customer rewards integration, coupons, and in-store promotions.
                    </p>
                </div>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center mb-4">
                <img
                    src="/Lock5.svg"
                    alt="Lock demo"
                    className="w-[98%] h-[17rem] rounded-xl shadow-lg object-cover"
                />
            </div>
        </div>

    </>
);