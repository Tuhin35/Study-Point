import React from 'react';
import { Outlet} from 'react-router-dom';
import LeftsideCourse from './LeftsideCourse';

const Course = () => {
   
      

    return (
        <div className=' container grid grid-cols-1 gap-4 md:grid-cols-12 lg:grid-cols-12 bg-gray-400 text-black '>
            <div className='md:col-span-3 lg:col-span-2'>
           <LeftsideCourse></LeftsideCourse>
            </div>
           
            <div className=' md:col-span-9 lg:col-span-10 '>
                
                <Outlet >

                </Outlet>
            </div>

        </div>
    );
};

export default Course;