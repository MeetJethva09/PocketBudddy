import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import "../../assets/uprofile.css"

export const UserProfile = () => {

    const [user, setuser] = useState({})

    const getUserData = async () =>{
      const res = await axios.get("/userid/" + localStorage.getItem("id"));
      setuser(res.data.data);
    }

useEffect(()=>{
  getUserData();
},[])


  return (
    <div>
 <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
  <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm overflow-hidden">
    {/* Header */}
    <div className="px-6 py-5 border-b border-gray-100 flex justify-around items-center">
      <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
          <div className="">

            <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-black ml-3 text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors">
            Back to Home
            </button>

          </div>
    </div>

    {/* Profile Content */}
    <div className="p-6 flex flex-col md:flex-row gap-8">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
         <img src="/src/assets/images/user.png" alt="" className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Details */}
      <div className="flex-grow space-y-5">
        {/* Status */}
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            Active
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
            Inactive
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
            Pending
          </span>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <div className="px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {user.firstName}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <div className="px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              {user.lastName}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
            {user.email}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <div className="px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
              +91 {user.contact}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>   







    </div>
  )
}
