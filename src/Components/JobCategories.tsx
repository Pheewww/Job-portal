"use client"
import React, { Component } from 'react';

const categories = [
  { name: 'Job Category', items: ['Full-Stack Development', 'Frontend', 'Backend', 'Devops', 'Web3', 'Support'] },
  { name: 'Location', items: ['Pune', 'Bangalore', 'Delhi', 'Mumbai', 'Hyderabad', 'Chennai'] }, 
  // ['North America', 'Europe', 'Asia', 'Africa', 'Australia', 'South America']
  { name: 'Salary', items: ['$10k-$25k', '$25k-$50k', '$50k-$75k', '$75k-$100k', '$100k+', 'Commission'] },
  { name: 'Type', items: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
];

class JobCategories extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 ">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="font-semibold mb-2 ">{category.name}</h3>
            <ul className="space-y-1">
              {category.items.map((item) => (
                <li key={item} className="text-gray-600 hover:text-black cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default JobCategories;