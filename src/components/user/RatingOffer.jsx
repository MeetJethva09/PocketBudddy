import { Star, ChevronLeft, Smile, Frown, Meh } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../common/Footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast , Slide , ToastContainer} from 'react-toastify';

export const RatingOffer = () => {
    const navigate = useNavigate();
    const offerid = useParams().offerid;
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {register , handleSubmit} = useForm({})

    const submitHandler = async (data) => {
        const userId = localStorage.getItem("id");
       data.userId = userId;
       data.offerId = offerid;
        setIsSubmitting(true);
        try {
            const res = await axios.post("/rating/addrating" , data);
            console.log(res.data.data);
                // Replace with your actual API call

            toast.success("Rating Successfull Added 🙌", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
              });

              setTimeout(()=>{
                navigate(-1);   
              },1400)

        } catch (error) {
            console.error("Error submitting review:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
            
        <div className="min-h-screen flex flex-col bg-gray-50">
             <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
            {/* Header - Consistent with ClaimedOffers */}
            <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <button 
                            onClick={() => navigate(-1)}
                            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5 mr-1" />
                            Back
                        </button>
                        
                        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Share Your Experience
                        </h1>
                        
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                            <Star className="h-5 w-5 text-indigo-600" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto">
                    {/* Review Form */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">How was your experience?</h2>
                            <p className="text-gray-600 mb-6">
                                Your feedback helps us improve our offers and helps others discover great deals.
                            </p>
                            
                            <form onSubmit={handleSubmit(submitHandler)}>
                                {/* Rating Input */}
                                <div className="mb-8">
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((star, index) => {
                                            const currentRating = index + 1;
                                            return (
                                                <label key={index} className="mx-1">
                                                    <input
                                                        type="radio"
                                                        {...register("rating")}
                                                        name="rating"
                                                        value={currentRating}
                                                        onClick={() => setRating(currentRating)}
                                                        className="hidden"
                                                    />
                                                    <Star
                                                        className="h-12 w-12 cursor-pointer transition-colors"
                                                        fill={currentRating <= (hover || rating) ? "#f59e0b" : "none"}
                                                        stroke={currentRating <= (hover || rating) ? "#f59e0b" : "#d1d5db"}
                                                        onMouseEnter={() => setHover(currentRating)}
                                                        onMouseLeave={() => setHover(0)}
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                    
                                    <div className="flex justify-between px-2">
                                        <div className={`flex flex-col items-center ${rating >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                                            <Frown className="h-5 w-5 text-red-500" />
                                            <span className="text-xs mt-1">Poor</span>
                                        </div>
                                        <div className={`flex flex-col items-center ${rating >= 3 ? 'opacity-100' : 'opacity-40'}`}>
                                            <Meh className="h-5 w-5 text-yellow-500" />
                                            <span className="text-xs mt-1">Okay</span>
                                        </div>
                                        <div className={`flex flex-col items-center ${rating >= 5 ? 'opacity-100' : 'opacity-40'}`}>
                                            <Smile className="h-5 w-5 text-green-500" />
                                            <span className="text-xs mt-1">Great</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Comments */}
                                <div className="mb-6">
                                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                                        Share more details (optional)
                                    </label>
                                    <textarea
                                        id="comment"
                                        {...register("comments")}
                                        rows="4"
                                        className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="What did you like or dislike about this offer?"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                </div>
                                
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={rating === 0 || isSubmitting}
                                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${rating === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Review Guidelines */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <h3 className="font-medium text-gray-800 mb-3">Review Guidelines</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Be honest and specific about your experience</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Focus on the food quality and service</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span>Avoid personal information or offensive language</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}