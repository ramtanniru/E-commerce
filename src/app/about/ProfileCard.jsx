import Image from 'next/image'
import React from 'react'

export default function ProfileCard({profile}) {
  return (
    <div className='flex flex-col justify-start gap-5'>
        <Image src={`/about/${profile.src}.png`} width={400} height={500} alt='profile'/>
        <div className='flex flex-col justify-start gap-2'>
            <p className='text-2xl font-bold'>{profile.name}</p>
            <p className='text-lg font-medium'>{profile.designation}</p>
            <div className='flex flex-row justify-start items-center gap-5'>
                <Image src='/about/twitter.svg' height={30} width={30} alt='twitter'/>
                <Image src='/about/insta.svg' height={30} width={30} alt='insta'/>
                <Image src='/about/linkedin.svg' height={30} width={30} alt='linkedin'/>
            </div>
        </div>
    </div>
  )
}
