import React, { useEffect, useState } from 'react'
import { UserNavbar } from './UserNavbar'
import { useNavigate } from 'react-router-dom'
import "../../assets/viewoffercss.css"
import { Outlet } from 'react-router-dom'

import { Footer } from '../common/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const UserSidebar = () => {
  const navigate = useNavigate();

  const [offers , setOffres] = useState([]);
  const [rests , setRests] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name , setName] = useState([]);


  const getOffers = async () =>{
    const allOffer = await axios.get("/alloffer")
    console.log(allOffer.data.data);
    setOffres(allOffer.data.data); 
  }

  const getAllRest = async () =>{
    const allRest = await axios.get("/rest/getallrest");
    console.log(allRest.data.data);
    setRests(allRest.data.data);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getUserName = async () =>{
    const res = await axios.get("/userid/" + localStorage.getItem("id"));
    setName(res.data.data);
 
  }

  const logOutAction = () =>{
    localStorage.clear();
    navigate("/signin")
  }
  
  useEffect(()=>{
    getOffers()
    getAllRest()
    getUserName()

    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
 },[])

  return (
    <div>
   

    <div className="min-h-screen bg-gray-50">
      {/* Header with Search */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center  md:mb-0">
            <h1 className="text-2xl font-bold text-indigo-600 ">PocketBuddy</h1>
            <nav className="ml-10 hidden md:block ">
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-gray-800 hover:text-indigo-600">Home</Link></li>
                <li><Link to="/restaurants" className="text-gray-800 hover:text-indigo-600">Restaurants</Link></li>
                <li><Link to="/offers" className="text-gray-800 hover:text-indigo-600">Offers</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
           
            
            />
            <button className="absolute right-3">
            
              <i class="fa-solid fa-magnifying-glass mb-2"></i>
              
            </button>
          </div>

          <div className="flex items-center mr-20 md:mt-0 sm:mt-2">
          <div className="relative inline-block user-dropdown">
      {/* User Icon Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition"
      >
        <i className="fa-solid fa-user text-gray-700"></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1  bg-white shadow-md rounded-md w-52">
         <p className="px-2 py-2 text-center text-gray-700 font-semibold">{name.firstName}&nbsp;{name.lastName}</p>
          <hr />
          <button onClick={()=>{logOutAction()}}
            className="block w-full text-left px-4 py-2 text-center text-red-600 hover:bg-red-100">
            Logout
          </button>
        </div>
      )}
    </div>
            {/* <Link to="/profile" className="ml-8">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center mr-7 justify-center overflow-hidden">
              <i class="fa-solid fa-user"></i>
              </div>
            </Link> */}
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Delicious Food Delivered To Your Doorstep</h2>
          <p className="text-xl mb-6">Order from your favorite restaurants with just a few taps</p>
          <Link 
            to="/restaurants" 
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
           Explore Now
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <section className="mb-10">
          <div className="flex overflow-x-auto pb-2 space-x-4">
        
              <button
                key=''
         
                className={`px-4 py-2 rounded-full whitespace-nowrap  'bg-indigo-600 text-white' 'bg-white text-gray-800 border border-gray-200'}`}
              >
               cate
              </button>
       
          </div>
        </section>

        {/* Featured Restaurants */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
              <div key='fr' className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src='/src/assets/images/bar.webp' 
                  alt=''
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">name</h3>
                    <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                     rating
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">hseee</p>
                  <p className="text-gray-500 text-sm mt-2">delll</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      to='' 
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View Menu
                    </Link>
                    <button 
                    
                      className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition duration-300"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
        
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
              <div key='id' className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src='/src/assets/images/about2.jpg'
                    alt=''
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">🎊 Weekend Saver Platter 🎊</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">Treat yourself this weekend with our special platter, packed with flavorful dishes and refreshing drinks. A fulfilling meal at an unbeatable price!</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                      Use code: <strong>WEEK7</strong>
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Apply Offer
                    </button>
                  </div>
                </div>
              </div>


              <div key='id' className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src='/src/assets/images/bar.webp'
                    alt=''
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">🎊 Royal Dining Experience 🎊</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">Our chef will introduce signature dishes and curate a meal tailored to your preferences.</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                      Use code: <strong>ROY100</strong>
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Apply Offer
                    </button>
                  </div>
                </div>
              </div>
           
          </div>
        </section>

        {/* How It Works */}
        <section className="rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth='3' d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">1. Choose Restaurant</h3>
              <p className="text-gray-600">Browse through our partner restaurants</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth='3' d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">2. Select Offers</h3>
              <p className="text-gray-600">Pick your favorite Offers..</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">3. Delivery or Pickup</h3>
              <p className="text-gray-600">Get your food delivered or pick it up</p>
            </div>
          </div>
        </section>
      </main>

     
    </div>


      {/* Offers Section */}
      <div className='text-3xl font-bold  text-center'> 🎊 Featured Offers.. 🎉</div>
      <div className="main-container mb-3">
      
        { offers.map((offer)=>{
          return (
               <div className="offer-card">
               <img src={offer.offerImage} className="offerimage" alt="Offer Image" />
               <h2 className="offer-title">🎉 {offer.offerTitle} 🎊</h2>
               <p className="offer-desc">{offer.offerDesc}</p>
   
               <div className="offer-details">
                 <p>
                   <strong>Status:</strong> <span className="status available">{offer.offerStatus}</span>
                 </p>
                 <p>
                   <strong>Food Type:</strong> {offer.foodType} 🍛
                 </p>
                 <p>
                   <strong>Offer Start:</strong> {new Date(offer.offerStart).toDateString()}
                 </p>
                 <p>
                   <strong>Offer End:</strong> {new Date(offer.offerEnd).toDateString()}
                 </p>
               </div>
   
               <button className="claim-offer">Claim Offer</button>
             </div>
          )
        })}
     
      </div>
      
      

      {/* Footer */}
   <Footer/>
    

    </div>
  )
}
