import React from 'react';
import { GiEternalLove } from 'react-icons/gi';
import { BsFillStarFill } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CourseCheckOut = () => {
    const course = useLoaderData();
    console.log(course)
    const notify = () => toast("Lovely!");
    const { category , price , rating , image, title } = course;
    return (
        <div className=' App mx-auto text-black'>
           <div className='p-10 mx-auto'>
           <h1 className='justify-center flex flex-row  text-4xl'> Active Your Premium Access <GiEternalLove className='App justify-center'></GiEternalLove> </h1>
            <p className='text-2xl'>Course Info</p>
            <p>{category}</p>
            <p>{title}</p>
            <div className='mx-auto flex flex-row justify-center'>
                <img src={image} alt="" />
                <div className='flex flex-col p-10'>
                <p className='flex flex-row'><BsFillStarFill></BsFillStarFill>  {rating.rate} </p>
                 <p className='flex flex-row'>  Price: <BiDollar></BiDollar> {price} </p>
                </div>
            </div>
<button onClick={notify} className='btn btn-active btn-primary m-5 w-40 text-black hover:bg-green-300'> check out</button>
<ToastContainer />
           </div>
        </div>
    );
};

export default CourseCheckOut;