import React, { useEffect, useState } from 'react'
import { Links } from './Links'
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../Contexts/ResultContextProvider'; 

export const Search = () => {

  const [searchText , setSearchText ] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debounceVale] =useDebounce(searchText,300);

  useEffect(() => {
    debounceVale&& setSearchTerm(debounceVale)
  }, [debounceVale])
  

  return (
    <div className='relative sm:ml-2 mt-10 '>
      <input type="text" value={searchText} className="sm:w-96 w-80 h-10 dark:br-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg" placeholder='Search Google or type URL'
      onChange={(e) => setSearchText(e.target.value)} />
      {searchText && (
        <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={()=> setSearchText('')}>
          X
        </button>
      )}
      <Links/>
    </div>
  )
}
