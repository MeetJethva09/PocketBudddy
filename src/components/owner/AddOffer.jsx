
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, Bounce, toast } from 'react-toastify';
import axios from 'axios';
import { Loader } from "../common/Loader"
import { Link, useNavigate } from 'react-router-dom';
import { OnlySide } from './OnlySide';

export const AddOffer = () => {
  const navigator = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [rests , setRests] = useState([]);

  const submitHandler = async (data) => {
    console.log(data);
    setIsLoading(true);


    try {
      const formdata = new FormData();
      formdata.append("offerTitle", data.offerTitle);
      formdata.append("image", data.image[0]);
      formdata.append("offerDesc", data.offerDesc);
      formdata.append("offerStatus", data.offerStatus);
      formdata.append("restaurant", data.restaurant);
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

  const getRest = async () =>{
    const res = await axios.get("/rest/getrestbyid/" + localStorage.getItem("id"));
    setRests(res.data.data)
  }

  
useEffect(()=>{
  getRest()
},[])

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
    offerRest: {
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
      {isLoading ? <Loader /> : (
        <div className='flex min-h-screen bg-gray-100'>
          {/* Fixed Sidebar */}
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="w-64 h-screen fixed overflow-hidden bg-white border-r border-gray-200">
              <OnlySide />
            </div>
          </div>

          {/* Main Content - Adjusted for fixed sidebar */}
          <div className="flex-1 md:ml-64">
            <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-4xl">
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

                {/* Form Container */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Form Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                    <h1 className="text-2xl font-bold">Create New Offer</h1>
                    <p className="opacity-90">Fill in the details to add a new restaurant offer</p>
                  </div>

                  {/* Form Content */}
                  <div className="p-6">
                    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Offer Title */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Offer Title *</label>
                          <input
                            type="text"
                            placeholder="Summer Special Discount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            {...register("offerTitle", allValidators.offername)}
                          />
                          {errors.offerTitle && (
                            <p className="mt-1 text-sm text-red-600">{errors.offerTitle.message}</p>
                          )}
                        </div>

                        {/* Food Type */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Food Type *</label>
                          <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("foodType", allValidators.foodtype)}
                          >
                            <option value="" disabled selected>Select food type</option>
                            <option value="Special Kathiyavadi">Special Khathiyavadi</option>
                            <option value="Italian">Italian</option>
                            <option value="Gujarati Thali">Gujarati Thali</option>
                            <option value="Punjabi Tadka">Punjabi Tadka</option>
                            <option value="Mexican Masala">Mexican Masala</option>
                            <option value="Rajashthani Special">Rajashthani Special</option>
                            <option value="Chienese Food">Chienese Food</option>
                            <option value="Special South Indian">Special South Indian</option>
                          </select>
                          {errors.foodType && (
                            <p className="mt-1 text-sm text-red-600">{errors.foodType.message}</p>
                          )}
                        </div>

                        {/* Offer Status */}
                        <div className="flex flex-col gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                          <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("offerStatus", allValidators.offerStatus)}
                          >
                            <option value="" disabled selected>Select status</option>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Currently Unavailable</option>
                          </select>
                          {errors.offerStatus && (
                            <p className="mt-1 text-sm text-red-600">{errors.offerStatus.message}</p>
                          )}
                        </div>

                        {/* Restaurant */}

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant *</label>
                          <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("restaurant", allValidators.offerStatus)}
                          >
                            <option value="" disabled selected>Select Restaurant</option>
                             {
                              rests.length <= 0 ? "" :
                              rests.map((rest)=>{
                                return <option value={rest._id}>{rest.name}</option>
                              })
                             }
                          </select>
                          {errors.offerRest && (
                            <p className="mt-1 text-sm text-red-600">{errors.offerRest.message}</p>
                          )}
                        </div>
                        </div>

                        {/* Offer Image */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Offer Image *</label>
                          <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col w-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                              <div className="flex flex-col items-center justify-center pt-2 pb-2 px-4">
                                <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">Upload an image</p>
                              </div>
                              <input
                                type="file"
                                className="hidden"
                                {...register("image", allValidators.offerImage)}
                              />
                            </label>
                          </div>
                          {errors.image && (
                            <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                          )}
                        </div>

                        {/* Offer Start Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("offerStart", allValidators.offerstart)}
                          />
                          {errors.offerStart && (
                            <p className="mt-1 text-sm text-red-600">{errors.offerStart.message}</p>
                          )}
                        </div>

                        {/* Offer End Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("offerEnd", allValidators.offerend)}
                          />
                          {errors.offerEnd && (
                            <p className="mt-1 text-sm text-red-600">{errors.offerEnd.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Offer Description */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                        <textarea
                          rows="3"
                          placeholder="Detailed description of the offer..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          {...register("offerDesc", allValidators.offerdesc)}
                        ></textarea>
                        {errors.offerDesc && (
                          <p className="mt-1 text-sm text-red-600">{errors.offerDesc.message}</p>
                        )}
                      </div>

                      {/* Form Actions */}
                      <div className="flex justify-end space-x-3 pt-1 border-t border-gray-200">
                        <Link to="/rest">
                          <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Cancel
                          </button>
                        </Link>
                        <button
                          type="submit"
                          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-colors shadow-md"
                        >
                          Create Offer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}