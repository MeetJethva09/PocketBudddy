import { CheckCircle, ChevronLeft, Clock, MapPin, Share2, Ticket } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate , useParams} from 'react-router-dom';
import { Footer } from '../common/Footer';
import axios from 'axios';
import shortid from 'shortid';


export const ClaimedOffers = () => {

    const navigate = useNavigate();
    const offerid = useParams().offerid;
    const [offer , setOffer] = useState({});
    const getClaimedOfferByOfferId = async ()=>{
        const res = await axios.get("/getofferbyofferid/" + offerid);
        setOffer(res.data.data)
        console.log(res.data.data)
    }


useEffect(()=>{
    getClaimedOfferByOfferId()
},[])


    // Mock data - replace with your actual data
    

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header - Consistent with UserViewOffer */}
            <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <button 
                            onClick={() => navigate(-1)}
                            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                            <ChevronLeft className="h-5 w-5 mr-1" />
                            Back
                        </button>
                        
                        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Your Claimed Offer
                        </h1>
                        
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                            <Ticket className="h-5 w-5 text-indigo-600" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto">
                    {/* Success Confirmation */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                        <div className="p-6 text-center">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mb-4">
                                <CheckCircle className="h-8 w-8 text-emerald-600" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Offer Claimed!</h2>
                            <p className="text-gray-600 mb-4">
                                Your <span className="font-semibold">{offer.offerTitle}</span> has been successfully saved to your account.
                            </p>
                        </div>
                    </div>

                    {/* Offer Card */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg mb-6">
                        <div className="relative">
                            <img 
                                src={offer.offerImage} 
                                alt="Offer" 
                                className="w-full h-48 object-cover" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h2 className="text-xl font-bold text-white">{offer.offerTitle}</h2>
                                <p className="text-sm text-green-200">{offer.restaurant?.name}</p>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                            <i class="fa-solid fa-bowl-food"></i>
                                <span>{offer.location} • {offer.foodType}</span>
                            </div>
                            
                            <p className="text-gray-600 mb-6">{offer.offerDesc}</p>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Claim Code:</span>
                                    <span className="font-mono font-bold text-indigo-600">{shortid()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Valid Until:</span>
                                    <span className="font-medium text-gray-700">{offer.offerEnd}</span>
                                </div>
                            </div>
                            
                            {/* QR Code Placeholder */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-6 flex flex-col items-center">
                                <div className="w-40 h-40 bg-white border-2 border-dashed border-gray-300 rounded mb-3 flex items-center justify-center">
                                  
                                    <img src="/src/assets/images/qr.jpg" className='object-cover w-full h-full' alt="" />
                                </div>
                                <p className="text-xs text-gray-500 text-center">
                                    Show this QR code at the restaurant to redeem your offer
                                </p>
                            </div>
                            
                            {/* Terms */}
                            <div className="text-xs text-gray-500 mb-6">
                                <h4 className="font-semibold mb-1">Terms & Conditions:</h4>
                                <p>{offer.terms}</p>
                            </div>
                            
                            {/* Action Buttons */}
                            <Link to={`/ratingoffer/${offer._id}`}>
                            <div className="flex space-x-3">
                                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                                    Review&nbsp;<i className='fa-solid fa-star' style={{color:"orange"}}></i>
                                </button>
                                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
                                    Save to Wallet
                                </button>
                            </div>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Additional Help */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                        <h3 className="font-medium text-gray-800 mb-3">Need help with this offer?</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            If you have any issues redeeming this offer, please contact the restaurant directly or reach out to our support team.
                        </p>
                        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">    
                            Contact Support
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}