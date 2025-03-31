import React, { useEffect, useState } from 'react'
import "../../assets/viewoffercss.css"
import axios from 'axios'
import { OwnerSidebar } from './OwnerSidebar';
import { Outlet } from 'react-router-dom';
import { OnlySide } from './OnlySide';


export const ViewOffers =  () => {

  const [ offers , setOffer] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  const getMyOffers = async () =>{
    const userId = localStorage.getItem("id")
    const res = await axios.get("/getoffers/"+userId);
    console.log(res.data)
    setOffer(res.data.data)
    setIsLoading(false);
  }

  const updateTheOffer = async () =>{
    const getOfferData = await axios.get()
  }
  
useEffect(()=>{
    getMyOffers()
},[])


  return (
   <div className='flex'>
    
     <OnlySide/>
     
      
      <div className="main-container w-full">
{ 
offers.length > 0 ? (
        offers.map((offer) => (
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
            <button className='claim-offer2' onClick={()=>{updateTheOffer()}}>Update</button>
          </div>
        ))
      ) : (
       
        <div className='error'>
        <div >⚠️</div>
        <div ><strong>Warning!</strong> Please add an offer.</div>
        
      </div>

      )}

    </div>
      



    </div>
  )
}
