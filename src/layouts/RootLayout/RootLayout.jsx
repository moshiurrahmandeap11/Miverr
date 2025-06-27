import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../pages/sharedPages/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <header className='top-0 z-50 sticky'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default RootLayout;