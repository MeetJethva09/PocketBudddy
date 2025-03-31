import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className="bg-purple-800 text-white py-3">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              PocketBuddy is your ultimate companion for discovering the best offers and deals from your favorite restaurants and stores.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Main Street, City, Country</li>
              <li className="text-gray-300">+1 234 567 890</li>
              <li className="text-gray-300">info@pocketbuddy.com</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none placeholder-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} PocketBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}
