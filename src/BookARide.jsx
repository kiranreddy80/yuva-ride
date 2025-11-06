import React from 'react';

const BookARide = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Book a <span className="text-orange-500">Ride</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Destination</label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <button className="w-full mt-6 bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">
                Book Ride Now
              </button>
            </div>

            {/* Right Side - Info */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 Available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Safe & Reliable</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Affordable Prices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookARide;