import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto mt-8 text-oscuro">
                <div className="flex flex-col justify-center w-full ">
                    <div>
                        <section className="text-gray-700">
                            <div className="container mx-auto">
                                <div className="text-center mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                        Frequently Asked Question
                                    </h1>
                                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto tracking-widest">
                                        The most common questions about our website
                                    </p>
                                </div>
                                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-start">
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                            How do I create an account?
                                            </summary>

                                            <span className="px-4 py-2">
                                            To create an account, simply click on the "Sign Up" button at the top right corner of the page and follow the instructions.
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                            Should the job portal be free or paid?
                                            </summary>

                                            <span className="px-4 py-2">
                                            Most of the job seekers don’t pay to the job portals, as most of them are fresher and they are not financially secure. But at the same time, experienced candidates pay as they need quality services of the recruitment portal. Even, top companies pay the portals, if the organization needs a qualified candidate.
                                            </span>
                                        </details>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-4 py-2">
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                            How important is social media integration?
                                            </summary>

                                            <span className="px-4 py-2">
                                            For recruiters, it is essential to be where their job seekers are. Integrating social media allows users to share jobs on leading social media platforms like Facebook, Twitter, LinkedIn, and Google +. Promote it through digital marketing services and establish a voice for your job board. Post frequently, but make sure those posts are relevant. Post a mix of jobs, career content, and information about the role.
                                            </span>
                                        </details>
                                        <details className="mb-4">
                                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                            Can I update my resume?
                                            </summary>

                                            <span className="px-4 py-2">
                                            Yes, you can update your resume at any time by logging into your account and accessing the profile settings.
                                            </span>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

//
// <div className='bg-slate-200 h-full '>
        //     <h1 className='text-center text-5xl p-6'>Frequently Asked Questions</h1>
        //     <div className="grid grid-rows-4 grid-flow-col gap-4 p-12">
        //         <div className='blog'>
        //             <h1 className=''>
        //                 #1. When should you use context API?
        //             </h1>
        //             <p className='p-4'>
        //                 Context API is a fairly new concept in the world of React. It is designed to share data that can be considered global for a tree of React components. Context API is primarily used when some data needs to be accessible by many components at different nesting levels. So, When we want to share data between components without using props or actions, we use context API. Because Context API can significantly reduce the complexity of state management in application.
        //             </p>
        //         </div>
        //         <div className='blog'>
        //             <h1>
        //                 #2. What is a custom hook?
        //             </h1>
        //             <p className='p-4'>
        //                 Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. We can create the custom hook same way as we create any JS function. Look at it as a refactoring of code into another function to make it reusable. It will speed up productivity and save our time.
        //             </p>
        //         </div>
        //         <div className='blog'>
        //             <h1>
        //                 #3. What is useRef?
        //             </h1>
        //             <p className='p-4'>
        //                 <code>useRef</code> hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. <br /> <code>useRef</code> hook syntax is:  <code>const refContainer = useRef(initialValue);</code>

        //             </p>
        //         </div>
        //         <div className='blog'>
        //             <h1>
        //                 #4. What is useMemo?
        //             </h1>
        //             <p className='p-4'>

        //             </p>
        //         </div>
        //     </div>
        // </div>