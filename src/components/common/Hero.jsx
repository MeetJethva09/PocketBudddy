// import React from 'react'
import { useState } from 'react'
import "../../assets/nav.css"
import { X, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-sans">
            {/* Modern Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            PocketBuddy
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                Home
                            </a>
                            <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                Offers
                            </a>
                            <a href="#rests" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                              Restaurants
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                                Contact
                            </a>
                        </div>
                        
                        {/* Sign Up Button */}
                        <div className="hidden md:block">
                            <Link to="/signup">
                                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                href="/" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            >
                                Home
                            </Link>
                            <a 
                                href="#offers" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            >
                                Offers
                            </a>
                            <a 
                                href="#rests" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            >
                                Restaurants
                            </a>
                            <a 
                                href="#contact" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            >
                                Contact
                            </a>
                            <div className="px-3 py-2">
                                <Link to="/signup">
                                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium">
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-50 to-purple-50 text-center py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Discover Amazing <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Food Deals</span> Near You
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Find the best restaurant offers and discounts in your area with PocketBuddy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search restaurants..."
                            className="flex-grow px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5">
                            Search
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Featured Offers Section */}
            <section className="py-16 bg-white" id='offers'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Offers</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Exclusive deals from top restaurants in your area
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Offer Card 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
                                <span className="text-6xl">🍔</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">50% Off Burgers</h3>
                                <p className="text-gray-600 mb-4">Valid until June 30, 2025</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-indigo-600">Burger King</span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                                        Claim Offer
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Offer Card 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-r from-red-100 to-pink-100 flex items-center justify-center">
                                <span className="text-6xl">🍕</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Buy 1 Get 1 Pizza</h3>
                                <p className="text-gray-600 mb-4">Valid until July 15, 2025</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-indigo-600">Pizza Hut</span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                                        Claim Offer
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Offer Card 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-r from-green-100 to-teal-100 flex items-center justify-center">
                                <span className="text-6xl">🍰</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Dessert</h3>
                                <p className="text-gray-600 mb-4">With any meal purchase</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-indigo-600">Sweet Treats</span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                                        Claim Offer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Favorite Meal?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of food lovers discovering amazing deals every day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

        
            <section className="py-16 bg-gray-50" id='rests'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Restaurants</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 
                            <div key='' className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img src="/src/assets/images/bar.webp" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30">
                                      
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800`}>
                                         OPEN
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">The Blue Bird🍴</h3>
                                            <p className="text-gray-600 mb-3">Italian • $$$ • 4.1⭐ (120)</p>
                                        </div>
                                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                                            FREE DELIVERY
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mt-4">
                                        <span className="mr-4">📍 1.10 km away</span>
                                        <span>⏰ 11AM - 10PM</span>
                                    </div>
                                    <Link to={'/signin'}>
                                    <button className="w-full mt-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">
                                        View 
                                    </button>
                                    </Link>
                                </div>
                            </div>


                            <div key='' className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img src="/src/assets/images/about.jpg" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30">
                                      
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800'}`}>
                                         CLOSED
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">Dinner Bell🍽️</h3>
                                            <p className="text-gray-600 mb-3">Chienese • $$$ • 4.0⭐ (50)</p>
                                        </div>
                                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                                            SPECIAL OFFERS
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mt-4">
                                        <span className="mr-4">📍 1.10 km away</span>
                                        <span>⏰ 11AM - 10PM</span>
                                    </div>
                                    <Link to={'/signin'}>
                                    <button className="w-full mt-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">
                                        View 
                                    </button>
                                    </Link>
                                </div>
                            </div>


                            <div key='' className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img src="/src/assets/images/about2.jpg" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30">
                                      
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800`}>
                                         CLOSING SOON
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">Ren Basera😋</h3>
                                            <p className="text-gray-600 mb-3">Punjabi • $$$ • 4.5⭐ (125)</p>
                                        </div>
                                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                                            15% OFF
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mt-4">
                                        <span className="mr-4">📍 1.10 km away</span>
                                        <span>⏰ 11AM - 10PM</span>
                                    </div>
                                    <Link to={'/signin'}>
                                    <button className="w-full mt-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">
                                        View 
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </section>

                {/* Contact Section */}
<section className="py-16 bg-white" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you!
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="What's this about?"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                                <p className="text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-500">Email</h4>
                                <p className="text-lg font-medium text-gray-900">hello@pocketbuddy.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-500">Address</h4>
                                <p className="text-lg font-medium text-gray-900">123 Food Street, San Francisco, CA 94107</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Social Media */}
                <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
                            <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
                            <svg className="h-6 w-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
                            <svg className="h-6 w-6 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition">
                            <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




            {/* Footer */}
            <Footer />
        </div>
    )
}