"use client"
import Breadcrumbs from '@/utils/Breadcrumbs';
import Image from 'next/image';
import { useState } from 'react';

import React from 'react'

export default function page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact request:', { name, email, phone, message });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Breadcrumbs/>

      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6 lg:w-1/3">
          <div className="flex flex-col items-start mb-6 gap-3">
            <div className='flex flex-row justify-start items-center gap-3'>
              <Image src='/contact/call.svg' height={30} width={30} alt='call'/>
              <h2 className="text-lg font-semibold">Call To Us</h2>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-sm text-gray-800">Phone: +8801611112222</p>
            </div>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="flex flex-col items-start mb-6 gap-3">
            <div className='flex flex-row justify-start items-center gap-3'>
              <Image src='/contact/mail.svg' height={30} width={30} alt='mail'/>
              <h2 className="text-lg font-semibold">Write To Us</h2>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-sm text-gray-800">Emails: customer@exclusive.com</p>
              <p className="text-sm text-gray-800">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="p-3 bg-[#F5F5F5] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 bg-[#F5F5F5] rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

