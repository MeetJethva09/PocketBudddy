import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ToastContainer, Slide, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    

    // console.log(errors);
    try {
      const res = await axios.post("/login", data);


      // console.log(res.data);

      if (res.status === 200) {

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
        // console.log(res.data);
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.role.roleName);
        setTimeout(() => {
          { if (res.data.data.role.roleName == "REST_OWNER")  navigate('/rest')  
            else if (res.data.data.role.roleName == "USER") navigate('/user')
              else navigate("/admin")
           }
        }, 1200)

      }
    }
    catch (err) {
      console.log(err)
      if (err.status === 401) {
        toast.error('Invalid Credentials..', {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
      else {
        toast.error('User not found , Please Signup!', {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    }
  }

  const allValidators = {
    emailvalidator: {
      required: {
        value: true,
        message: "*Email is required.."
      }
    },
    passwordValidator: {
      required: {
        value: true,
        message: "*Password required.."
      }
    }
  }

  return (
    <>
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

      {/* <div className="container" style={{width : "55%",borderRadius:"10px",boxShadow:"0px 0px 4px black",padding:"35px",marginTop:"3rem"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div class="form-group">

            <h3>Login with your credentials</h3>

            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" {...register("email", allValidators.emailvalidator)} placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small><br />
            <span style={{ color: "red" }}>{errors.email ? errors.email.message : ""}</span>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"  {...register("password", allValidators.passwordValidator)} placeholder="Password" />
            <span style={{ color: "red" }}>{errors.password ? errors.password.message : ""} </span>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
          </div>
          <Link to="/signup" style={{ fontSize: "14px", textDecoration: "none" }}>Don't have Account ? </Link><br />
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="reset" class="btn btn-warning" style={{marginLeft : "10px"}}>Reset</button>
        </form>
      </div> */}


<div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/images/ll.jpg')` }} // Replace with your background image URL
    >
      {/* Login Form Container */}
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
        <Link to={'/'}>
          <img
            src="/src/assets/images/food.webp" // Replace with your logo URL
            alt="PocketBuddy Logo"
            className="w-20 h-20 mx-auto mb-4"
          />
        </Link>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to your PocketBuddy account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                {...register("email",allValidators.emailvalidator)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"

              />
              <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
            </div>
            <span style={{ color: "red" }}>{errors.email ? errors.email.message : ""}</span>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                id="password"
                name="password"
                {...register("password",allValidators.passwordValidator)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            
              />
              <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
              <span style={{ color: "red" }}>{errors.password ? errors.password.message : ""} </span>
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
              <Link to="/forgotpass" className="text-blue-500 hover:text-blue-700">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>




    </>
  )
}
