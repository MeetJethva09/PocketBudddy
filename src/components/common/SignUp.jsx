
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllRoles = async () => {
        try {
            const res = await axios.get("/data");
            setRoles(res.data.data);
        } catch (error) {
            console.error("Error fetching roles:", error);
        }
    };

    useEffect(() => {
        getAllRoles();
    }, []);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await axios.post("/signup", data);
            
            toast.success('Account created successfully! Redirecting...', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "dark",
                transition: Slide,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => navigate("/signin"), 1600);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed', {
                position: "top-center"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Form Container */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Side - Branding */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white md:w-1/3 flex flex-col justify-center">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
                                <p className="mb-6">Join our community and start your journey with us</p>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                                    <p className="text-sm">Already have an account?</p>
                                    <Link 
                                        to="/signin" 
                                        className="font-medium text-white hover:text-indigo-200"
                                    >
                                        Sign in here
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-8 md:w-2/3">
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-gray-800">Create your account</h1>
                                <p className="text-gray-600 mt-2">Fill in your details below</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input
                                            type="text"
                                            {...register("firstName", { required: "First name is required" })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            placeholder="John"
                                            autoComplete="given-name"
                                        />
                                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            {...register("lastName", { required: "Last name is required" })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            placeholder="Doe"
                                            autoComplete="family-name"
                                        />
                                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                        <select
                                            {...register("gender", { required: "Gender is required" })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                           
                                        </select>
                                        {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
                                    </div>
                                </div>

                                {/* Contact & Account Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Contact & Account</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            {...register("email", { 
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            placeholder="your@email.com"
                                            autoComplete="off"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            {...register("contact", { 
                                                required: "Phone number is required",
                                                minLength: {
                                                    value: 10,
                                                    message: "Phone number must be 10 digits"
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: "Phone number must be 10 digits"
                                                }
                                            })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            placeholder="1234567890"
                                            autoComplete="off"
                                        />
                                        {errors.contact && <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                        <input
                                            type="password"
                                            {...register("password", { 
                                                required: "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message: "Password must be at least 8 characters"
                                                }
                                            })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            placeholder="••••••••"
                                            autoComplete="new-password"
                                        />
                                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                        <select
                                            {...register("role", { required: "Role is required" })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select Role</option>
                                            {roles.map((role) => (
                                                <option key={role._id} value={role._id}>{role.roleName}</option>
                                            ))}
                                        </select>
                                        {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>}
                                    </div>
                                </div>

                                {/* Terms and Submit */}
                                <div className="md:col-span-2">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="terms"
                                                type="checkbox"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-medium text-gray-700">
                                                I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>
                                            </label> <span className='font-medium text-red-600 ml-8'>*Please Wait for while after signup</span>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition font-medium ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    >
                                        {isLoading ? 'Creating Account...' : 'Create Account'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};