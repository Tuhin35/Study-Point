import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Compunents/Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return  <div><h3>Loading.....</h3></div>
    }

    if (user && user.uid) {
        return children;
        
       }

    return (
      <Navigate to='/login' state={{form: location}} replace></Navigate> 
    );
};

export default PrivateRoute;