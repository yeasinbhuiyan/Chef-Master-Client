import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";


const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'portrait ',
        unit: 'in',
        format: [9, 16]
    };

    
    return (
        <div>


            <div className='text-center mt-5'>
                <Pdf targetRef={ref} option={options} filename="code-example.pdf" x={0.5} y={0.8} scale={0.6}>
                    {({ toPdf }) => <button className='btn btn-dark' onClick={toPdf} >Download Pdf <FaDownload className='ms-2'></FaDownload></button>}
                </Pdf>
            </div>



            <div ref={ref} className='p-16 react-pdf__Page__canvas'>
                <div className='my-8'>
                    <h1 className='text-3xl font-bold'>  i. Tell us the differences between uncontrolled and controlled
                        components.</h1>


                    <p className='font-mono mt-5 text-base'> <span className='font-bold me-2'>Ans:</span> In controlled components, the state of the component is
                        managed by a parent or a top-level state manager like
                        Redux, and the current value of the component is passed
                        down as a prop.
                        and In uncontrolled components, the component manages its
                        own internal state, which is not directly manipulated by
                        React.</p>
                </div>


                <div className='my-8'>
                    <h1 className='text-3xl font-bold'>  ii. How to validate React props using PropTypes?</h1>
                    <p className='font-mono mt-5 text-base'>
                        <span className='font-bold me-2'>Ans:</span>   To use PropTypes, we need to import it from the prop-types
                        module and then define a propTypes object on the component.


                        The propTypes object maps the names of the props to their
                        respective PropTypes validators, which can be one of many
                        types such as string, number, bool, array, object, and more.

                        PropTypes also allows us to specify whether a prop is
                        required or not using the <b>isRequired</b> modifier.
                    </p>
                </div>

                <div className='my-8'>
                    <h1 className='text-3xl font-bold'> iii. Tell us the difference between nodejs and express js</h1>
                    <ol className=''>
                        <li className='font-mono mt-5 text-base'>
                            <span className='font-bold me-2'>Ans:</span>1. Node.js is a runtime environment for running JavaScript on
                            the server-side, while Express.js is a web application
                            framework that runs on top of Node.js.
                        </li>
                        <li className='font-mono mt-5 text-base lining-nums'>
                            2.  Node.js provides a set of core modules and APIs for
                            low-level tasks, while Express.js provides higher-level
                            abstractions and features for building web applications.
                        </li >
                        <li className='font-mono mt-5 text-base'>
                            3.  Node.js can be used to build various types of applications,
                            while Express.js is designed specifically for building web
                            applications
                        </li>
                        <li className='font-mono mt-5 text-base'>
                            4.   Node.js requires more code to achieve basic functionality,
                            while Express.js provides a more streamlined and
                            developer-friendly way to build web applications.
                        </li>
                    </ol>
                    <p></p>
                </div>


                <div className='my-8'>
                    <h1 className='text-3xl font-bold'>    iv.What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='font-mono mt-5 text-base'><span className='font-bold me-2'>Ans:</span> A custom hook is a reusable function in React that
                        encapsulates complex logic that can be shared across multiple
                        components.
                        Custom hooks allow developers to separate logic from
                        presentation components and promote code reuse and
                        modularity.

                        Developers can create custom hooks to handle specific tasks,
                        such as fetching data, managing state, or handling side
                        effects.

                        Custom hooks can be shared across different components or
                        even across different projects, making them a powerful tool
                        for improving code maintainability and reducing duplication.

                        Overall, custom hooks are a useful abstraction that can make
                        code more modular, reusable, and easier to understand and
                        maintain.
                    </p>
                </div>



            </div>





        </div>
    );
};

export default Blog;