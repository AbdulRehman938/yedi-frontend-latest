import Lenis from '@studio-freight/lenis';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const navRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [partnerOpen, setPartnerOpen] = useState(false);
    const partnerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll lock when partner dialog is open
    useEffect(() => {
        if (partnerOpen) {
            // Disable body scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Re-enable body scroll
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        // Cleanup function
        return () => {
            if (partnerOpen) {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
            }
        };
    }, [partnerOpen]);

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

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (partnerOpen && partnerRef.current && !partnerRef.current.contains(e.target)) {
                setPartnerOpen(false);
            }
            if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [partnerOpen, menuOpen]);

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        businessName: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().matches(/^[0-9]{10,15}$/, '10–15 digits').required('Required'),
    });

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            {/* Header */}
            <div className="fixed top-0 left-0 z-50 w-full flex justify-center items-center px-2 sm:px-4 lg:px-6 xl:px-8">
                <div
                    className={`w-full max-w-[1440px] flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-12 
          transition-all ease-in-out ${scrolled ? 'py-2 bg-transparent' : 'rounded-xl py-2 mt-2 bg-white'}`}
                    style={{ minHeight: '4rem' }}
                >
                    <div className="h-12 w-16 sm:w-20 lg:w-24 xl:w-28 flex items-center flex-shrink-0">
                        <img src="/Logo.svg" alt="logo" className="w-full h-full object-contain" />
                    </div>

                    <div id="navbar" className="hidden lg:flex items-center justify-center text-center flex-1 mx-4 lg:mx-6 xl:mx-8">
                        <nav ref={navRef} className="flex justify-center relative ml-10 gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="nav-link text-third font-medium transition-all duration-300 hover:scale-110 text-sm xl:text-base whitespace-nowrap"
                                    onMouseEnter={() => setHoverIdx(idx)}
                                    onMouseLeave={() => setHoverIdx(null)}
                                    onClick={() => setActiveIdx(idx)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div
                                className="absolute bg-primary rounded transition-all duration-300"
                                style={{ left: barStyle.left, width: barStyle.width, height: '1.5px', bottom: '-8px' }}
                            />
                        </nav>
                    </div>

                    <button
                        onClick={() => setPartnerOpen(true)}
                        className="hidden lg:flex text-sm items-center justify-center rounded-full bg-[#B8B8A7] text-white font-normal px-10 py-3 transition hover:scale-105"
                    >
                        BECOME A PARTNER
                    </button>

                    <div className="lg:hidden flex items-center">
                        <button
                            className="p-2 focus:outline-none z-50"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Open menu"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {menuOpen && (
                        <div
                            ref={menuRef}
                            className="mobile-menu lg:hidden fixed top-16 right-2 sm:right-4 w-[60%] max-w-[300px] rounded-3xl h-1/2 bg-white shadow-xl z-50 flex flex-col justify-start px-2"
                        >
                            <nav className="flex flex-col p-5 pt-10 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="mobile-menu-item text-primary font-semibold text-lg cursor-pointer hover:text-[#55887c] transition-colors duration-200"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setMenuOpen(false);
                                            setTimeout(() => {
                                                window.location.href = link.path;
                                            }, 100);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setMenuOpen(false);
                                    setPartnerOpen(true);
                                }}
                                className="mobile-menu-item text-xs whitespace-nowrap mt-[2rem] rounded-full bg-[#B8B8A7] text-white font-semibold py-4 hover:bg-[#9a9a88] transition cursor-pointer"
                            >
                                BECOME A PARTNER
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Partner Dialog */}
            {partnerOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/40 flex justify-center items-center md:items-center"
                    onTouchMove={(e) => e.preventDefault()}
                >
                    <div
                        ref={partnerRef}
                        className="partner-dialog-container relative bg-[#ebebeb] w-[90%] md:w-[70%] h-[90%] md:h-[85%] rounded-[2rem] flex flex-col
                                   overflow-y-auto md:overflow-y-auto
                                   max-h-[95vh] md:max-h-none"
                        onTouchMove={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        {/* Top head */}
                        <div id="top-head" className="relative w-full h-[20%] md:h-[25%] flex-shrink-0 overflow-hidden">
                            <img src="/Partner1.png" alt="Partner Background" className="absolute inset-0 w-full h-full object-cover" />
                            <button
                                onClick={() => setPartnerOpen(false)}
                                className="absolute top-4 left-4 bg-primary text-white rounded-full p-3 px-4 hover:bg-black/70"
                            >
                                ✕
                            </button>
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl sm:text-5xl font-bold text-[#b3cfc9] drop-shadow-lg text-center">
                                Become a Partner
                            </h1>
                        </div>

                        {/* Body stacked for mobile - scrollable content */}
                        <div className="partner-dialog-body flex flex-col md:flex-row items-center p-4 md:p-6 space-y-4 md:space-y-0 flex-grow overflow-y-auto md:overflow-visible">
                            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
                                <h2 className="text-2xl sm:text-4xl font-bold text-primary">Request a Demo</h2>
                                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                                    Experience how our smart lock system works and what it can do for your business. Fill out the form and we’ll be in touch to schedule a quick walkthrough.
                                </p>
                                {/* Hide this image on mobile */}
                                <img src="/Dialog_Yedi.svg" alt="dialog-yedi" className="mt-6 w-32 sm:w-40 object-contain hidden md:block" />
                            </div>

                            <Formik
                                initialValues={{
                                    firstName: '', lastName: '', businessName: '', city: '', email: '', phone: ''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { resetForm }) => {
                                    const existingData = JSON.parse(localStorage.getItem('partnerFormSubmissions') || '[]');
                                    const submissionData = { ...values, submittedAt: new Date().toISOString() };
                                    existingData.push(submissionData);
                                    localStorage.setItem('partnerFormSubmissions', JSON.stringify(existingData));
                                    toast.success('Form submitted successfully!');
                                    resetForm();
                                    setPartnerOpen(false);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 md:mt-0">
                                        {['firstName', 'lastName', 'businessName', 'city', 'email', 'phone'].map((field, i) => (
                                            <Field name={field} key={field}>
                                                {({ field: formField, form }) => {
                                                    const hasError = form.touched[field] && form.errors[field];
                                                    return (
                                                        <div className={`${i > 1 ? 'sm:col-span-2' : ''}`}>
                                                            <div className="flex items-center">
                                                                <label htmlFor={field} className="text-sm font-semibold text-gray-700 capitalize">
                                                                    {field.replace(/([A-Z])/g, ' $1')}
                                                                </label>
                                                                <ErrorMessage name={field} component="span" className="text-red-500 text-xs ml-1 whitespace-nowrap" />
                                                            </div>
                                                            <input
                                                                {...formField}
                                                                id={field}
                                                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                                                className={`rounded-2xl p-3 w-full focus:outline-none focus:ring-0 ${hasError ? 'blink-border' : 'border-none'}`}
                                                            />
                                                        </div>
                                                    );
                                                }}
                                            </Field>
                                        ))}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="sm:col-span-2 mt-4 bg-[#B8B8A7] mx-auto w-[50%] text-white font-semibold rounded-full py-3 hover:bg-[#9a9a88]"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Header;
