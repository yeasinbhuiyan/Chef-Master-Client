import React from 'react';

const Blog = () => {
    console.log('this is blog')
    return (
        <div>
            {/* <div className="blog-title">
           <h1  >Blog Page</h1>

           
          
           <ReactToPrint
                trigger={() => {
                    return (
                    <button className="btn btn-primary">Convert to PDF</button>
                    );
                }}
                content={() => ref.current}
                />
                
                
        </div> */}


            {/* ref={ref} */}

            {/* <div className="m-5 ">
                <div>
                    <h1 className="blogTitle">Answer of Question</h1>
                </div>
                <table className="Answer">
                    <thead className='border-cyan-800 border-solid w-2'>
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="qsn">
                                i. Tell us the differences between uncontrolled and controlled
                                components.
                            </td>
                            <td className="ans">
                                <ol>
                                    <li>
                                        State Management:
                                        <ul>
                                            <li>
                                                In controlled components, the state of the component is
                                                managed by a parent or a top-level state manager like
                                                Redux, and the current value of the component is passed
                                                down as a prop.
                                            </li>
                                            <li>
                                                In uncontrolled components, the component manages its
                                                own internal state, which is not directly manipulated by
                                                React.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Data Flow:
                                        <ul>
                                            <li>
                                                In controlled components, data flows from the parent
                                                component to the child component through props, and
                                                changes are communicated back to the parent through
                                                callbacks.
                                            </li>
                                            <li>
                                                In uncontrolled components, data flows from the DOM to
                                                the component through refs, and changes to the component
                                                state are handled by the component itself.
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        Complexity:
                                        <ul>
                                            <li>
                                                Controlled components are generally more complex to
                                                implement than uncontrolled components, because they
                                                require more state management and data flow management.
                                            </li>
                                            <li>
                                                Uncontrolled components are simpler to implement, but
                                                can be harder to reason about and can lead to unexpected
                                                behavior if the components state becomes out of sync
                                                with the rest of the application.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </td>
                        </tr>

                        <tr>
                            <td className="qsn">
                                ii. How to validate React props using PropTypes?
                            </td>
                            <td className="ans">
                                <ul>
                                    <li>
                                        To use PropTypes, we need to import it from the &#39prop-types&#39
                                        module and then define a propTypes object on the component.
                                    </li>
                                    <li>
                                        The propTypes object maps the names of the props to their
                                        respective PropTypes validators, which can be one of many
                                        types such as string, number, bool, array, object, and more.
                                    </li>
                                    <li>
                                        PropTypes also allows us to specify whether a prop is
                                        required or not using the <b>isRequired</b> modifier.
                                    </li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td className="qsn">
                                iii. Tell us the difference between nodejs and express js
                            </td>
                            <td className="ans">
                                <ul>
                                    <li>
                                        Node.js is a runtime environment for running JavaScript on
                                        the server-side, while Express.js is a web application
                                        framework that runs on top of Node.js.
                                    </li>
                                    <li>
                                        Node.js provides a set of core modules and APIs for
                                        low-level tasks, while Express.js provides higher-level
                                        abstractions and features for building web applications.
                                    </li>
                                    <li>
                                        Node.js can be used to build various types of applications,
                                        while Express.js is designed specifically for building web
                                        applications
                                    </li>
                                    <li>
                                        Node.js requires more code to achieve basic functionality,
                                        while Express.js provides a more streamlined and
                                        developer-friendly way to build web applications.
                                    </li>
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td className="qsn">
                                iv.What is a custom hook, and why will you create a custom hook?
                            </td>
                            <td className="ans">
                                <b className="customHook">
                                    A custom hook is a reusable function in React that
                                    encapsulates complex logic that can be shared across multiple
                                    components.
                                </b>{" "}
                                <br />
                                <small className="fw-bold">
                                    why will I create a custom hook?
                                </small>
                                <ul>
                                    <li>
                                        Custom hooks allow developers to separate logic from
                                        presentation components and promote code reuse and
                                        modularity.
                                    </li>
                                    <li>
                                        Developers can create custom hooks to handle specific tasks,
                                        such as fetching data, managing state, or handling side
                                        effects.
                                    </li>
                                    <li>
                                        Custom hooks can be shared across different components or
                                        even across different projects, making them a powerful tool
                                        for improving code maintainability and reducing duplication.
                                    </li>
                                    <li>
                                        Overall, custom hooks are a useful abstraction that can make
                                        code more modular, reusable, and easier to understand and
                                        maintain.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}



            <div className='p-10'>
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