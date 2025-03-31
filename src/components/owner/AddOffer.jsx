import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "../../assets/addoff.css"
import { ToastContainer, Bounce, toast } from 'react-toastify';
import axios from 'axios';
import {Loader} from "../common/Loader"
import { Link, useNavigate } from 'react-router-dom';
import { OnlySide } from './OnlySide';

export const AddOffer = () => {
  const navigator = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading , setIsLoading] = useState(false);

  const submitHandler = async (data) => {
    console.log(data);
    setIsLoading(true);
  


    try {
      
      const formdata = new FormData();
      formdata.append("offerTitle", data.offerTitle);
      formdata.append("image", data.image[0]);
      formdata.append("offerDesc", data.offerDesc);
      formdata.append("offerStatus", data.offerStatus);
      formdata.append("offerStart", data.offerStart);
      formdata.append("offerEnd", data.offerEnd);
      formdata.append("foodType", data.foodType);
      formdata.append("userId", localStorage.getItem("id"));




      const userId = localStorage.getItem("id");
      data.userId = userId;
      const res = await axios.post("/addoffer", formdata);
      console.log(res.data)
     
      if (res.status === 201) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      setTimeout(() => {
        // navigator("/rest")
        setIsLoading(false);
        navigator("/viewoffer")
      }, 1400)
    }
    catch (err) {
      setIsLoading(false);
      toast.error("Something went wrong!!", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }


  const allValidators = {
    offername: {
      required: {
        value: true,
        message: "*Offer title is required"
      },
      minLength: {
        value: 6,
        message: "Invalid name"
      }
    },

    offerdesc: {
      required: {
        value: true,
        message: "*Desc Is required"
      }
    },
    foodtype: {
      required: {
        value: true,
        message: "*Food type is required"
      }
    },

    offerstart: {
      required: {
        value: true,
        message: "*Offer start date is required"
      }
    },

    offerend: {
      required: {
        value: true,
        message: "*Offer end date is required"
      }
    },
    offerStatus: {
      required: {
        value: true,
        message: "*Please fill this field.."
      }
    },
    offerImage: {
      required: {
        value: true,
        message: '*Image is required..'
      }
    }

  }

  return (
    <>


      {
        isLoading == true ? <Loader/> : 
      
<div className='flex'>
  <OnlySide/>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />


      <div
      className="min-h-screen w-full md:w-full sm:w-full flex items-center justify-center p-2 bg-cover bg-center"
     
    >
      {/* Add Offer Form Container */}
      <div className="bg-white transparant bg-opacity-5 min-340:w-4/5 max-400:w-4/5 md:w-4/5 min-610:w-4/5 backdrop-blur-md rounded-lg shadow-2xl p-8 w-4/5">
        {/* Logo and Title */}
        <div className="text-center mb-2">
          <img
            src="/src/assets/images/golu.jpg" // Replace with your logo URL
            alt="PocketBuddy Logo"
            className="w-20 h-20 mx-auto mb-4 rounded-lg"
          />
          <h1 className="text-3xl font-bold text-gray-800">Add New Offer</h1>
          <p className="text-gray-600">Fill in the details to create a new offer</p>
        </div>

        {/* Add Offer Form */}
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          {/* Offer Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm  font-semibold text-gray-700">
              Offer Title
            </label>
            <div className="mt-1 relative">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter offer title"
                className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                {...register("offerTitle",allValidators.offername)}
              />
              <i className="fas fa-tag absolute right-3 top-3 text-gray-400"></i>
              <span style={{ color: "red" }}>{errors.offerTitle ? errors.offerTitle.message : ""}</span>
            </div>
           
          </div>

          {/* Offer Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <div className="mt-1 relative">
              <textarea
                id="description"
                name="description"
                placeholder="Enter offer description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                rows="2"
               {...register("offerDesc",allValidators.offerdesc)}  
              ></textarea>
              <i className="fas fa-align-left absolute right-3 top-3 text-gray-400"></i>
              <span style={{ color: "red" }}>{errors.offerDesc ? errors.offerDesc.message :""}</span>
            </div>
          </div>

          {/* Discount Percentage Field */}
          <div>
            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700">
              Status
            </label>
            <div className="mt-1 relative">
             <select name="" className='w-full px-4 py-2 border border-gray-300 rounded-lg 
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none' {...register("offerStatus",allValidators.offerStatus)}>
              <option selected disabled></option>
              <option value="Available">Available</option>
              <option value="Unavailable">Currently Unavailable</option>
             </select>
          <span style={{color:"red"}}>{errors.offerStatus ? errors.offerStatus.message : ""}</span>
            </div>
          </div>

          {/* Offer Image Upload */}
          <div className='flex-wrap gap-4 justify-between'>
          <div>
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
              Offer Start Date : 
            </label>
            <div className="mt-1 relative">
              <input
                type="Date"
                id="image"
                name="image"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                accept="image/*"
                {...register("offerStart",allValidators.offerstart)}
              />
              <span style={{color:"red"}}>{errors.offerStart ? errors.offerStart.message : ""}</span>
            </div>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
              Offer End Date :
            </label>
            <div className="mt-1 relative">
              <input
                type="Date"
                id="image"
                name="image"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                
               {...register("offerEnd",allValidators.offerend)}
              />
           <span style={{color:"red"}}>{errors.offerEnd ? errors.offerEnd.message : ""}</span>
            </div>
          </div>
          </div>

              {/* Discount Percentage Field */}
          <div>
            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700">
              Food Type :
            </label>
            <div className="mt-1 relative">
             <select {...register("foodType",allValidators.foodtype)} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none' >
              <option selected disabled></option>
              <option value="AvaiSpecial Kathiyavadi">Special Khathiyavadi</option>
              <option value="Italian">Italian</option>
              <option value="Gujarati Thali">Gujarati Thali</option>
              <option value="Punjabi Tadka">Punjabi Tadka</option>
              <option value="Mexican Masala">Mexican Masala</option>
              <option value="Rajashthani Special">Rajashthani Special</option>
              <option value="Chienese Food">Chienese Food</option>
              <option value="Special South Indian">Special South Indian</option>
             </select>
      
            </div>
          </div>
          <span style={{color:"red"}}>{errors.foodType ? errors.foodType.message : ""}</span>
          <div>

            <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
              Offer Image :
            </label>
            <div className="mt-1 relative">
              <input
                type="file"
                
                name="image"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                
               {...register("image",allValidators.offerImage)}
              />
               <i className="fas fa-image absolute right-3 top-3 text-gray-400"></i>
           <span style={{color:"red"}}>{errors.offerImage ? errors.offerImage.message : ""}</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex'>
            <button
              type="submit"
              className="w-3/1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Add Offer
            </button>

            <Link to={'/rest'}>
            <button className='w-3/1 bg-yellow-500 text-black py-2 px-4 ml-3 rounded-lg hover:bg-orange-400 transition-colors duration-300"
            >'>Back Home</button>
            </Link>

          </div>
        </form>
      </div>
    </div>
      
      
      </div>

        }
  
    </>
  )
}
