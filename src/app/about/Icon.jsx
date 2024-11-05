import React from 'react'
import Image from 'next/image'
export default function Icon({mode,src}) {
  return (
    <div className='bg-[#FAFAFA] flex content-center'>
        <div className='bg-black flex content-center'>
            <Image src={`/about/${src}.svg`} height={40} width={40} alt={src}/>
        </div>
    </div>
  )
}
