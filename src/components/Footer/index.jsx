import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#030406] text-white flex flex-col'>
      <div className='flex flex-row justify-between px-32 py-20'>

        <div className='flex flex-col justify-start gap-3 w-1/6'>
          <p className='text-2xl font-bold'>Exclusive</p>
          <p className='text-xl font-medium'>Subscribe</p>
          <p className=''>Get 10% off your first order</p>
          <div>
            <input />
          </div>
        </div>

        <div className='flex flex-col justify-start gap-3 w-1/6'>
          <p className='text-xl font-medium'>Support</p>
          <p className=''>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className=''>exclusive@gmail.com</p>
          <p className=''>+88015-88888-9999</p>
        </div>

        <div className='flex flex-col justify-start gap-3 w-1/6'>
          <p className='text-xl font-medium'>Account</p>
          <Link className='' href='/'>My Account</Link>
          <Link className='' href='/wishList'>Wishlist</Link>
          <Link className='' href='/'>Shop</Link>
        </div>

        <div className='flex flex-col justify-start gap-3 w-1/6'>
          <p className='text-xl font-medium'>Quick Link</p>
          <p className=''>Privacy Policy</p>
          <p className=''>Terms Of Use</p>
          <p className=''>FAQ</p>
          <p className=''>Contact</p>
        </div>

        <div className='flex flex-col justify-start gap-3 w-1/6'>
          <p className='text-xl font-medium'>Download App</p>
          <p className='text-[#fafafa]'>Save $3 with App New User Only</p>
          <div className='flex flex-row gap-2'>
            <Image src='/footer/qr.png' height={80} width={80} alt='qr'/>
            <div className='flex flex-col gap-2'>
              <Image src='/footer/playstore.png' height={50} width={120} alt='qr'/>
              <Image src='/footer/appstore.png' height={50} width={120} alt='qr'/>
            </div>
          </div>
          <div className='flex flex-row justify-start items-center gap-5'>
            <Image src='/footer/fb.svg' height={30} width={30} alt='fb'/>
            <Image src='/footer/twitter.svg' className='bg-transparent' height={30} width={30} alt='twitter'/>
            <Image src='/footer/insta.svg' height={30} width={30} alt='insta'/>
            <Image src='/footer/linkedIn.svg' height={30} width={30} alt='linkedin'/>
          </div>
        </div>

      </div>
      <div className='border-t border-t-slate-500 flex justify-center items-center p-3'>
        <p className='text-[#8b8383a2]'>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  )
}
