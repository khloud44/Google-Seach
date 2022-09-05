import React from 'react'
import { NavLink } from 'react-router-dom'


const links=[
    {url:"/search", text:"🔎 All"},
    {url:"/news", text:"📰 News"},
    {url:"/image", text:"🖼️ Images"},
    {url:"/video", text:"📺 Videos"},
]

export const Links = () => {
    return (
        <div className='flex sm:justify-around justify-between items-center mt-4'>
            {links.map(({url , text},index)=>(
                <NavLink to={url} className={(navData) => navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" : "" } key={index}>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}
