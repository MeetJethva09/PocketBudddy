
import React, { useEffect, useState } from 'react';
import { AdminSidebar } from '../owner/AdminSidebar';
import axios from 'axios';

export const AllOffers = () => {
    const [offers, setOffers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getAllOffers = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get("/alloffer");
            setOffers(res.data.data);
            console.log(res.data.data)
        } catch (error) {
            console.error("Error fetching offers:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { 
        getAllOffers();
    }, []);

    const filteredOffers = offers.filter(offer => 
        offer.offerTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.foodtype.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const statusStyles = {
        active: 'bg-green-100 text-green-800',
        upcoming: 'bg-blue-100 text-blue-800',
        expired: 'bg-gray-100 text-gray-800'
    };

    const getStatus = (startTime, endTime) => {
        const now = new Date();
        const start = new Date(startTime);
        const end = new Date(endTime);
        
        if (now < start) return 'upcoming';
        if (now > end) return 'expired';
        return 'active';
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <AdminSidebar />
            
            <main className="flex-grow ml-0 md:ml-64 p-6 overflow-y-auto transition-all duration-300">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Offer Management</h1>
                        <p className="text-gray-500 mt-1">Manage all current and upcoming offers</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                {/* <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg> */}
                            </div>
                            {/* <input
                                type="text"
                                placeholder="Search offers..."
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            /> */}
                        </div>
                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600">
                            {filteredOffers.length} {filteredOffers.length === 1 ? 'offer' : 'offers'}
                        </div>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Offers</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{offers.length}</p>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Active Offers</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">
                                    {offers.filter( offer => offer.offerStatus === "Available").length}
                                </p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Currently Unavailable Offers</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">
                                   {offers.filter(offer => offer.offerStatus === "Unavailable").length}
                                </p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offers Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : filteredOffers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredOffers.map((offer) => {
                            const status = getStatus(offer.startTime, offer.endTime);
                            return (
                                <div key={offer._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                                    {/* Offer Image */}
                                    <div className="h-48 overflow-hidden">
                                        <img 
                                            src={offer.offerImage || 'https://via.placeholder.com/400x300?text=No+Image'} 
                                            alt={offer.offerTitle}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Offer Content */}
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-gray-800">{offer.offerTitle}</h3>
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full bg-green-200 text-green`}>
                                               {offer.offerStatus}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 mb-4 line-clamp-2">{offer.offerDesc}</p>
                                        
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="capitalize">{offer.foodType}</span>
                                        </div>
                                        <div><i class="fa-solid fa-bowl-food"></i>&nbsp; {offer.restaurant.name}</div>
                                        
                                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 font-medium">Start</p>
                                                <p className="text-gray-800">
                                                    {new Date(offer.offerStart).toLocaleDateString()} <br />
                                                   
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 font-medium">End</p>
                                                <p className="text-gray-800">
                                                    {new Date(offer.offerEnd).toLocaleDateString()} <br />
                                                   
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                                            <button className="px-3 py-1 bg-purple-50 text-purple-600 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors">
                                                View Details
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="col-span-full py-12 text-center bg-white rounded-xl shadow-sm border border-gray-100">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">No offers found</h3>
                        <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                        <div className="mt-6">
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Clear search
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};