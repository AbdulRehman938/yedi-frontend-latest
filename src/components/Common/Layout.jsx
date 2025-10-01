import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const isLocksPage = location.pathname === '/locks';
    const isLocationsPage = location.pathname === '/locations';
    const isHomePage = location.pathname === '/';
    return (
        <div className="flex flex-col justify-start w-full overflow-x-hidden min-h-screen max-w-[1720px] mx-auto overflow-hidden">
            <ScrollToTop />
            <Header />
            <main className="w-full flex-grow pt-20 lg:pt-20 max-w-[1720px] mx-auto overflow-visible">
                <Outlet />
            </main>
            <Footer adjustUpOnLocks={isLocksPage} adjustUpOnLocations={isLocationsPage} adjustUpOnHome={isHomePage} className="max-w-[1720px] mx-auto overflow-hidden" />
        </div>
    );
};

export default Layout;