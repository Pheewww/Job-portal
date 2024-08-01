"use client"
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="flex items-center">
          <span className="text-2xl font-bold">✦ Remote Jobs</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Premium</span>
            <div className="w-12 h-6 bg-gray-200 rounded-full p-1 duration-300 ease-in-out">
              <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></div>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Post a job
          </button>
        </div>
      </header>
    );
  }
}

export default Header;