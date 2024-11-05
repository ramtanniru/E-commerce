'use client'
import React,{useState} from 'react'
import Icon from './Icon'

export default function Card({card}) {
    const [isHover,setIsHover] = useState(false);
  return (
    <div className='border flex flex-col justify-center items-center gap-3 p-10 rounded-md hover:bg-rose-500 hover:text-white' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <Icon mode='dark' src={card.src}/>
        <p className='font-bold text-3xl'>{card.price}</p>
        <p className=''>{card.desc}</p>
    </div>
  );
}
