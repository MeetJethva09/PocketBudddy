


import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Home, PlusSquare, Utensils, Gift, BarChart2, Settings, Menu, X } from 'lucide-react';

export const OnlySide = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 p-3 bg-white shadow-lg rounded-lg focus:outline-none backdrop-blur-sm bg-opacity-80"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Modern Sidebar */}
      <div
        className={`bg-gradient-to-b from-purple-900 to-purple-700 text-white w-64 p-6 fixed sm:relative min-h-screen transform transition-all duration-300 ease-in-out z-50 shadow-xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
          }`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden absolute top-4 right-4 p-2 text-white focus:outline-none hover:bg-purple-600 rounded-full"
        >
          <X size={20} />
        </button>

        {/* Sidebar Header */}
        <div className="flex items-center mb-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            PocketBuddy
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <Link
            to="/rest"
            className="flex items-center space-x-3 p-3 hover:bg-purple-600/50 rounded-lg transition-all duration-200 group"
            onClick={toggleSidebar}
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-400/30 transition-colors">
              <Home size={18} className="text-purple-100" />
            </div>
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/addoffer"
            className="flex items-center space-x-3 p-3 hover:bg-purple-600/50 rounded-lg transition-all duration-200 group"
            onClick={toggleSidebar}
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-400/30 transition-colors">
              <PlusSquare size={18} className="text-purple-100" />
            </div>
            <span className="font-medium">Add Offers</span>
          </Link>

          <Link
            to="/viewrest"
            className="flex items-center space-x-3 p-3 hover:bg-purple-600/50 rounded-lg transition-all duration-200 group"
            onClick={toggleSidebar}
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-400/30 transition-colors">
              <Utensils size={18} className="text-purple-100" />
            </div>
            <span className="font-medium">Restaurants</span>
          </Link>

          <Link
            to="/viewoffer"
            className="flex items-center space-x-3 p-3 hover:bg-purple-600/50 rounded-lg transition-all duration-200 group"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-400/30 transition-colors">
              <Gift size={18} className="text-purple-100" />
            </div>
            <span className="font-medium">Offers</span>
          </Link>

          <Link
            to="/viewratings"
            className="flex items-center space-x-3 p-3 hover:bg-purple-600/50 rounded-lg transition-all duration-200 group"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-400/30 transition-colors">
            <i class="fa-regular fa-star"></i>
            </div>
            <span className="font-medium">Ratings</span>
          </Link>

         
        </nav>

        {/* User Profile/Footer at bottom */}
        
      </div>
    </>
  )
}