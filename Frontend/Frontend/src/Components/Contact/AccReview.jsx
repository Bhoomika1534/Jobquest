import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/reviews'); // Update the URL
                setReviews(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Reviews Error:', error.message);
                setError('Failed to fetch account reviews. Please try again later.');
                setLoading(false);
            }
        };
    
        fetchReviews();
    }, []);

   
    

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-5 pt-3 pb-2 mb-14 max-w-md w-full border border-gray-300">
                <h1 className='text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Account Reviews</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div>
                        {reviews.length === 0 ? (
                            <p>No reviews available.</p>
                        ) : (
                            <ul className="divide-y divide-gray-300">
                                {reviews.map((review, index) => (
                                    <li key={index} className="py-4">
                                        <p className="text-gray-900">{review.comment}</p>
                                        <p className="text-gray-500">Rating: {review.rating}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountReviews;
