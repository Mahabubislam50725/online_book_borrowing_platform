import React from 'react';
import Navbar from '../component/shared/Navbar';
import Footer from '../component/shared/Footer';

const Mainlayout = ({ children }) => {
    return (
        <>
        <Navbar></Navbar>
         {children}
         <Footer></Footer>
        </>
    );
};

export default Mainlayout;