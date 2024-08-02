
import React from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
import JobCategories from '../Components/JobCategories';
import JobListing from '../Components/JobListing';

export default async function Home() {
   
    return (
      <div className="min-h-screen ">
        <Head>
          <title>Remote Jobs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="container mx-auto px-4 py-8 ">
          <h1 className="text-4xl font-semibold text-center mb-4 shadow-sm">
            Hire the <b>BEST</b> of 100xDevs.
          </h1>

          <JobCategories />

          <h2 className="text-2xl font-semibold mb-4 shadow-sm">Today</h2>
          
          <JobListing
            company="DataGrail"
            logo="/datagrail-logo.png"
            title="Backend Engineer"
            salary="$100k+"
            type="Full-time"
            category="Development"
            location="Pune"
            postedTime="4 hours ago"
            tags={['Python FastApi', 'Nodejs', '+1 more']}
          />
          
          <JobListing
            company="DataGrail"
            logo="/datagrail-logo.png"
            title="Full-Stack Engineer"
            salary="$100k+"
            type="Full-time"
            category="Development"
            location="Bangalore"
            postedTime="6 hours ago"
            tags={['Frontend', 'Nextjs','Prisma',  '+1 more']}
          />

           
        </main>
      </div>
    );
  }


 