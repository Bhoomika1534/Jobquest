import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTitle from '../hooks/useTitle';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Subscribe = ({ category }) => {
    // Sample subscription plans data
    const subscriptionPlans = [
        { id: 1, name: 'Basic', price: '$9.99', features: ['250 Characters in Job Description', 'Chat Support', '50 Audio & Video Call Free'] },
        { id: 2, name: 'Standard', price: '$19.99', features: ['Vat Feature', 'Mailing Address', 'Mail Scannng and security', 'HD Quality'] },
        { id: 3, name: 'Premium', price: '$29.99', features: ['All Feature', 'Vat Feature', 'Detailed Job Description', 'Unlimited Audio & Video Call Free', 'Job Branding'] }
    ];
    useTitle("Subscribe")


    

    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Subscription Plans </h1>
            <p className='text-lg mt-4'>Choose a subscription plan that fits your needs.</p>
            <div className="grid md:grid-cols-3 gap-4 p-2 mt-4">
                {subscriptionPlans.map(plan => (
                    <div key={plan.id} className="border border-gray-200 rounded p-4 hover:shadow-lg transition duration-300">
                        <h1 className="text-xl font-semibold mb-2">{plan.name}</h1>
                        <u><p className="text-gray-600 mb-2">{plan.price} / month</p></u>
                        <ul className="list-none pl-0">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="text-left">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <button className='custom-btn mt-4 md:mt-0'>
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscribe;
