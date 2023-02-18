import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetailes = () => {
  const course = useLoaderData();
  const { title, description, category, image, rating, price,_id } = course;
  // console.log(course)
  return (
    <div className='App mx-auto'>
      <div className="App justify-center card w-96 bg-slate-300 shadow-xl">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <figure><img src={image} alt={title} /></figure>
        <h3 className='card-title justify-center'>{category}</h3>
        <div className="card-actions justify-end">
         <div className='flex flex-row '>
         <div className="badge badge-outline m-3">rating: {rating.rate}</div> 
          <div className="badge badge-outline m-3">Price: ${rating.count}</div>
         </div>
        </div>
        <div className="card-body">

          <p>{description}</p>
          <Link  to={`/courses/${_id}/checkout`}><button className="container btn btn-active btn-primary w-40 text-black hover:bg-green-300" >Premium Access</button> </Link>
        </div>
      </div>
    

    </div>
  );
};

export default CourseDetailes;