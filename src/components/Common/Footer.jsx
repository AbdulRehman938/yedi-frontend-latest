import React from 'react'
import '../../components/Common/header.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="bg-third w-full relative z-10 overflow-hidden">
      {/* ===== Desktop / Tablet Footer ===== */}
      <div className="hidden sm:flex w-full h-[30rem] justify-center items-start relative">
        <img
          src="/FooterLine.svg"
          alt="Footer"
          className="absolute w-full h-[90%] mt-5 z-20 lg:object-fill"
        />
        <div className="absolute w-[90%] h-[50%] bottom-36 z-30 flex justify-between items-center">
          <div className="h-[80%] w-[25%] flex flex-col justify-between items-start mt-10 lg:ml-[-2rem] lg:mt-[5rem]">
            <h1 className="text-6xl text-primary font-black">
              Find Your <br /> Restroom
            </h1>
            <nav className="w-full flex flex-col items-start p-6 gap-4">
              <Link
                to="/partner"
                id="partner-btn"
                className="flex items-center justify-center rounded-full overflow-hidden relative ml-[-2rem]"
                style={{
                  width: 'clamp(10rem, 12vw, 14rem)',
                  height: '2.8rem',
                }}
              >
                <span className="btn-text whitespace-nowrap">
                  BECOME A PARTNER
                </span>
                <span className="btn-fill" />
              </Link>
            </nav>
          </div>

          <div className="h-full w-[50%] flex justify-between items-start mt-10 text-base">
            <ul className="flex flex-col p-6 gap-4">
              <li>
                <Link
                  to="/"
                  className="block text-white hover:text-background hover:scale-105 cursor-pointer ease-in-out duration-300"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/locks"
                  className="block text-white hover:text-background hover:scale-105 cursor-pointer ease-in-out duration-300"
                >
                  OUR LOCKS
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="block text-white hover:text-background hover:scale-105 cursor-pointer ease-in-out duration-300"
                >
                  LOCATIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-white hover:text-background hover:scale-105 cursor-pointer ease-in-out duration-300"
                >
                  ABOUT US
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col p-6 gap-4">
              <li className="text-white hover:text-background hover:scale-105 cursor-pointer ease-in-out duration-300">
                TERMS AND CONDITIONS
              </li>
              <li className="text-white hover:text-background hover:scale-105 cursor-pointer ease-in-out duration-300">
                PRIVACY POLICY
              </li>
            </ul>

            <div className="w-[20%] h-[3rem] flex justify-between items-center mt-3">
              <FaFacebook className="text-white text-2xl hover:scale-105 cursor-pointer ease-in-out duration-300 hover:text-primary" />
              <FaXTwitter className="text-white text-2xl hover:scale-105 cursor-pointer ease-in-out duration-300 hover:text-primary" />
              <FaInstagram className="text-white text-2xl hover:scale-105 cursor-pointer ease-in-out duration-300 hover:text-primary" />
              <FaLinkedin className="text-white text-2xl hover:scale-105 cursor-pointer ease-in-out duration-300 hover:text-primary" />
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[7%] absolute bottom-0 z-30 flex justify-between items-center text-white px-10">
          <img src="/whitelogo.svg" alt="logo" />
          <p>© 2025</p>
        </div>
      </div>

      {/* ===== Mobile Footer ===== */}
      <div className="flex sm:hidden flex-col h-[40rem] pt-20 relative items-center w-full py-10 gap-6 text-center">
        <h1 className="text-4xl text-[#91bab0] font-black">Find Your Restroom</h1>

        <Link
          to="/partner"
          className="rounded-full border border-white px-8 py-3 text-white text-sm"
        >
          BECOME A PARTNER
        </Link>

        <div className="flex flex-wrap justify-center gap-4 text-white text-xs mt-4">
          <Link to="/">HOME</Link>
          <Link to="/locks">OUR LOCKS</Link>
          <Link to="/locations">LOCATIONS</Link>
          <Link to="/about">ABOUT US</Link>
          <span>TERMS</span>
          <span>PRIVACY</span>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <FaFacebook className="text-xl text-white" />
          <FaXTwitter className="text-xl text-white" />
          <FaInstagram className="text-xl text-white" />
          <FaLinkedin className="text-xl text-white" />
        </div>

        <img
          src="/FooterMobile.svg"
          alt="Footer"
          className="w-[100vw] h-[20rem] object-contain mt-[-7rem]"
        />
        <div className="flex justify-between items-center px-4 w-full text-white text-xs">
          <img src="/whitelogo.svg" alt="logo" className="h-6" />
          <p>© 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
