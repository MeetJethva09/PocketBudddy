import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
export const ResetPass = () => {

    const {register , handleSubmit} = useForm({});

    const submitHandler = (data) =>{
        console.log(data)
    }

  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
                  <h1 className="text-2xl font-bold text-white">Reset Your Password</h1>
                  <p className="text-purple-100 mt-2">
                   Enter your new Password..
                  </p>
                </div>
        
                {/* Form */}
                <div className="p-8">
               
                    <div className="text-center">
                     
                    
                    </div>
                  
                    <form  className="space-y-6" onSubmit={handleSubmit(submitHandler)} >
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          New Password
                        </label>
                        <div className="mt-1 relative">
                          <input
                          
                            type="password"
                            autoComplete="email"
                           {...register("password")}
                            className={`block w-full px-4 py-3 rounded-lg shadow-sm border`}
                            required
                          />
                            
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirm Password
                        </label>
                        <div className="mt-1 relative">
                          <input
                           
                            type="password"
                            autoComplete="email"
                           {...register("newpassword")}
                            className={`block w-full px-4 py-3 rounded-lg shadow-sm border`}
                          />
                          
                        </div>
                      </div>
        
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                        >
                          Reset
                        </button>
                      </div>
        
                     
                    </form>
                  
                </div>
              </div>
            </div>
    </div>
  )
}
