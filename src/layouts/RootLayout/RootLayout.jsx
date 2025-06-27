import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../pages/sharedPages/Navbar/Navbar';
import Footer from '../../pages/sharedPages/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <header className='top-0 z-50 sticky'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;