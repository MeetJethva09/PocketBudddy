
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminSidebar } from '../owner/AdminSidebar';

export const AllRest = () => {
    const [rests, setRests] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getAllRests = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get("/rest/getallrest");
            setRests(res.data.data);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllRests();
    }, []);

    const filteredRests = rests.filter(rest => 
        rest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rest.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rest.foodtype.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categoryThemes = {
        'Restaurant': 'bg-gradient-to-br from-purple-500 to-purple-700',
        'Cafe': 'bg-gradient-to-br from-amber-500 to-amber-700',
        'Bakery': 'bg-gradient-to-br from-rose-500 to-rose-700',
        'Fast Food': 'bg-gradient-to-br from-red-500 to-red-700',
        'Fine Dining': 'bg-gradient-to-br from-indigo-500 to-indigo-700',
        'default': 'bg-gradient-to-br from-slate-500 to-slate-700'
    };

    const statusStyles = {
        'Active': 'bg-emerald-100 text-emerald-800',
        'Inactive': 'bg-amber-100 text-amber-800',
        'Closed': 'bg-red-100 text-red-800'
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <AdminSidebar/>

            <main className="flex-grow ml-0 md:ml-64 p-6 overflow-y-auto transition-all duration-300">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Restaurant Management</h1>
                        <p className="text-gray-500 mt-1">Manage all food establishments in your network</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search restaurants..."
                                className="block w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Link 
                            to="#" 
                            onClick={() => alert("You haven't access to add Restaurant")}
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg w-full md:w-auto"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span>Add New</span>
                        </Link>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total Restaurants</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{rests.length}</p>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Active</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{rests.filter(r => r.status === 'Active').length}</p>
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
                                <p className="text-sm text-gray-500 font-medium">Unavailabale</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{rests.filter(r => r.status === 'Unavailabale').length}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Cities</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{new Set(rests.map(r => r.city.cityName)).size}</p>
                            </div>
                            <div className="p-3 bg-amber-100 rounded-lg">
                                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Restaurant Cards Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : filteredRests.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRests.map((rest) => {
                            const themeClass = categoryThemes[rest.category] || categoryThemes["default"];
                            return (
                                <div 
                                    key={rest._id} 
                                    className={`${themeClass} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                                >
                                    <div className="p-5 text-white relative">
                                        <div className="absolute top-4 right-4 flex space-x-2">
                                            <button 
                                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                                                onClick={() => alert("You have'nt access To Edit Restaurant")}
                                            >
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button 
                                                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                                                onClick={() => alert("You have'nt access To Delete Restaurant")}
                                            >
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-xl font-bold">{rest.name}</h3>
                                            <div className="flex items-center mt-2 space-x-2">
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[rest.status]}`}>
                                                    {rest.status}
                                                </span>
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                                                    {rest.category}
                                                </span>
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                                                    {rest.foodtype}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm text-white/90 line-clamp-2">{rest.description}</p>
                                    </div>
                                    
                                    <div className="bg-white p-5">
                                        <div className="space-y-3">
                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-700">{rest.timing}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-700">{rest.address}, {rest.area?.areaName}, {rest.city?.cityName}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-700">{rest.contact}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-700">{rest.ownerId?.firstName} {rest.ownerId?.lastName}</span>
                                            </div>
                                        </div>
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
                        <h3 className="mt-4 text-lg font-medium text-gray-900">No restaurants found</h3>
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