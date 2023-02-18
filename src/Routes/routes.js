import { createBrowserRouter } from "react-router-dom";
import Course from "../Compunents/Course/Course";
import CourseCheckOut from "../Compunents/Course/CourseCheckOut";
import CourseDetailes from "../Compunents/Course/CourseDetailes";
import LeftsideCourse from "../Compunents/Course/LeftsideCourse";
import RightSideCourse from "../Compunents/Course/RightSideCourse";
import SingleCourse from "../Compunents/Course/SingleCourse";
import Blog from "../Compunents/FaQ/Blog";
import Faq from "../Compunents/FaQ/Faq";
import Home from "../Compunents/Home/Home";
import Main from "../Compunents/layout/Main";
import Login from "../Compunents/Login/Login";
import SignUp from "../Compunents/Login/SignUp";
import PrivateRoute from "./PrivateRoute"


const router = createBrowserRouter
([

    {
      path:'/',
     
      element: <Main></Main>,
      
      children:[
        {
        path:'/',
        
          element:<Home></Home>

        },
        {
        path:'/courses',
         element:<Course></Course>,
          children:[
            {
              path:"/courses",
              loader:()=>fetch("http://localhost:5000/courses"),
               element:<RightSideCourse></RightSideCourse>

            },
            {
              path:'/courses/category/:id',
              loader:({params})=> fetch(`http://localhost:5000/courses/category/${params.id}`),
             element:<RightSideCourse></RightSideCourse>
            }
            ,
            {
              path:'/courses/:id',
              loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
              element:<CourseDetailes></CourseDetailes>
            },
            {
              path:"/courses/category/:c_id/:_id",
               loader:({params}) => fetch(`http://localhost:5000/courses/category/${params.c_id}/${params._id}`),
              element:<CourseDetailes></CourseDetailes>
              
            }
            


          ]
          

        },
        {
          path:"/courses/category/:c_id/:_id/checkout",
               loader:({params}) => fetch(`http://localhost:5000/courses/category/${params.c_id}/${params._id}/checkout`),
              element:<PrivateRoute><CourseCheckOut></CourseCheckOut></PrivateRoute>
        },
        {
          path:'/courses/:id/checkout',
          loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}/checkout`),
          element:<PrivateRoute><CourseCheckOut></CourseCheckOut></PrivateRoute>
        },
        {
        path:'/faq',
          element:<Faq></Faq>
        },
        {
        path:'/blog',
          element:<Blog></Blog>

        },
        {
          path:'/login',
            element:<Login></Login>
  
          },
        {
          path:'/signup',
            element:<SignUp></SignUp>
  
          }
          
      ]
    }



  ])

  export default router ;