import axios from 'axios'
import React, { useEffect } from 'react'

export const ViewRestList = () => {
    const getRestId = () =>{
        const oid = localStorage.getItem("id");
        const allRest = axios.get("/rest/getrestbyid/" + oid);
        console.log(allRest.data.data);
    }
useEffect(()=>{
    getRestId()
},[])

  return (
    <div>
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{restaurant.name}</h2>
      <p className="text-sm text-gray-500">Category: {restaurant.category}</p>
      <p className="text-gray-600 mt-2">{restaurant.description}</p>
      <p className="text-sm text-gray-500 mt-2">Timing: {restaurant.timing}</p>
      <p className="text-sm text-gray-500">Address: {restaurant.address}</p>
      <p className="text-sm text-gray-500">Contact: {restaurant.contact}</p>
      <p className="text-sm text-gray-500">Food Type: {restaurant.foodtype}</p>
      <span className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full ${restaurant.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {restaurant.status}
      </span>
    </div>
    </div>
  )
}
