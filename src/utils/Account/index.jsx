'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AccountButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
    >
      {/* Account Icon */}
      <Image 
        src="/assets/account.svg"
        width={30} 
        height={30} 
        alt="Account Icon" 
        className="cursor-pointer"
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-48 backdrop-blur-sm bg-gradient-to-b from-gray-400 to-gray-500 text-white rounded-lg shadow-lg p-3" onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
          <ul className="flex flex-col p-2 space-y-2">
            <li>
              <Link href="/my-account">
                <div className="flex items-center space-x-3 hover:text-gray-300">
                  <Image src="/account/user.svg" width={20} height={20} alt="Manage Account" />
                  <span className='text-xs'>Manage My Account</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/orders">
                <div className="flex items-center space-x-3 hover:text-gray-300">
                  <Image src="/account/order.svg" width={20} height={20} alt="My Orders" />
                  <span className='text-xs'>My Orders</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/cancellations">
                <div className="flex items-center space-x-3 hover:text-gray-300">
                  <Image src="/account/cancel.svg" width={20} height={20} alt="My Cancellations" />
                  <span className='text-xs'>My Cancellations</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <div className="flex items-center space-x-3 hover:text-gray-300">
                  <Image src="/account/star.svg" width={20} height={20} alt="My Reviews" />
                  <span className='text-xs'>My Reviews</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <div className="flex items-center space-x-3 hover:text-gray-300">
                  <Image src="/account/logout.svg" width={20} height={20} alt="Logout" />
                  <span className='text-xs'>Logout</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
