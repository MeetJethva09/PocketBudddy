
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Footer } from '../common/Footer';

export const UserSidebar = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const [rests, setRests] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const getOffers = async () => {
    const allOffer = await axios.get("/alloffer");
    setOffers(allOffer.data.data); 
  }

  const getAllRest = async () => {
    const allRest = await axios.get("/rest/getallrest");
    setRests(allRest.data.data);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getUserName = async () => {
    const res = await axios.get("/userid/" + localStorage.getItem("id"));
    setName(res.data.data);
  }

  const logOutAction = () => {
    localStorage.clear();
    navigate("/signin");
  }

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const filteredRestaurants = rests.filter(rest => 
    rest.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rest.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOffers = offers.filter(offer => 
    offer.offerTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.offerDesc?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getOffers();
    getAllRest();
    getUserName();

    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                PocketBuddy
              </h1>
            </div>

            {/* Search Bar - Center Positioned */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search restaurants or offers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation and User Dropdown */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <button 
                      onClick={() => scrollToSection('hero')}
                      className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-sm"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('restaurant')}
                      className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-sm"
                    >
                      Restaurants
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('offers')}
                      className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-sm"
                    >
                      Offers
                    </button>
                  </li>
                </ul>
              </nav>

              {/* User Dropdown */}
              <div className="relative user-dropdown">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium text-sm">
                      {name.firstName?.charAt(0)}{name.lastName?.charAt(0)}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">{name.firstName} {name.lastName}</p>
                      <p className="text-xs text-gray-500">{name.email}</p>
                    </div>
                    <button 
                      onClick={logOutAction}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16" id='hero'>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Delicious Food Delivered To You</h2>
          <p className="text-xl mb-6">Discover amazing offers from top restaurants</p>
          <button
            onClick={() => scrollToSection('offers')}
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-md"
          >
            Explore Offers
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Restaurants */}
        <section className="mb-12" id='restaurant'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.slice(0, 3).map((rest) => (
              <div key={rest._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={rest.restImage || '/src/assets/images/bar.webp'} 
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800">{rest.name}</h3>
                    <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {rest.rating || '4.5'}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{rest.category}</p>
                  <p className="text-gray-500 text-sm mt-2">{rest.address?.slice(0, 30)}...</p>
                  <div className="mt-4 flex justify-between items-center">
                  
                    <button onClick={()=>{alert("You have'nt Access to Show Restaurant , you only views Offers.")}} className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition duration-300">
                   View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-12" id='offers'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOffers.slice(0, 2).map((offer) => (
              <div key={offer._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-52">
                  <img 
                    src={offer.offerImage || '/src/assets/images/about2.jpg'}
                    alt={offer.offerTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">🎊 {offer.offerTitle} 🎊</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700 h-24">{offer.offerDesc}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                      Valid until: {new Date(offer.offerEnd).toLocaleDateString()}
                    </span>
                    <Link to={`/userviewoffer/${offer._id}`} className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                      Claim Offer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Offers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">All Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => (
              <div key={offer._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={offer.offerImage || '/src/assets/images/deal.webp'} 
                  alt={offer.offerTitle}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 ">{offer.offerTitle}</h3>
                  <p className="text-gray-600 text-sm h-24">{offer.offerDesc}</p>
                  <div className="flex justify-between items-center text-sm ">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      offer.offerStatus === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {offer.offerStatus}
                    </span>
                    <Link to={`/userviewoffer/${offer._id}`}>
                    <button  className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition duration-300">
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 text-gray-800">1. Choose Restaurant</h3>
              <p className="text-gray-600">Browse through our partner restaurants</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 text-gray-800">2. Select Offers</h3>
              <p className="text-gray-600">Pick your favorite offers and meals</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 text-gray-800">3. Enjoy Your Meal</h3>
              <p className="text-gray-600">Get your food delivered or pick it up</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};