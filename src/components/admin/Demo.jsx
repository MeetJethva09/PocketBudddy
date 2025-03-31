import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Demo = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [name , setName] = useState([]);
    const [rest , setRest] = useState([]);

    const getAdmin = async  () =>{
        const adminName = await axios.get("/userid/" + localStorage.getItem("id"));
        setName(adminName.data.data);
    }   

    const getAllRest = async () =>{
        const allRest = await axios.get("/rest/getallrest")
        setRest(allRest.data.data);
    }

    const deleteAction = async (id) =>{
      const delRest = await axios.delete("/rest/deleterestbyid/" + id)
      alert("Restaurant Deleted..");
    }

    const logoutAction = () =>{
        localStorage.clear();
        navigate("/")
    }

useEffect(()=>{
    getAdmin()
    getAllRest()
},[deleteAction()])
  return (
    <div>
         <div className="flex h-screen w-full bg-gray-100">
         <button
        className="md:hidden fixed top-4 left-4 bg-gray-200 text-white p-2 rounded z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-bars text-black"></i>
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 space-y-6 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <nav className="space-y-4">
          <a href="#" className="hover:bg-red-500 hover:text-black block p-2 bg-gray-700 rounded">
            <i className="fa-solid fa-house-chimney-user"></i>&nbsp; Dashboard
          </a>
          <a href="#" className="hover:bg-red-500 hover:text-black block p-2 bg-gray-700 rounded">
            <i className="fa-solid fa-utensils"></i>&nbsp; Restaurants
          </a>
          <a href="#" className="hover:bg-red-500 hover:text-black block p-2 bg-gray-700 rounded">
            <i className="fa-solid fa-gifts"></i>&nbsp; Orders
          </a>
          <a href="#" className="hover:bg-red-500 hover:text-black block p-2 bg-gray-700 rounded">
            <i className="fa-solid fa-users"></i>&nbsp; Customers
          </a>
          <a href="#" className="hover:bg-red-500 hover:text-black block p-2 bg-gray-700 rounded">
            <i className="fa-solid fa-gear"></i>&nbsp; Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6  overflow-auto">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Welcome , <span className='text-blue-400'>{name.firstName} {name.lastName} 👋👋</span></h2>
          <div className="flex items-center space-x-4">
           
            <button className="bg-red-500 text-white mb-2 px-4 py-2 rounded" onClick={()=>{logoutAction()}}>Logout</button>
          </div>
        </header>

        {/* Chart */}
        <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-6 mb-8">
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

        {/* Stats Section */}
        <div className="bg-white p-6 rounded-xl shadow mt-5 mb-8">
          <h3 className="text-gray-800 font-bold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Order ID</th>
                  <th className="p-2">Customer</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">#12345</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">2023-10-01</td>
                  <td className="p-2">$50.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">#12346</td>
                  <td className="p-2">Jane Smith</td>
                  <td className="p-2">2023-10-02</td>
                  <td className="p-2">$75.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">#12347</td>
                  <td className="p-2">Alice Johnson</td>
                  <td className="p-2">2023-10-03</td>
                  <td className="p-2">$100.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 text-sm bg-red-100 text-red-800 rounded-full">
                      Cancelled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* system */}
        <div className="grid grid-cols-1 mb-6 lg:grid-cols-2 gap-6">
          {/* User Activity */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-800 font-bold mb-4">User Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <p className="text-gray-800">John Doe logged in</p>
                  <p className="text-gray-500 text-sm">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-shopping-cart text-white"></i>
                </div>
                <div>
                  <p className="text-gray-800">Jane Smith placed an order</p>
                  <p className="text-gray-500 text-sm">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-comment text-white"></i>
                </div>
                <div>
                  <p className="text-gray-800">Alice Johnson left a review</p>
                  <p className="text-gray-500 text-sm">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white p-6  rounded-xl shadow-lg">
            <h3 className="text-gray-800 font-bold mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">Server Uptime</p>
                <span className="text-center font-bold px-2 py-1 text-sm bg-green-100 w-1/5 text-green-800 rounded-full">
                  99.9%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-800">Database Status</p>
                <span className="text-center font-bold px-2 py-1 text-sm bg-green-100 w-1/5 text-green-800 rounded-full">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-800">API Response Time</p>
                <span className="text-center  font-bold px-2 py-1 text-sm bg-green-100 w-1/5 text-green-800 rounded-full">
                  120ms
                </span>
              </div>
            </div>
          </div>
          </div>
        

        {/* Restaurant List */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Restaurant List</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Foodtype</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                rest.map((rest)=>{
                    return (
                        <tr key='' className="border-b">
                        <td className="p-2">{rest.name}</td>
                        <td className="p-2 text-green-600">{rest.status === "Active" ? "Open" : "Close"}</td>
                        <td className="p-2 text-green-600">{rest.foodtype}</td>
                        <td className="p-1">
                          <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                          <button className="bg-red-500 text-white px-2 py-1 ml-1 rounded" onClick={()=>{deleteAction(rest._id)}}>Delete</button>
                        </td>
                      </tr>
                    )
                })
              }
              
            
            </tbody>
          </table>
        </section>
      </main>
    </div>
    </div>
  )
}
