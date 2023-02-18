import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css'
const SignUp = () => {

    const [error,setError] = useState(null);
    const {createUser,logOut} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
      
        if (password.length < 6) {
            setError("Password should be 6 characters or more");
            return;
        }


        if (password !== confirm) {
            setError("Your password did not match");
            return;
        }
       else{
        setError("");
       }

       createUser(email,password)
       .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        logOut();

navigate('/login')
       })

       .catch(error => console.log(error))

    }


    return (
        <div className='text-black grid grid-cols-2 my-auto'>
            <div className='form-container bg-white'>
            <h2 className='form-title text-4xl'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
           <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
           </div>
           <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
           </div>
           <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
           </div>
           <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have a account<Link to='/login'> Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
        <div className='my-auto'>
                <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, fugiat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati repellat laboriosam voluptatum quam cum laudantium velit optio eos dolor.</p>
                <button className='btn bg-white btn-outline btn-success '><Link to="/login">Login</Link></button>
            </div>
        </div>

    );
};

export default SignUp;