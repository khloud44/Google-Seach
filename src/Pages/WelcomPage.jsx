import React from 'react'

import welcomeImage from '../assets/welcomeGif.gif';

export const WelcomPage = () => {
  return (
    <div className='text-center'>
        <img src={welcomeImage} alt="WelcomImage" />
        <h2 className='text-2xl mt-5 italic text-center'> to Google Search 🤩</h2>
    </div>
  )
}
