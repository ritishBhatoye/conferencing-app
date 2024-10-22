'use client'

import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [time, setTime] = useState('');
  const [nDate, setNDate] = useState('');

  useEffect(() => {
    // Only run this effect on the client-side
    const date = new Date();

    // Format the time in Indian Standard Time (IST)
    const formattedTime = date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // for 12-hour format
    });

    // Format the date in Indian format
    const formattedDate = date.toLocaleDateString('en-IN', {
      weekday: 'long',  // Full day name (e.g., "Saturday")
      year: 'numeric',  // Full year (e.g., "2024")
      month: 'long',    // Full month name (e.g., "March")
      day: 'numeric'    // Numeric day (e.g., "24")
    });

    // Set the state with formatted time and date
    setTime(formattedTime);
    setNDate(formattedDate);
  }, []); // Empty dependency array ensures it only runs on client-side once

  return (
    <section className="flex size-full text-white gap-10 flex-col">
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
            Upcoming Meeting at : 12:30 PM
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time} {/* Display the formatted time */}
            </h1>

            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {nDate} {/* Display the formatted date */}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
