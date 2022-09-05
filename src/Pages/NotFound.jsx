import React from 'react'
import notFound from '../assets/1.1.gif'
export const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      <h2>Page Not Found</h2>
      <img src={notFound} alt="notFoundImage" className='rounded'/>
    </div>
  )
}
