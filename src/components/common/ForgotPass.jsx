import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';


export const ForgotPass = () => {

    const {register , handleSubmit} = useForm({});
    const submitHandler =async (data) =>{
        const verifyEmail = await axios.post("/forgotpass" , data);
        console.log(verifyEmail.data.message);
    }


  return (
    <div>
         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Reset Your Password</h1>
          <p className="text-purple-100 mt-2">
            Enter your email to receive a reset link
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
       
            <div className="text-center">
             
              <p className="text-gray-600 mb-6">
                We've sent a password reset link 
              </p>
            
            </div>
          
            <form  className="space-y-6" onSubmit={handleSubmit(submitHandler)} >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                        {...register("email")}
                    className={`block w-full px-4 py-3 rounded-lg shadow-sm border`}
                  />
                  
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                >
                  Send Reset Link
                </button>
              </div>

              <div className="text-center text-sm">
                <Link
                  to="/signin"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remember your password? Sign in
                </Link>
              </div>
            </form>
          
        </div>
      </div>
    </div>
    </div>
  )
}
