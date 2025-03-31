import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const OnlySide = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
    return (
      <>
         <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 p-3 bg-white-800 text-black rounded-lg focus:outline-none"
      >
        <i className="fas fa-bars text-xl"></i>
      </button>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-purple-800 text-white w-64 p-8  fixed sm:relative min-h-screen transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden absolute top-4 right-4 p-2 text-white focus:outline-none"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold mb-4">PocketBuddy</h2>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link
            to="/rest"
            className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg"
            onClick={toggleSidebar}
          >
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/addoffer"
            className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg"
            onClick={toggleSidebar}
          >
            <i className="fas fa-home"></i>
            <span>Add Offers</span>
          </Link>

          <Link
            to="/viewrest"
            className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg"
            onClick={toggleSidebar}
          >
            <i className="fas fa-utensils"></i>
            <span>Restaurants</span>
          </Link>
          <Link
            to="/viewoffer"
            className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg"
           
          >
            <i className="fas fa-gift"></i>
            <span>Offers</span>
          </Link>
          <Link
            to="/analytics"
            className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg"
            onClick={toggleSidebar}
          >
            <i className="fas fa-chart-line"></i>
            <span>Analytics</span>
          </Link>
          <Link
            to="/setting"
            className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg"
            onClick={toggleSidebar}
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </Link>
        </nav>
      </div>

        </>
    )
}

