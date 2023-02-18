import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const RightSideCourse = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <h1 className="text-2xl text-teal-900 font-bold my-2 text-center">Courses found {courses.length}</h1>
            <div className='container'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        courses.map((course, i) => <SingleCourse
                            key={i}
                            course={course}

                        ></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RightSideCourse;