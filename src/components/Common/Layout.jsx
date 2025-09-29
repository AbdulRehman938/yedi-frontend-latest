import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const isLocksPage = location.pathname === '/locks';
    return (
        <div className="flex flex-col justify-start w-full overflow-x-hidden min-h-screen">
            <ScrollToTop />
            <Header />
            <main className="w-full flex-grow pt-20 lg:pt-20 overflow-visible">
                <Outlet />
            </main>
            <Footer adjustUpOnLocks={isLocksPage} />
        </div>
    );
};

export default Layout;