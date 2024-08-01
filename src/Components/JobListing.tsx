"use client"
import React, { Component } from 'react';

interface JobListingProps {
  company: string;
  logo: string;
  title: string;
  salary: string;
  type: string;
  category: string;
  location: string;
  postedTime: string;
  tags: string[];
}

class JobListing extends Component<JobListingProps> {
  render() {
    const { company, logo, title, salary, type, category, location, postedTime, tags } = this.props;

    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <div className="flex items-center mb-4">
          {/* <img src={logo} alt={company} className="w-12 h-12 mr-4" /> */}
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">
              {salary} • {type} • {category}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600">{location} • {postedTime}</div>
          <div className="flex space-x-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default JobListing;