import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaLock, FaUnlockAlt } from 'react-icons/fa';
import { LuBadgeDollarSign } from 'react-icons/lu';

export const ControlContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-20 py-10">
        {/* Left Side - Text */}
        <div className="flex-1 text-left space-y-10 lg:ml-16"> {/* pushed farther right */}
            {/* Heading with Icon */}
            <div className="flex items-center gap-6 ml-[-3rem]"> {/* icon stays the same */}
                <FaLock className="text-white text-7xl" />
                <h3 className="text-5xl font-semibold">
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
        <div className="flex-1 flex justify-center lg:justify-end "> {/* moved even farther right */}
            <img
                src="/Lock2.svg"
                alt="Lock demo"
                className="rounded-xl shadow-lg object-cover"
            />
        </div>
    </div>
);


export const EarnContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-20 py-10">
        {/* Left Side - Demo Image (moved farther left) */}
        <div className="flex-1 flex justify-center lg:justify-start">
            <img
                src="/Lock3.svg"
                alt="Lock demo"
                className="rounded-xl shadow-lg object-cover"
            />
        </div>

        {/* Right Side - Text (shifted slightly left) */}
        <div className="flex-1 text-left space-y-10 lg:mr-16">
            {/* Heading with Icon */}
            <div className="flex items-center gap-6 ml-[-5rem]">
                {/* Lock Icon */}
                <LuBadgeDollarSign className="text-white text-9xl" />
                <h3 className="text-5xl font-semibold">
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
);


export const UnlockContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-20 py-10">
        {/* Left Side - Text */}
        <div className="flex-1 text-left space-y-10 lg:ml-16"> {/* moved farther right */}
            {/* Heading with Icon */}
            <div className="flex items-center gap-6 ml-[-5rem]"> {/* icon stays in place */}
                <BsGraphUpArrow className="text-white text-8xl" />
                <h3 className="text-5xl font-semibold">
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
        <div className="flex-1 flex justify-center lg:justify-end "> {/* moved farther right */}
            <img
                src="/Lock3.svg"
                alt="Lock demo"
                className="rounded-xl shadow-lg object-cover"
            />
        </div>
    </div>
);


export const IntegrateContent = () => (
  <div className="flex flex-col lg:flex-row items-center gap-20 py-10">
    {/* Left Side - Demo Image (moved farther left) */}
    <div className="flex-1 flex justify-center lg:justify-start">
      <img
        src="/Lock5.svg"
        alt="Lock demo"
        className="rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* Right Side - Text (shifted slightly left) */}
    <div className="flex-1 text-left space-y-10 lg:mr-16">
      {/* Heading with Icon */}
      <div className="flex items-center gap-6 ml-[-5rem]">
        {/* Lock Icon */}
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
);

