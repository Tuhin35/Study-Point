import React from 'react';
import homeImages from "./homeImages/homeImages.jpg"
import '../Home/homeImages/home.css'
import play from "./homeImages/play.png"
import app from "./homeImages/app.jpg"
const Home = () => {
    return (
        <div className='home grid grid-cols-2 bg-slate-300 p-10 h-full'>
            <div className='App my-auto'>
                <div className='text-start text-black'>
                    <h1 className='text-center text-lg text-lime-600' >START to SUCCESS</h1>
                    <h2 className='text-4xl'>Everything you
                        can imagine is possible</h2>
                    <p className='text-xl text-center'>Learners hut is a online learning platform where you will find varity of courses from greate instructurs accros the web.You can communicate with you
                        instructor and clearify you doubts. So, accelerate Your carrer with job ready skills.</p>

                       <div className='m-10 flex '>
                        <img className='w-1/6 mx-10' src={app} alt="" />
                        <img className='w-1/6' src={play} alt="" />
                       </div>


                </div>


            </div>

            <div className=' flex items-center justify-center lg:w-1/2 mx-auto'>
                <div className='w-100 relative'>
                <img className='animationPic  cover-full' src={homeImages} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Home;