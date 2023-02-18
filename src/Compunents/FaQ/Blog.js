import React from 'react';

const Blog = () => {
    return (
        <div className= 'App text-black'>
              <h1 className='text-2xl'> WelCome To Our Blogs</h1>
            <div className="card w-1/2 bg-lime-50 text-center text-black my-10  mx-auto">
             
                <div className="card-body">
                    <h2 className="card-title">what is `cors`?</h2>
                    <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a 
                        protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                    <div className="card-actions justify-end">
                      
                    </div>
                </div>
            </div>
            <div className="card w-1/2 bg-lime-50 text-center text-black my-10   mx-auto">
             
                <div className="card-body">
                    <h2 className="card-title">Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                    <p>I am using firebase for authentication.Becasue, in our course we learned how to integrate google firebase authentication system into our project. Beside, Its also safe , secure and easy to implement.
Apart from that there are some other services we can use are Heroku, Deployd ,Kuzzle, Kumulos</p>
                    <div className="card-actions justify-end">
                      
                    </div>
                </div>
            </div>
            <div className="card w-1/2 bg-lime-50 text-center text-black my-10  mx-auto">
             
                <div className="card-body">
                    <h2 className="card-title">What is private routes and how does it works?</h2>
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading..</p>
                    <div className="card-actions justify-end">
                      
                    </div>
                </div>
            </div>
            <div className="card w-1/2 bg-lime-50 text-center text-black my-10  mx-auto">
             
                <div className="card-body">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single
 thread without blocking it for one request.
Node.js basically works on two concept
<li>Asynchronous</li>
<li>Non-blocking I/O</li></p>
                    <div className="card-actions justify-end">
                      
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;