import React, { useEffect, useState } from 'react'
import { OnlySide } from './OnlySide'
import axios from 'axios'

export const ViewRest =  () => {

  const [rest , setRest] = useState([]);
  const getRest = async () =>{
    const res = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"));
    setRest(res.data.data);
    console.log(res.data.data);
  }

useEffect(()=>{
  getRest()
},[])

  return (
    <div className='flex'>
     <OnlySide/>
      
     <div className="flex ml-7 sm:flex flex-wrap justify-center md:flex flex-wrap justify-center">

     {
      rest.length > 0 ? rest.map((rest)=>{
          return (

            <div className="restaurant-card">
            <div className="card-header">
              <div className='status-badge mb-3'>
               {rest.status === "Active" ? "Open" : "Close" }
              </div>
              <h3 className="restaurant-name text-gray-300">{rest.name}</h3>
              <p className="restaurant-description">{rest.desc}</p>
              <div className="categories">
                
                  <span key='' className="category-tag">{rest.category}</span>
                
              </div>
            </div>
      
            <div className="card-body">
              <div className="info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{rest.area.areaName}, {rest.city.cityName}</span>
              </div>
      
              <div className="info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{rest.timing}</span>
              </div>
      
              <div className="food-types">
             
                  <span key='' className="food-type">{rest.foodtype}</span>
              
              </div>
            </div>
      
            <div className="card-footer">
              <button className="contact-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
               {rest.contact}
              </button>
              <div className="owner-info mt-3">Owner: <span>{rest.ownerId.firstName}&nbsp;{rest.ownerId.lastName}</span></div>
            </div>
      
            <style jsx>{`
              .restaurant-card {
                width: 320px;
                background: white;
                border-radius: 12px;
                height : 335px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                margin: 10px;
                transition: transform 0.2s;
              }
      
              .restaurant-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
              }
              
              .card-header {
                background: linear-gradient(135deg, #800080,rgb(82, 67, 122));
                color: white;
                padding: 16px;
                position: relative;
              }
              
              .status-badge {
                position: absolute;
                top: 12px;
                right: 12px;
                padding: 3px 8px;
                border-radius: 12px;
                font-weight: bold;
                font-size: 12px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              
              .status-badge.open {
                background: #ffe66d;
                color: #292f36;
              }
              
              .status-badge.closed {
                background: #f7fff7;
                color: #ff6b6b;
              }
              
              .restaurant-name {
                font-size: 18px;
                font-weight: 700;
                margin: 8px 0 4px;
                line-height: 1.3;
              }
              
              .restaurant-description {
                font-size: 12px;
                opacity: 0.9;
                margin-bottom: 10px;
                line-height: 1.4;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              
              .category-tag {
                display: inline-block;
                background: rgba(255, 255, 255, 0.2);
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 10px;
                margin-right: 6px;
                margin-bottom: 4px;
              }
              
              .card-body {
                padding: 14px 16px;
                flex-grow: 1;
              }
              
              .info-row {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                font-size: 13px;
                color: #292f36;
              }
              
              .info-row svg {
                margin-right: 8px;
                flex-shrink: 0;
              }
              
              .food-types {
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;
              }
              
              .food-type {
                display: inline-block;
                background: #f7fff7;
                padding: 3px 8px;
                border-radius: 4px;
                margin-right: 6px;
                margin-bottom: 6px;
                font-size: 11px;
                border-left: 2px solid #4ecdc4;
              }
              
              .card-footer {
                background: #f7fff7;
                padding: 10px 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
              }
              
              .contact-btn {
                background: #ff6b6b;
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 4px;
                font-weight: 600;
                font-size: 12px;
                cursor: pointer;
                display: flex;
                align-items: center;
                transition: all 0.2s;
              }
              
              .contact-btn:hover {
                background: #ff5252;
              }
              
              .contact-btn svg {
                margin-right: 6px;
              }
              
              .owner-info {
                font-size: 11px;
                color: #666;
              }
              
              .owner-info span {
                font-weight: 600;
                color: #292f36;
              }
            `}</style>
          </div>
          )
      }) : <h2>Add rest</h2>
     }
     </div>
     
    </div>
  )
}
