import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { BiLogOut } from 'react-icons/bi';
const Header = () => {
  const {user,logOut} = useContext(AuthContext)

    return (
        
        <div className="navbar bg-slate-100  text-base-300">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl"> StudY-PoinT</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">

      <li> <Link to='/courses'>Course </Link> </li>
      <li> <Link to='/faq'>FaQ </Link> </li>
      <li> <Link to='/blog'>Blog </Link> </li>
      <li className='btn bg-teal-700 text-xl text-black btn-outline btn-success'> <Link to='/login'>Get Start </Link> </li>
      {
            user?.uid?
          <button onClick={logOut}><BiLogOut size={42} className='3x'></BiLogOut></button>
            :
          <>
            
          </>
            }
      
      
    </ul>
  </div>
</div>
            
        
    );
};

export default Header;