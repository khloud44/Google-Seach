import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Search';

const Navbar = ({setDarkThem , darkThem}) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center  items-center border-b border-gray-200 dark:border-gray-700 '>
            <div className="flex justify-between w-screen items-center space-x-5  ">
                <Link to="/">
                    <p className='text-2xl bg-blue-500 text-white px-2 py-1 rounded dark:bg-gray-500 dark:text-gray-900'>
                        Google🔎
                    </p>
                </Link>
                <button onClick={()=>setDarkThem(!darkThem)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg">
                    {darkThem?"Light 💡" : "Dark 🌙"}
                </button>
            </div>
            <Search/>
        </div>
    )
}

export  default Navbar;