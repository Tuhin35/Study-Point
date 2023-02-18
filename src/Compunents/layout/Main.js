import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='container mx-auto bg-gray-400'>
             <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;