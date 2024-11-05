import Image from 'next/image';
import React from 'react'

function Search() {
  return (
    <div className='p-2 bg-[#f5f5f5] flex flex-row gap-3 w-1/4 rounded-md'>
        <input className='bg-[#f5f5f5] w-full' placeholder='What are you looking for?'/>
        <Image src='/assets/search.svg' alt='search' height={30} width={30}/>
    </div>
  )
}

export default Search;