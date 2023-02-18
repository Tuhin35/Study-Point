import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = (course) => {
    // console.log(course)
    const { title, category, image,rating,description,price,_id} = course?.course; // course discharging 
    // console.log(title, category)
    return (
        <div className='  mx-6 my-8' >


            <div className="card bg-zinc-300 text-black  bg-base-100 shadow-xl">
                <figure><img src={image} alt={category} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category}
                        <div className="badge badge-secondary justify-items-end"> ${price}</div>
                    </h2>
                    <p>{title}</p>
                    
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{rating?.rate}</div>
                        <div className="badge badge-outline">{rating?.count}</div>
                    </div>
                    <p>{description.slice(0, 50)+"  . . . ."}</p>
                    <Link  to={`${_id}`}><button className="container btn btn-active btn-primary text-black hover:bg-green-300" >Buy Now</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;