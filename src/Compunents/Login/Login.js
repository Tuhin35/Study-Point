import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import "./Login.css"

const Login = () => {
    const [logError,setLogError] = useState('');
    const{signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from)
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",

    })


    const handleSubmit= event =>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
      signIn(email,password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from , {replace: true})

        // navigate("/");
      })
      .catch(error => {
         console.error(error)
        setLogError(error.message)
        })
     
       }

       const handleEmail = (e) => {
        const email = e.target.value;
        setUserInfo({ ...userInfo, email: email })
    }
    const handlePassword = (e) => {
        const password = e.target.value;
        setUserInfo({ ...userInfo, password: password })
    }

    return (
        <div className='text-black grid grid-cols-2'>
            <div>
                <div  className='form-container'>
                    <h2 className='form-title text-4xl'>Login</h2>
                    <form onSubmit={handleSubmit}>
           <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
           </div>
           <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
           </div>
           <input className='btn-submit' type="submit" value="Login" />
            </form>
                    <p> Study with Tuhin <Link  to='/signup'> Create a new account</Link></p>

                </div>
            </div>
            <div className='my-auto'>
                <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, fugiat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati repellat laboriosam voluptatum quam cum laudantium velit optio eos dolor.</p>
                <button className='btn bg-white btn-outline btn-success '><Link to="/Signup">Sign Up</Link></button>
            </div>
        </div>
    );
};

export default Login;