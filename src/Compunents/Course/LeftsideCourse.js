import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const LeftsideCourse = () => {
    const[states,setState] =useState([]);

    useEffect(()=>{

fetch("http://localhost:5000/course/allCategory")
.then(res => res.json())
.then(data => setState(data))

    },[])


    return (
        
        <div className='container grid grid-cols-1 my-20 gap-4 '>

            {
                states.map((state,i)=>
                <NavLink className="container btn btn-active btn-primary text-black hover:bg-green-300" to={`/courses/category/${state.c_id}`}
                key={i}>{state.category}

                
                </NavLink>

                )
            }
            
        </div>
    );
};

export default LeftsideCourse;