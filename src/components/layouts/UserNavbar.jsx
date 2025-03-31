import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X , Menu } from 'lucide-react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const UserNavbar = () => {
    const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);
   
    const logoutAction = ()=>{
        localStorage.clear();
        navigate("/signin")
    }

  return (
  <>
<nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-2xl font-bold text-indigo-600">PocketBuddy</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Offers</a>
                        <Link to="about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
                    </div>
                    <div className="btns">
                    
                     {
                        localStorage.length >=0 ?    <button onClick={()=>{logoutAction()}}className='bg-red-500 p-1.5 mb-2 rounded text-white'>Logout</button>  :
                        <Link to={'/signup'}> <button className='btn'>Sign up</button> </Link>
                     }
                        
                      
                     
                    
                    
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Offers</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Restaurants</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
                </div>
            )}
        </nav>

  </>
  )

}
