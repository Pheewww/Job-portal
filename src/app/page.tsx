
import React from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
import JobCategories from '../Components/JobCategories';
import JobListing from '../Components/JobListing';

export default async function Home() {
   
    return (
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Remote Jobs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Make the world<br />your workshop
          </h1>

          <JobCategories />

          <h2 className="text-2xl font-semibold mb-4">Today</h2>
          
          <JobListing
            company="DataGrail"
            logo="/datagrail-logo.png"
            title="Senior Machine Learning Engineer"
            salary="$100k+"
            type="Full-time"
            category="Development"
            location="North America"
            postedTime="4 hours ago"
            tags={['Machine Learning', 'Senior', '+1 more']}
          />
          
          <JobListing
            company="DataGrail"
            logo="/datagrail-logo.png"
            title="Senior Machine Learning Engineer"
            salary="$100k+"
            type="Full-time"
            category="Development"
            location="North America"
            postedTime="4 hours ago"
            tags={['Machine Learning', 'Senior', '+1 more']}
          />

           
        </main>
      </div>
    );
  }


 