import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AdminSidebar = () => {
     const [isOpen, setIsOpen] = useState(false);
        const [name , setName] = useState({})
     
    const getAdmin = async () => {
        const adminName = await axios.get("/userid/" + localStorage.getItem("id"));
        setName(adminName.data.data);
        
    }  
    useEffect(()=>{
        getAdmin()
    },[])
    let d = new Date()
  return (
    <div>
          <aside className={`fixed top-0 left-0 h-full w-56 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-4 space-y-4 z-30 transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}>
                <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-user-shield text-white text-sm"></i>
                    </div>
                    <h1 className="text-lg font-bold">Admin Panel</h1>
                </div>

                <nav className="space-y-5">
                    <Link to="/demo" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors text-sm">
                        <i className="fas fa-chart-line text-purple-400 w-4"></i>
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/allrests" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors text-sm">
                        <i className="fas fa-utensils text-purple-400 w-4"></i>
                        <span>Restaurants</span>
                    </Link>
                    <Link to="/alloffers" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors text-sm">
                        <i className="fas fa-gifts text-purple-400 w-4"></i>
                        <span>Offers</span>
                    </Link>
                    <Link to="/allusers" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors text-sm">
                        <i className="fas fa-users text-purple-400 w-4"></i>
                        <span>Users</span>
                    </Link>
                    <Link to="/allratings" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors text-sm">
                        <i className="fas fa-star text-purple-400 w-4"></i>
                        <span>Review Ratings</span>
                    </Link>
                   
                </nav>

                <div className="mt-auto pt-4 border-t border-gray-700 fixed bottom-5">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white text-sm"></i>
                        </div>
                        <div>
                            <p className="font-medium text-sm">{name.firstName} {name.lastName}</p>
                        
                            <p className="text-xs text-gray-400">Super Admin</p>
                        </div>
                    </div>
                    <div className="text-xs text-gray-400">
                    
                        <p>System version: 2.4.1</p>
                    </div>
                </div>
            </aside>
    </div>
  )
}
