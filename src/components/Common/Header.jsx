import Lenis from '@studio-freight/lenis';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/Common/header.css';

const Header = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            smoothWheel: true,
            smoothTouch: true,
            gestureOrientation: 'vertical',
            syncTouch: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 1.2,
            lerp: 0.15,
        });
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);
    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'LOCATIONS', path: '/locations' },
        { name: 'OUR LOCKS', path: '/locks' },
        { name: 'ABOUT US', path: '/about' },
    ];
    const [activeIdx, setActiveIdx] = useState(0);
    const [hoverIdx, setHoverIdx] = useState(null);
    const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
    const navRef = React.useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (navRef.current) {
            const links = navRef.current.querySelectorAll('.nav-link');
            if (links[hoverIdx ?? activeIdx]) {
                const rect = links[hoverIdx ?? activeIdx].getBoundingClientRect();
                const parentRect = navRef.current.getBoundingClientRect();
                setBarStyle({ left: rect.left - parentRect.left, width: rect.width });
            }
        }
    }, [activeIdx, hoverIdx]);

    return (
        <div className="fixed top-0 left-0 z-50 w-full flex justify-center">
            <div className={`w-full max-w-[1440px] flex justify-between items-center px-4 lg:px-8 xl:px-12 
      transition-all ease-in-out ${scrolled ? 'py-2 bg-transparent' : 'rounded-xl py-2 mt-2 bg-white'}`}
                style={{ minHeight: '4rem' }}>
                {/* Logo */}
                <div className="h-12 w-16 sm:w-20 lg:w-24 xl:w-28 flex items-center flex-shrink-0">
                    <img src="/Logo.svg" alt="logo" className="w-full h-full object-contain" />
                </div>

                {/* Navbar */}
                <div id="navbar" className="hidden lg:flex items-center justify-center flex-1 mx-8 xl:mx-12">
                    <nav ref={navRef} className="flex justify-center relative gap-6 xl:gap-8 2xl:gap-10">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="nav-link text-primary font-semibold transition-all duration-300 hover:scale-110 text-sm xl:text-base whitespace-nowrap"
                                onMouseEnter={() => setHoverIdx(idx)}
                                onMouseLeave={() => setHoverIdx(null)}
                                onClick={() => setActiveIdx(idx)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div
                            className="absolute bg-primary rounded transition-all duration-300"
                            style={{ left: barStyle.left, width: barStyle.width, height: '2px', bottom: '-8px' }}
                        />
                    </nav>
                </div>

                {/* Partner Button */}
                <Link to="/partner" id="partner-btn" className="hidden lg:flex items-center justify-center rounded-full overflow-hidden relative flex-shrink-0">
                    <span className="btn-text text-sm xl:text-base whitespace-nowrap">BECOME A PARTNER</span>
                    <span className="btn-fill" />
                </Link>

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="p-2 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Animated dropdown */}
            <div
                className={`fixed top-0 ${scrolled ? 'right-4 w-[calc(50%-1rem)]' : 'right-0 w-[50%]'} h-auto rounded-b-3xl bg-white shadow-lg sm:w-[40%] md:w-[35%] z-40 transform transition-all duration-500 ease-in-out flex flex-col items-start lg:hidden ${menuOpen
                    ? 'opacity-100 translate-y-[4rem]'
                    : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                style={{ maxHeight: menuOpen ? '40%' : '0' }}
            >
                <nav className="w-full flex flex-col items-start p-6 gap-4">
                    <Link to="/" className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2" onClick={() => setMenuOpen(false)}>HOME</Link>
                    <Link to="/locations" className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2" onClick={() => setMenuOpen(false)}>LOCATIONS</Link>
                    <Link to="/locks" className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2" onClick={() => setMenuOpen(false)}>OUR LOCKS</Link>
                    <Link to="/about" className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
                    <Link
                        to="/partner"
                        className="h-10 flex items-center justify-center rounded-full bg-[#B8B8A7] text-white font-semibold transition-all duration-300 mt-2 -ml-2"
                        style={{ width: 'clamp(10rem, 60%, 14rem)' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="whitespace-nowrap text-sm">BECOME A PARTNER</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
