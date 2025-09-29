import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col justify-start w-full overflow-x-visible overflow-hidden min-h-screen">
            <ScrollToTop />
            <Header />
            <main className="w-full flex-grow pt-20 lg:pt-20 overflow-visible">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
