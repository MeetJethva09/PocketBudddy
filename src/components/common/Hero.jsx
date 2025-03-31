import React from 'react'
import { useState } from 'react'

import "../../assets/nav.css"
import { X , Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-2xl font-bold text-indigo-600">PocketBuddy</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Offers</a>
                        <Link to="about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
                        <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
                    </div>
                    <div className="btns">
                      <Link to={'/signup'}>
                      <button className='btn'>Sign up</button>
                      </Link>
                    
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Offers</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Restaurants</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
                </div>
            )}
        </nav>

    {/* Main content... */}


    <section className="text-white text-center py-20 px-6" id='sec1'>
        <h2 className="text-4xl font-bold mb-4">Find the Best Food Deals in Town!</h2>
        <p className="text-lg">Explore amazing restaurant offers near you with Pocket Buddy.</p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search Restaurant..."
            className="p-2 rounded-md border border-gray-300 text-gray-800"
          />
          <button className="ml-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-500">
            Search
          </button>
        </div>
      </section>

      {/* Featured Offers Section */}
      <section className="container mx-auto py-10">
        <h3 className="text-2xl font-bold text-center mb-6">🔥 Explore Now !!</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Offer Card 1 */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h4 className="text-lg font-bold">50% Off on Burgers 🍔</h4>
            <p className="text-gray-600">Valid until: 30th June 2025</p>
            <p className="text-gray-500 mt-2">Dine-in only</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Claim Offer
            </button>
          </div>

          {/* Offer Card 2 */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h4 className="text-lg font-bold">Buy 1 Get 1 Free Pizza 🍕</h4>
            <p className="text-gray-600">Valid until: 15th July 2025</p>
            <p className="text-gray-500 mt-2">Available for takeaway only</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Claim Offer
            </button>
          </div>

          {/* Offer Card 3 */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h4 className="text-lg font-bold">Free Dessert with Every Meal 🍰</h4>
            <p className="text-gray-600">Valid until: 10th August 2025</p>
            <p className="text-gray-500 mt-2">Dine-in and takeaway</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Claim Offer
            </button>
          </div>
        </div>
      </section>




      <div className="min-h-screen flex flex-col items-center justify-center p-6">
  
      <div className="  max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Discover Amazing Offers with PocketBuddy
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore exclusive discounts and deals from your favorite restaurants and stores. Save more with PocketBuddy!
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300">
          Get Started
        </button>
      </div>

      <div className=" w-full flex flex-wrap justify-around gap-6 p-6">
 
              <div className="relative w-full max-w-sm mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
              {/* Background Image */}
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/src/assets/images/herofood.webp')",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>

              {/* Text Content Above Image */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
                <h3 className="text-xl text-white font-bold">Delicious Deals on Foods</h3>
                <p className="text-sm mt-2">Find the best restaurant offers near you!</p>

                {/* Button */}
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
                  Explore Now
                </button>
              </div>
            </div>
        
            <div className="relative w-full max-w-sm mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
              
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/src/assets/images/bar.webp')",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>

              {/* Text Content Above Image */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
                <h3 className="text-xl text-white font-bold">Restaurant Discounts</h3>
                <p className="text-sm mt-2">Find the best restaurant offers near you!</p>

                {/* Button */}
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-sm mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
              
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/src/assets/images/deal.webp')",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>

              {/* Text Content Above Image */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center px-4">
                <h3 className="text-xl text-white font-bold">Delicious Deals</h3>
                <p className="text-sm mt-2">Find the best restaurant offers near you!</p>

                {/* Button */}
                <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
                  Explore Now
                </button>
              </div>
            </div>
   
      </div>
      </div>

    

{/* Book table form here... */}

<div className="min-h-screen flex items-center justify-start p-6">
      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-full">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/src/assets/images/about.jpg" // Replace with your image URL
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-8 m-3 p-10">
          <h2 className="text-3xl text-green-300 font-bold text-gray-800 mb-6">Book Table Online</h2>
          <form  className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
             
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"

                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
            
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Date and Time Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Number of Guests Field */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                placeholder="Enter number of guests"
                
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            {/* Special Requests Field */}
            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                placeholder="Any special requests?"
              
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

{/* restaurant card... */}






{/* about us page */}


<div className="">
      {/* Hero Section */}
      <div className="relative h-80 mt-5">
        <img
          src="/src/assets/images/about2.jpg"
          alt="Restaurant Interior"
          className="w-full h-full object-cover mb-3"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/src/assets/images/bar.webp"
              alt="Our Chef"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Welcome to <span className="font-semibold text-yellow-500">PocketBuddy</span>, where passion meets flavor. Our journey began with a love for exquisite cuisine and a desire to bring people together through food.
            </p>
            <p className="mt-4 text-gray-600">
              Every dish is crafted with the finest ingredients, blending traditional and modern flavors to create a unique dining experience. From sizzling steaks to fresh seafood, we take pride in delivering top-quality meals.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you're here for a romantic dinner or a family gathering, our cozy ambiance and exceptional service make every visit memorable.
            </p>

            {/* Call-to-Action Button */}
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>
    </div>

{/* Contact us */}

<div className="min-h-screen bg-gradient-to-r from-grey-200 to-grey-400 flex items-center justify-center p-6">
      {/* Contact Us Container */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl">
        {/* Map Section */}
        <div className="lg:w-1/2 relative">
          {/* Google Map Embed */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.869143874679!2d77.20990431508142!3d28.57508298244083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9db4d07%3A0x5a9b725e7b7a1a1e!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1633012345678!5m2!1sen!2sus"
            className="w-full h-96 lg:h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 p-8 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-200 mb-8">
            Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none placeholder-gray-300"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none placeholder-gray-300"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none placeholder-gray-300"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

{/* footer */}

<Footer/>


    </div>
            
  )
}
