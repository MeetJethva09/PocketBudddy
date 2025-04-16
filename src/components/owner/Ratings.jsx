
import { Star, ChevronLeft, Filter, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../common/Footer';
import { OnlySide } from './OnlySide';
import axios from 'axios';

export const Ratings = () => {
    const navigate = useNavigate();
    const [ratings , setRatings] = useState([]);

    const getRatings = async () =>{
        const res = await axios.get("/rating/getallratings");
        setRatings(res.data.data);
        console.log(res.data.data)
    }

useEffect(()=>{
    getRatings()
},[])
    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <div className="hidden md:block w-64 bg-white border-r border-gray-200">
                <OnlySide/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                    <div className="px-4 py-4">
                        <div className="flex items-center justify-between">
                            <button 
                                onClick={() => navigate(-1)}
                                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5 mr-1" />
                                Back
                            </button>
                            
                            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                All Ratings & Reviews
                            </h1>
                            
                            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                                <Star className="h-5 w-5 text-indigo-600" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    {/* Search and Filter */}
                    <div className="mb-6 flex space-x-3">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Search reviews..."
                            />
                        </div>
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <Filter className="h-5 w-5 text-gray-500 mr-1" />
                            Filter
                        </button>
                    </div>

                    {/* Stats Summary */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-indigo-600">4.2</p>
                            <p className="text-sm text-gray-500">Average Rating</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-indigo-600">128</p>
                            <p className="text-sm text-gray-500">Total Reviews</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-indigo-600">24</p>
                            <p className="text-sm text-gray-500">5-Star Ratings</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-indigo-600">87%</p>
                            <p className="text-sm text-gray-500">Positive</p>
                        </div>
                    </div>

                    {/* Ratings List - Will be populated from your database */}
                    <div className="space-y-4">
                    
                      
                        {ratings.map((rating) => (
                            <div key={rating.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                                <div className="p-6">
                                    <div className="flex items-start">
                                        <img 
                                            src="/src/assets/images/user.png"
                                            alt=""
                                            className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-indigo-100" 
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-gray-800">{rating.userId?.firstName} {rating.userId?.lastName}</h3>
                                                    <p className="text-sm text-gray-500">{rating.userId?.email}</p>
                                                </div>
                                                <div className="flex items-center bg-indigo-50 px-2 py-1 rounded">
                                                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                                                    <span className="text-sm font-medium">{rating.rating}.0</span>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <p className="font-medium text-indigo-600">{rating.offerId?.offerTitle}</p>
                                                <p className="text-sm text-gray-500 mb-2">{rating.offer}</p>
                                                <p className="text-gray-700">{rating.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                       
                    </div>

               
                   
                </main>

                
            </div>
        </div>
    )
}