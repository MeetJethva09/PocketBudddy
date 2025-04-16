
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Demo = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState([]);
    const [rest, setRest] = useState([]);
    const [users , setUsers] = useState([]);
    const [lastRest , setLastRest] = useState({});
    const [stats, setStats] = useState({
        activeUsers: 0,
        pendingOrders: 0,
        monthlyRevenue: 0,
        newCustomers: 0
    });

    const getAdmin = async () => {
        const adminName = await axios.get("/userid/" + localStorage.getItem("id"));
        setName(adminName.data.data);
        
    }   

    const getAllRest = async () => {
        const allRest = await axios.get("/rest/getallrest");
        setRest(allRest.data.data);
    }

    const getAllUsers = async () =>{
        const res = await axios.get("/alluser")
        setUsers(res.data.data)
    }

    const restLen = async () => {
        const restLeng = await axios.get("/rest/getallrest");
        setLastRest(restLeng.data.data.pop())
      };

    const getStats = async () => {
        setStats({
            activeUsers: 142,
            pendingOrders: 24,
            monthlyRevenue: 12345,
            newCustomers: 8
        });
    }

    const deleteAction = async (id) => {
        const delRest = await axios.delete("/rest/deleterestbyid/" + id);
        alert("Restaurant Deleted..");
        getAllRest();
    }

    const logoutAction = () => {
        localStorage.clear();
        navigate("/");
    }

    useEffect(() => {
        getAdmin();
        getAllRest();
        getStats();
        getAllUsers();
        restLen()
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar - Fixed position */}
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
                    <Link to="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors text-sm">
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
        
            {/* Main Content - With left margin to account for sidebar */}
            <main className="flex-1 ml-0 md:ml-56 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden fixed top-4 left-4 z-40 bg-gray-800 text-white p-2 rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Compact Header */}
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-3 rounded-lg shadow-sm mb-4">
                        <div className="mb-2 md:mb-0">
                            <h2 className="text-lg font-semibold">Welcome, <span className='text-purple-600'>{name.firstName} {name.lastName}</span> 👋</h2>
                            <p className="text-gray-500 text-xs">Admin Dashboard Overview - {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="hidden md:block text-xs bg-gray-100 px-2 py-1 rounded-full">
                                <i className="fas fa-circle text-green-500 mr-1"></i>
                                System Status: <span className="font-medium">Operational</span>
                            </div>
                            <button 
                                onClick={logoutAction}
                                className="flex items-center space-x-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg text-sm"
                            >
                                <i className="fas fa-sign-out-alt text-xs"></i>
                                <span>Logout</span>
                            </button>
                        </div>
                    </header>

                    {/* Compact Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {[
                            { title: "Restaurants", value: rest.length, icon: "utensils", color: "purple", trend: "up", change: "3%" },
                            { title: "Active Users", value: users.length, icon: "users", color: "blue", trend: "up", change: "12%" },
                            { title: "Monthly Revenue", value: `$${stats.monthlyRevenue.toLocaleString()}`, icon: "dollar-sign", color: "green", trend: "up", change: "18%" }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-500 text-xs">{stat.title}</p>
                                        <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                                        <p className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                                            <i className={`fas fa-arrow-${stat.trend} mr-1`}></i>
                                            {stat.change}
                                        </p>
                                    </div>
                                    <div className={`p-2 bg-${stat.color}-100 rounded-lg`}>
                                        <i className={`fas fa-${stat.icon} text-${stat.color}-600 text-sm`}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Compact Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
                        <div className="lg:col-span-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-gray-800 font-medium text-sm">Sales Overview</h3>
                                <select className="text-xs border border-gray-200 rounded px-2 py-1">
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>
                            <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
                                <img src="/src/assets/images/chart.webp" alt="Sales chart" className="h-full w-full " />
                            </div>
                        </div>

                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-gray-800 font-medium text-sm mb-2">Recent Activity</h3>
                            <div className="space-y-2">
                                {[
                                    { icon: "user-plus", color: "blue", text: `Total ${users.length} customers registered`, time: "1 hours ago" },
                                    { icon: "shopping-cart", color: "green", text: "New order #ORD-1245 placed", time: "3 hours ago" },
                                    { icon: "utensils", color: "purple", text: `${lastRest.name} Restaurant  added`, time: "0.5 hours ago" }
                                ].map((activity, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <div className={`mt-0.5 w-6 h-6 bg-${activity.color}-100 rounded-full flex items-center justify-center`}>
                                            <i className={`fas fa-${activity.icon} text-${activity.color}-600 text-xs`}></i>
                                        </div>
                                        <div>
                                            <p className="text-gray-800 text-xs">{activity.text}</p>
                                            <p className="text-gray-500 text-xxs">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Compact Restaurant Table */}
                    <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                            <div>
                                <h3 className="text-md font-bold text-gray-800">Restaurant Management</h3>
                                <p className="text-gray-500 text-xxs">Manage all your restaurant listings</p>
                            </div>
                            <div className="flex space-x-2 mt-2 md:mt-0">
                               
                                <button onClick={()=>{alert("You have'nt Access to Add Restaurants")}} className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                                    + Add
                                </button>
                            </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-2 text-left text-xs font-medium text-gray-500">Name</th>
                                        <th className="p-2 text-left text-xs font-medium text-gray-500">Status</th>
                                        <th className="p-2 text-left text-xs font-medium text-gray-500">Type</th>
                                        <th className="p-2 text-left text-xs font-medium text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {rest.slice(0, 5).map((restaurant) => (
                                        <tr key={restaurant._id} className="hover:bg-gray-50">
                                            <td className="p-2 text-gray-800 font-medium text-xs">{restaurant.name}</td>
                                            <td className="p-2">
                                                <span className={`px-1.5 py-0.5 text-xxs rounded-full ${
                                                    restaurant.status === "Active" 
                                                        ? "bg-green-100 text-green-800" 
                                                        : "bg-red-100 text-red-800"
                                                }`}>
                                                    {restaurant.status === "Active" ? "Open" : "Closed"}
                                                </span>
                                            </td>
                                            <td className="p-2 text-gray-600 text-xs">{restaurant.foodtype}</td>
                                            <td className="p-2">
                                                <div className="flex space-x-4">
                                                    <button className="text-blue-600 hover:text-blue-800 text-xs" title="Edit">
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                    <button 
                                                        className="text-red-600 hover:text-red-800 text-xs" 
                                                        onClick={() => deleteAction(restaurant._id)}
                                                        title="Delete"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <footer className="bg-white p-2 border-t text-center text-gray-500 text-xxs mt-2">
                        <p>© {new Date().getFullYear()} PocketBuddy</p>
                    </footer>
                </div>
            </main>
        </div>
    )
}