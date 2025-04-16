
import {React , useEffect, useState} from 'react'
import { OnlySide } from './OnlySide'
import { ToastContainer, Slide, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const OwnerRest = () => {
  const navigate = useNavigate();
  const {register , handleSubmit , formState: { errors }} = useForm({});
  const [states , setStates] = useState([]);
  const [cities , setCities] = useState([]);
  const [areas , setAreas] = useState([]);

  const submitHandler = async (data) =>{
      try{
          const oid = localStorage.getItem("id");
          data.ownerId = oid;
          const res = await axios.post("/rest/addrest" , data);
            if(res.status == 201)
            {
                toast.success(res.data.message, {
                          position: "top-right",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Slide,
                        });
                        setTimeout(()=>{
                              navigate("/rest")
                        },1500)
            }
            else{
                  toast.error('Something Went Wrong!!', {
                            position: "top-right",
                            autoClose: 800,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Slide,
                          });
            }
      }
      catch(err)
      {
          alert("ERROR")
      }
     
  }

  const getAllStates = async ()=>{
      const allStates = await axios.get("/state/");
      setStates(allStates.data.data);
      
  }

  const getCityBySid = async (id) =>{
      const cityBySid = await axios.get("/city/citybystateid/" + id);
      setCities(cityBySid.data.data);
  }

  const getAreaByCityId = async (id) =>{
    const areaByCid = await axios.get("/area/areabycityid/" + id);
    setAreas(areaByCid.data.data);
  }

  useEffect(()=>{
      getAllStates();
  },[])

  const allValidators = {
    nameValidator : {
      required : {
        value :true,
        message : "Fill the field!!"
      }
    },
    descValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    addressValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    stateValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    cityValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    areaValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    categoryValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    foodtypeValidator : {
      required : {
        value : true,
        message : "Fill the field!!"
      }
    },
    timeValidator : {
      required : {
          value : true,
          message : "Fill the field!!"
      }
    },
    contactValidator : {
      required : {
          value : true,
          message : "Fill the field!!"
      }
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      
      {/* Sidebar - Fixed width */}
      
      <div className="hidden md:block fixed h-full w-64 flex-shrink-0 z-10">
        <OnlySide/>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-64 overflow-auto">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-4xl">
          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold">Add New Restaurant</h1>
              <p className="opacity-90">Fill in the details to register your restaurant</p>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
                {/* Restaurant Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name *</label>
                  <input
                    type="text"
                    placeholder="Enter restaurant name"
                    {...register("name", allValidators.nameValidator)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    placeholder="Enter restaurant description"
                    {...register("desc", allValidators.descValidator)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    rows="3"
                  />
                  {errors.desc && (
                    <p className="mt-1 text-sm text-red-600">{errors.desc.message}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    {...register("category", allValidators.categoryValidator)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  >
                    <option value="" disabled selected>Select Category</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Food Truck">Food Truck</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input
                    type="text"
                    placeholder="Enter restaurant address"
                    {...register("address", allValidators.addressValidator)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                {/* Timing and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Timing *</label>
                    <input
                      type="text"
                      placeholder="Enter timing (e.g. 10AM - 10PM)"
                      {...register("timing", allValidators.timeValidator)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                    {errors.timing && (
                      <p className="mt-1 text-sm text-red-600">{errors.timing.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact *</label>
                    <input
                      type="text"
                      placeholder="Enter contact number"
                      {...register("contact", allValidators.contactValidator)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
                    )}
                  </div>
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <select
                      {...register("state", allValidators.stateValidator)}
                      onChange={(e) => {getCityBySid(e.target.value)}}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    >
                      <option value="" disabled selected>Select State</option>
                      {states?.map((state) => (
                        <option key={state._id} value={state._id}>{state.stateName}</option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <select
                      {...register("city", allValidators.cityValidator)}
                      onChange={(e) => {getAreaByCityId(e.target.value)}}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    >
                      <option value="" disabled selected>Select City</option>
                      {cities?.map((city) => (
                        <option key={city._id} value={city._id}>{city.cityName}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area *</label>
                    <select
                      {...register("area", allValidators.areaValidator)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    >
                      <option value="" disabled selected>Select Area</option>
                      {areas?.map((area) => (
                        <option key={area._id} value={area._id}>{area.areaName}</option>
                      ))}
                    </select>
                    {errors.area && (
                      <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
                    )}
                  </div>
                </div>

                {/* Food Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Food Type *</label>
                  <select
                    {...register("foodtype", allValidators.foodtypeValidator)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  >
                    <option value="" disabled selected>Select Food Type</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Chienese food">Chienese Food</option>
                    <option value="Gujarati food">Gujarati food</option>
                    <option value="Italian food">Italian food</option>
                  </select>
                  {errors.foodtype && (
                    <p className="mt-1 text-sm text-red-600">{errors.foodtype.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-md"
                  >
                    Add Restaurant
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}