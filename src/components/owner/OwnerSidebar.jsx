import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {Footer} from '../common/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const OwnerSidebar = () => {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [name , setName] = useState([]);
  const [activeOffers ,setActiveOffers] = useState([]);
  const [activeRests ,setActiveRests] = useState([]);
  const [offerLen , setOfferLen] = useState([]);
  const [restLeng , setRestLeng] = useState({});
  const [onlyUser , setOnlyUser] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getName = async () =>{
    const getName = await axios.get("/userid/" + localStorage.getItem("id"));
    setName(getName.data.data);
  }


  const logoutAction = () =>{
    localStorage.clear();
    navigate("/signin");
  }

  const activeOffer = async () =>{
    const aciveOfferLength = await axios.get("/getoffers/" + localStorage.getItem("id"));
    setActiveOffers(aciveOfferLength.data.data);
  }

  const activeRest = async () =>{
    const getActiveRest = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"))
    setActiveRests(getActiveRest.data.data);
  }

  const offerLenght = async () =>{
    const aciveOfferlen = await axios.get("/getoffers/" + localStorage.getItem("id"));
    setOfferLen(aciveOfferlen.data.data.pop());
  }

  const restLen = async () =>{
      const restLeng = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"));
      setRestLeng(restLeng.data.data.pop());
  }

  const getUserOnly = async () =>{
    const rid = "67c5252658519e08c6341bd4";
    const userOnly = await axios.get("/getuseronly/" + rid);
    console.log(userOnly.data.data);
    setOnlyUser(userOnly.data.data.pop())
  }

  useEffect(()=>{
    getName();
    activeOffer()
    activeRest()
    offerLenght()
    restLen()
    getUserOnly()
  },[])
 
  return (
    <>
      {/* Mobile Navbar Toggle Button */}
      {/* <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i> 
        </button>
      </div> */}

      {/* Sidebar */}
   

      <Outlet />

      {/* New  */}


      <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 mt-0 p-2 bg-transparent text-white rounded-lg focus:outline-none"
      >
        <i className="fas fa-bars text-black"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`min-h-full bg-purple-800 text-white w-64 p-6 fixed lg:relative transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 p-2 text-white focus:outline-none"
        >
          <i className="fas fa-times"></i>
        </button>

        <h2 className="text-2xl font-bold mb-8">PocketBuddy</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </a>
          <Link to='/viewrest' className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg">
            <i className="fas fa-utensils"></i>
            <span>Restaurants</span>
          </Link>

          <Link to='/addoffer' className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg">
            <i className="fas fa-utensils"></i>
            <span>Add Offers</span>
          </Link>
          
          <Link to="/viewoffer" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg">
            <i className="fas fa-gift"></i>
            <span>Offers</span>
          </Link>
    
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg">
            <i className="fas fa-chart-line"></i>
            <span>Analytics</span>
          </a>
          <Link to="/setting" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded-lg">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="pro">
          <h1 className="text-xl font-bold text-gray-800">Welcome , <span className='text-red-700'>{name.firstName} {name.lastName}.. 👋👋</span></h1>
          <div>Track your all Restaurants And related Offers..</div>
         </div>
          <div className="flex items-center space-x-4">
            <Link to={'/addrest'}>
            <button className="bg-purple-500 text-sm text-white px-2 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
              Add Restaurant
            </button>
            </Link>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              <i className="fas fa-bell"></i>
            </button>
            <button className='bg-red-400 p-1.5 w-20 rounded text-white' onClick={()=>{logoutAction()}}>Logout</button>
          </div>
        </div>
        

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 text-sm">Total Restaurants</h3>
            <p className="text-3xl  font-bold text-gray-800">{activeRests.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 text-sm">Active Offers</h3>
            <p className="text-3xl  font-bold text-gray-800">{activeOffers.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 text-sm">Total Customers</h3>
            <p className="text-3xl  font-bold text-gray-800">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <p className="text-3xl  font-bold text-gray-800">$12,345</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-800 font-bold mb-4">Sales Overview</h3>
            <div className="h-63 bg-gray-100 rounded-lg flex items-center justify-center">
             <img src="/src/assets/images/chart.webp" alt="" className='h-auto'/>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-800 font-bold mb-4">Customer Growth</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
             <img src="/src/assets/images/chart2.webp" alt="" />
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-gray-800 font-bold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-utensils text-white"></i>
              </div>
              <div>
                <p className="text-gray-800">New restaurant added: <span className="font-semibold">{restLeng.name}🍽️🍴</span></p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-gift text-white"></i>
              </div>
              <div> 
                <p className="text-gray-800">New offer created: <span className="font-semibold">{offerLen.offerTitle}🎊🎊</span></p>
                <p className="text-gray-500 text-sm">{offerLen.createdAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white"></i>
              </div>
              <div>
                <p className="text-gray-800">New customer registered: <span className="font-semibold">{onlyUser.firstName}&nbsp;{onlyUser.lastName}</span></p>
                <p className="text-gray-500 text-sm">{onlyUser.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>

     
    </>
  );
};