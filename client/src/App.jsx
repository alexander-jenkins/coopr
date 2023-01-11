import React from 'react';
import { Outlet } from 'react-router-dom';
import CooprNavbar from './components/unsorted/CooprNavbar';

export default function App() {
    return (
        <>
            <CooprNavbar />
            <Outlet />
        </>
    );
}
