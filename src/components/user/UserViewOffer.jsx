
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../common/Footer';
import { Rewind, Search, ChevronDown, LogOut, Ticket, MapPin } from 'lucide-react';

export const UserViewOffer = () => {
    const id = useParams().id;
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [name, setName] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const [offer, setOffer] = useState({});

    const logOutAction = () => {
        localStorage.clear();
        navigate("/signin");
    }

    const getUserName = async () => {
        const res = await axios.get("/userid/" + localStorage.getItem("id"));
        setName(res.data.data);
    }

    const getOfferById = async () => {
        const res = await axios.get("/getofferbyofferid/" + id);
        setOffer(res.data.data)
     
    }

    const handleClaimOffer = async () => {
        // Add your claim offer logic here
        const addClaimedOffer = await axios.post()
        // You might want to add a toast notification here
    }

    useEffect(() => {
        getUserName()
        getOfferById()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Modern Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <Link to="/user" className="flex items-center space-x-2 group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-700 group-hover:to-purple-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                PocketBuddy
                            </h1>
                        </Link>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-xl mx-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search restaurants or offers..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-gray-300"
                                />
                                <div className="absolute left-3 top-2.5 text-gray-400">
                                    <Search className="h-5 w-5" />
                                </div>
                            </div>
                        </div>

                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center space-x-1 focus:outline-none group"
                            >
                                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
                                    <span className="text-indigo-600 font-medium text-sm">
                                        {name.firstName?.charAt(0)}{name.lastName?.charAt(0)}
                                    </span>
                                </div>
                                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 border border-gray-100 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-800">{name.firstName} {name.lastName}</p>
                                        <p className="text-xs text-gray-500 truncate">{name.email}</p>
                                    </div>
                                    <button
                                        onClick={() => { logOutAction() }}
                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                                    >
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
                    >
                        <Rewind className="h-5 w-5 mr-2" />
                        Back to offers
                    </button>

                    {/* Modern Offer Card */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/3">
                                <img 
                                    src={offer.offerImage}
                                    alt="Offer" 
                                    className="h-full w-full object-cover md:h-full md:w-full" 
                                />
                            </div>
                            <div className="p-8 md:w-2/3">
                                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-1">
                                    {offer.foodType}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    {offer.offerTitle}
                                </h2>
                                
                                {/* Restaurant Information */}
                                {offer.restaurant && (
                                    <div className="flex items-center text-gray-700 mb-4">
                                        <MapPin className="h-5 w-5 text-indigo-500 mr-2" />
                                        <div>
                                            <p className="font-medium">{offer.restaurant?.name}</p>
                                        </div>
                                    </div>
                                )}
                                
                                <p className="mt-2 text-gray-600 mb-6">
                                    {offer.offerDesc}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Start Time</h3>
                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                            {new Date(offer.offerStart).toLocaleDateString()} at {new Date(offer.offerStart).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">End Time</h3>
                                        <p className="mt-1 text-sm font-medium text-gray-900">
                                            {new Date(offer.offerEnd).toLocaleDateString()} at {new Date(offer.offerEnd).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</h3>
                                        <p className="mt-1 text-sm font-medium text-gray-900">{offer.offerStatus}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Food Type</h3>
                                        <p className="mt-1 text-sm font-medium text-gray-900">{offer.foodType}</p>
                                    </div>
                                </div>

                                {/* Claim Offer Button */}
                                <div className="mt-8">
                                    {offer.offerStatus === 'Unavailable' ? alert("Offer Unavailable") :
                                    <Link to={`/userclaimeoffers/${offer._id}`}>
                                        <button
                                            onClick={handleClaimOffer}
                                            className="w-full md:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
                                        >
                                            <Ticket className="h-5 w-5 mr-2" />
                                            Claim This Offer
                                        </button>
                                    </Link>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}