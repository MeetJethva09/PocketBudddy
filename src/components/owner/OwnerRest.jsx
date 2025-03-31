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

  console.log(errors)

  return (
    <div>
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
            
        <div className='flex'>
        <OnlySide/>
             <div className="min-h-screen w-full bg-gradient-to-r from-purple-50 to-indigo-50 flex items-center justify-center p-6">
      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Restaurant</h1>

        {/* Add Restaurant Form */}
        <form  className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
          {/* Restaurant Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Restaurant Name
            </label>
            <input
              type="text"
              placeholder="Enter restaurant name"
              {...register("name",allValidators.nameValidator)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
              <span style={{color:"red"}}>{errors.name?.message}</span>
          </div>
        

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter restaurant description"
              {...register("desc",allValidators.descValidator)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              rows="3"
              required
            ></textarea>
          </div>
{/* Cata */}

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none' {...register("category",allValidators.categoryValidator)}>
                <option value="" selected disabled>Selct Category</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Cafe">Cafe</option>
                <option value="Food Truck">Food Truck</option>
            </select>
          </div>


          {/* address Field */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter restaurant Address"
              {...register("address",allValidators.addressValidator)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              required
            />
          </div>

          {/* time Field */}
          <div className="flex gap-8">
          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">
              Timing
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              placeholder="Enter Timing"
              {...register("timing",allValidators.timeValidator)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              required
            />
          </div>

          {/* contact */}

          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              placeholder="Enter Contact"
              {...register("contact",allValidators.contactValidator)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              required
            />
          </div> </div>

          <div className="flex gap-10 flex-wrap">

             {/* state */}

          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">
             Select State
            </label>
            <select {...register("state",allValidators.stateValidator)} className='w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none' onChange = {(e)=> {getCityBySid(e.target.value)}} 
             >
                <option value="" selected disabled>Select State</option>
                {
                    states?.map((state)=>{
                      return (
                       <option key={state._id} value={state._id}>{state.stateName}</option>
                      )
                    })
                }
            </select>
          </div>

        {/* City */}

          <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
             Select City
            </label>
            <select {...register("city",allValidators.cityValidator)} onChange = {(e)=>{getAreaByCityId(e.target.value)}} className='w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none'>
                <option value="" selected disabled>Selct City</option>
                {
                  cities?.map((city)=>{
                    return (
                      <option key={city._id} value={city._id}>{city.cityName}</option>
                    )
                  })
                }
                
            </select>
          </div>

{/* Area */}

          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">
              Select Area
            </label>
            <select {...register("area",allValidators.areaValidator)} className='w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none' {...register("area")}>
                <option value="" selected disabled>Selct Area</option>
                {
                  areas?.map((area)=>{
                    return (
                      <option key={area._id} value={area._id}>{area.areaName}</option>
                    )
                  })
                }
              
            </select>
          </div>


          </div>
          {/* Foodtype */}

          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">
              Select Foodtype
            </label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none' {...register("foodtype",allValidators.foodtypeValidator)}>
                <option value="" selected disabled>Selct Foodtype</option>
                <option value="Punjabi"  >Punjabi</option>
                <option value="South Indian"  >South Indian</option>
                <option value="Chienese food"  >Chienese Food</option>
                <option value="Gujarati food"  >Gujarati food</option>
                <option value="Italian food"  >Italian food</option>
              
            </select>
          </div>


          {/* Image Upload Field */}
         

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>

  
    </div>
  )
}
