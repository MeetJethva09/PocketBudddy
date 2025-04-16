

import React, { useEffect, useState } from 'react'
import { OnlySide } from './OnlySide'
import axios from 'axios'

export const ViewRest = () => {
  const [rest, setRest] = useState([]);
  const getRest = async () => {
    const res = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"));
    setRest(res.data.data);
  };

  useEffect(() => {
    getRest();
  }, []);

  return (
    <div className='flex bg-gray-50 min-h-screen'>
      <OnlySide />
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Restaurants</h1>
        
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rest.map((restItem) => (
              <div 
                key={restItem.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-40 bg-gradient-to-br from-orange-600 to-blue-900 p-4 text-white">
                  <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${restItem.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                    {restItem.status}
                  </span>
                  <h3 className="text-lg text-gray-200 font-bold mt-6">{restItem.name}</h3>
                  <p className="text-sm opacity-90 mt-1 line-clamp-2">{restItem.desc}</p>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                      {restItem.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                      {restItem.foodtype}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {restItem.area.areaName}, {restItem.city.cityName}
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {restItem.timing}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <a 
                      href={`tel:${restItem.contact}`} 
                      className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {restItem.contact}
                    </a>
                    <span className="text-xs text-gray-500">
                      Owner: {restItem.ownerId.firstName[0]}. {restItem.ownerId.lastName}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
            <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <h2 className="text-lg font-medium text-gray-600 mt-4">No restaurants found</h2>
            <p className="text-gray-500 mt-1">Add your first restaurant to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};