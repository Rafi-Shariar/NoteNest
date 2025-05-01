import React from 'react';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeComponents/LeftAside';
import RightAside from '../Components/HomeComponents/RightAside';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 lg:max-w-7xl  mx-auto mt-10'>

                <div className='lg:grid lg:grid-cols-12 lg:gap-10'>
                    <aside className=' col-span-3 hidden lg:block'><LeftAside></LeftAside></aside>
                        <div className='col-span-9'>
                            <Outlet></Outlet>
                        </div>
                </div>

            </main>
            <footer className='mt-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;