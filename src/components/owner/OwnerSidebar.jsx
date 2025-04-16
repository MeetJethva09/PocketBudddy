
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Home, Utensils, Gift, PlusCircle, BarChart2, Settings, Bell, LogOut } from 'lucide-react';
import { OnlySide } from './OnlySide';

export const OwnerSidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [name, setName] = useState([]);
  const [activeOffers, setActiveOffers] = useState([]);
  const [activeRests, setActiveRests] = useState([]);
  const [offerLen, setOfferLen] = useState([]);
  const [restLeng, setRestLeng] = useState({});
  const [onlyUser, setOnlyUser] = useState({});
  const [users , setUsers] = useState([])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const logoutAction = () => {
    localStorage.clear();
    navigate("/signin");
  };

  // Data fetching functions remain exactly the same
  const getName = async () => {
    const getName = await axios.get("/userid/" + localStorage.getItem("id"));
    setName(getName.data.data);
  };

  const activeOffer = async () => {
    const aciveOfferLength = await axios.get("/getoffers/" + localStorage.getItem("id"));
    setActiveOffers(aciveOfferLength.data.data);
  };

  const activeRest = async () => {
    const getActiveRest = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"))
    setActiveRests(getActiveRest.data.data);
  };

  const offerLenght = async () => {
    const aciveOfferlen = await axios.get("/getoffers/" + localStorage.getItem("id"));
    console.log(aciveOfferlen)
    setOfferLen(aciveOfferlen.data.data.pop());
  };

  const restLen = async () => {
    const restLeng = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"));
    setRestLeng(restLeng.data.data.pop());
  };

  const getUserOnly = async () => {
    const rid = "67c5252658519e08c6341bd4";
    const userOnly = await axios.get("/getuseronly/" + rid);
    setOnlyUser(userOnly.data.data.pop());
  };

  const getAllUsers = async () =>{
    const res = await axios.get("/alluser")
    setUsers(res.data.data)
}

  useEffect(() => {
    getName();
    activeOffer();
    activeRest();
    offerLenght();
    restLen();
    getUserOnly();
    getAllUsers();  
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white shadow-lg rounded-lg focus:outline-none backdrop-blur-sm bg-opacity-80"
      >
        {isSidebarOpen ? (
          <i className="fas fa-times text-gray-700"></i>
        ) : (
          <i className="fas fa-bars text-gray-700"></i>
        )}
      </button>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}

      <div
        className={`fixed h-full w-64 flex-shrink-0 z-30 md:z-0 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <OnlySide/>
      </div>
          
          
      

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto md:ml-64">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome, <span className="text-purple-600">{name.firstName} {name.lastName}</span> 👋
              </h1>
              <p className="text-gray-600">Track your all Restaurants And related Offers</p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto">
              <Link to="/addrest" className="flex-1 md:flex-none">
                <button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all flex items-center justify-center space-x-2">
                  <PlusCircle size={16} />
                  <span>Add Restaurant</span>
                </button>
              </Link>
              <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
                <Bell size={20} className="text-gray-600" />
              </button>
              <button 
                onClick={logoutAction}
                className="p-2 bg-gradient-to-r from-red-500 to-red-400 text-white rounded-lg hover:shadow-md transition-all flex items-center space-x-2"
              >
                <LogOut size={16} />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {[
              { title: "Total Restaurants", value: activeRests.length, icon: "utensils" },
              { title: "Active Offers", value: activeOffers.length, icon: "gift" },
              { title: "Total Customers", value: users.length, icon: "users" },
              { title: "Revenue", value: "12,345", icon: "dollar-sign" }
            ].map((metric, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-500 text-sm">{metric.title}</h3>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 md:mt-2">{metric.value}</p>
                  </div>
                  <div className="p-2 md:p-3 bg-purple-100 rounded-lg">
                    <i className={`fas fa-${metric.icon} text-purple-600`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-800 font-bold mb-3 md:mb-4">Sales Overview</h3>
              <div className="h-48 md:h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <img src="/src/assets/images/chart.webp" alt="Sales chart" className="h-auto w-full object-contain" />
              </div>
            </div>
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-800 font-bold mb-3 md:mb-4">Customer Growth</h3>
              <div className="h-48 md:h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <img src="/src/assets/images/chart2.webp" alt="Customer growth chart" className="h-auto w-full object-contain" />
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-800 font-bold mb-3 md:mb-4">Recent Activities</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                {
                  icon: "utensils",
                  color: "purple",
                  text: `New restaurant added: ${restLeng?.name || ''} 🍽️🍴`,
                  time: "2 hours ago"
                },
                {
                  icon: "gift",
                  color: "purple",
                  text: `New offer created: ${offerLen?.offerTitle || ''} 🎊🎊`,
                  time: offerLen?.createdAt || ''
                },
                {
                  icon: "user",
                  color: "purple",
                  text: `New customer registered: ${onlyUser.firstName || ''} ${onlyUser.lastName || ''}`,
                  time: onlyUser?.createdAt || ''
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 bg-${activity.color}-100 rounded-full flex items-center justify-center`}>
                    <i className={`fas fa-${activity.icon} text-${activity.color}-600 text-sm md:text-base`}></i>
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm md:text-base">{activity.text}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};