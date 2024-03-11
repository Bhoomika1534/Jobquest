import React, { useState } from 'react';
import './Faq.css'

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

export default FAQPage;
