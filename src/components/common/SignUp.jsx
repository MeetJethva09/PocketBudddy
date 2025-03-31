import React, { useEffect } from 'react'
import "../../assets/signupstyle.css"
import { useForm } from 'react-hook-form'
import { UserSidebar } from '../layouts/UserSidebar'
import { ToastContainer , Bounce , toast} from 'react-toastify'
import axios from 'axios'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



export const SignUp = () => {
   

    const navigator = useNavigate();
    const {register , handleSubmit , formState:{errors}} = useForm();
    const [roles , setRoles] = useState([]);


    //fetch allroles from database
    const getAllRole = async () =>{
      const res = await axios.get("/data");
      setRoles(res.data.data);
    }

  useEffect(()=>{
    getAllRole()
  },[])

    const submitHandler =async (data) =>{
      console.log(data);
  
      const res = await axios.post("/signup",data);
  
      console.log(res.data);
   

      toast.success('User created Successfully', {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

        setTimeout(()=>{
          navigator("/signin");
        },900)
   
    }

    
   
      const allValidators = {
        nameValidators : {
          required : {
            value  : true,
            message : "*Name is required.."
          }
        },

        emailValidators : {
          required : {
            value : true,
            message : "*Email is required.."
          }
        },

        passwordValidators : {
          required : {
            value : true,
            message : "*Paasword is required.."
          },
          minLength : {
            value : 8,
            message : "Password length minimum eight required.."
          }
        },
        ageValidators : {
          required : {
            value : true,
            message : "*Age is required.."
          }
        },
     
        roleVlidators : {
          required : {
            value : true,
            message : "*Role is required.."
          }
        },
        genderValidators : {
          required : {
            value : true,
            message : "*Gender is required.."
          }
        },
        contactValidators : {
          required : {
            value : true,
            message : "*Contact is required.."
          },
          minLength : {
            value : 10,
            message : "Please Enter valid contact"
          },
          maxLength : {
            value : 10,
            message : "Please Enter valid contact"
          }
        },

      }

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={800}
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

   

{/* 
<div className="container" style={{width : "55%",borderRadius:"10px",boxShadow:"0px 0px 4px black",padding:"35px",marginTop:"2rem"}}>

  
<form onSubmit={handleSubmit(submitHandler)}>
  <div class="form-group">

    <h3>Register Your Account</h3>

    <div class="form-group">
    <label for="exampleInputPassword1">FirstName : </label>
    <input type="text" class="form-control" id="exampleInputPassword1"  {...register("firstName",allValidators.nameValidators)}  placeholder="First Name"/>
    <span style={{color:"red"}}>{errors.firstName ? errors.firstName.message : "" } </span>
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">lastName : </label>
    <input type="text" class="form-control" id="exampwleInputPassword1"  {...register("lastName",allValidators.nameValidators)}  placeholder="Last Name"/>
    <span style={{color:"red"}}>{errors.lastName ? errors.lastName.message : "" } </span>
  </div><br />


    <label for="exampleInputEmail1">Email address : </label>
    <input type="email" class="form-control" id="exampleInputEmrail1" {...register("email",allValidators.emailValidators)} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small><br />
    <span style={{color:"red"}}>{errors.email ? errors.email.message : ""}</span>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password : </label>
    <input type="password" class="form-control" id="exampleInpqutPassword1"  {...register("password",allValidators.passwordValidators)}  placeholder="Password"/>
    <span style={{color:"red"}}>{errors.password ? errors.password.message : "" } </span>
  </div>

  <div className="form-group">
    <label for="gen">Gender : </label><br />
    <select name="" id="gen" className='form-control' {...register("gender",allValidators.genderValidators) }>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <span style={{color:"red"}}>{errors.gender ? errors.gender.message : ""}</span>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Age : </label>
    <input type="number" class="form-control" id="examwwpleInputPassgword1"  {...register("age",allValidators.ageValidators)}  placeholder="Age"/>
    <span style={{color:"red"}}>{errors.age ? errors.age.message : "" } </span>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Contact : </label>
    <input type="number" class="form-control" id="exampleInputPassddword1"  {...register("contact",allValidators.contactValidators)}  placeholder="Contact"/>
    <span style={{color:"red"}}>{errors.contact ? errors.contact.message : "" } </span>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Role : </label>

    <select id="" className='form-control' onChange={(e)=> getAllRole(e.target.value)} {...register("role",allValidators.roleVlidators)}>
      <option value="" disabled selected>Select Role</option>
        {
             roles.map((role)=>{
                  return (
                    <option value={role._id}>{role.roleName}</option>
                  )
            }) 
        }
    </select>

    <span style={{color:"red"}}>{errors.role ? errors.role.message : "" } </span>
  </div>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <Link to="/signin" style={{fontSize:"14px" , textDecoration:"none"}}>Already have Account</Link><br />

  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="reset" class="btn btn-warning" style={{marginLeft : "10px"}}>Reset</button>
</form>

</div> */}

  <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/images/ll.jpg')` }} // Replace with your background image URL
      >
        {/* Login Form Container */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl mt-5 shadow-2xl p-8 w-screen max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
          <Link to={'/'}>
            <img
              src="/src/assets/images/food.webp" // Replace with your logo URL
              alt="PocketBuddy Logo"
              className="w-10 h-10 mx-auto mb-4"
            />
          </Link>
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-gray-600">Sign up to your PocketBuddy account</p>
          </div>
  
          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
            {/* fnane Field */}
           
            <div>
             
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your FirstName"
                  {...register("firstName",allValidators.nameValidators)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
  
                />
                <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
              </div>
              <span style={{ color: "red" }}>{errors.firstName ? errors.firstName.message : ""}</span>
            </div>
{/* lname */}
            <div>
             
              <div className="mt-1 relative">
                <input
                  type="text"
               
                  placeholder="Enter lastname"
                  {...register("lastName",allValidators.nameValidators)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
  
                />
                <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
              </div>
              <span style={{ color: "red" }}>{errors.lastName ? errors.lastName.message : ""}</span>
            </div>
            
  {/* email */}
  <div>
              <div className="mt-1 relative">
                <input
                  type="email"
               
                  placeholder="Enter Email"
                  {...register("email",allValidators.emailValidators)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
  
                />
                <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
              </div>
              <span style={{ color: "red" }}>{errors.email ? errors.email.message : ""}</span>
            </div>

            {/* Password Field */}
            <div>
             
              <div className="mt-1 relative">
                <input
                 type='password'
                  name="password"
                  {...register("password",allValidators.passwordValidators)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              
                />
                <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
                <span style={{ color: "red" }}>{errors.password ? errors.password.message : ""} </span>
              </div>
            </div>
  {/* gender */}
  <div>
             
             <div className="mt-1 relative">
              <select name="" className='w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none' {...register("gender",allValidators.genderValidators)}>
                <option value="" selected disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
             
               <span style={{ color: "red" }}>{errors.gender ? errors.gender.message : ""} </span>
             </div>
           </div>

           {/* contact */}
           
           <div>
             
             <div className="mt-1 relative">
               <input
               
                type='number'
                 {...register("contact",allValidators.contactValidators)}
                 placeholder="Enter your Contact"
                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
             
               />
              
               <span style={{ color: "red" }}>{errors.contact ? errors.contact.message : ""} </span>
             </div>
           </div>

           {/* Role  */}
           <div>
             
             <div className="mt-1 relative">
              <select name="" className='w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none' {...register("role",allValidators.roleVlidators)}>
                <option value="" selected disabled>Select Role</option>
                {
             roles.map((role)=>{
                  return (
                    <option value={role._id}>{role.roleName}</option>
                  )
            }) 
               }

                
               
              </select>
             
               <span style={{ color: "red" }}>{errors.gender ? errors.gender.message : ""} </span>
             </div>
           </div>
           

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
  
          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signin" className="text-blue-500 hover:text-blue-700">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        </div>

    </>
  )
}
