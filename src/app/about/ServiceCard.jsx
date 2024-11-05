import React from 'react'
import Image from 'next/image'
import Icon from './Icon'

export default function ServiceCard({service}) {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        <Icon src={'services/'+service.src}/>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-2xl font-bold'>{service.name}</p>
            <p className='text-lg font-medium'>{service.desc}</p>
        </div>
    </div>
  )
}
