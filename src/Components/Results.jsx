import React ,{useEffect}from 'react';
import ReactPlayer from 'react-player';
import { NavLink, useLocation } from 'react-router-dom';

import { useResultContext } from '../Contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    
    const { getResults , results, searchTerm,  isLoading } = useResultContext();
    const location = useLocation();  
    
    
    useEffect(()=>{
        searchTerm && getResults(`${location.pathname}/q=${searchTerm}&num=40`)
    },[searchTerm,location.pathname])
    
    if (isLoading)  return <Loading/>;
    

    switch (location.pathname) {
        case "/search":
            return (
                <div className='flex flex-wrap justify-center space-y-6 sm:px-0 px-20'>
                    <div className='flex flex-wrap justify-start  sm:px-20 lg:px-20 md-20'>
                        {results.data && results.data.results&& results.data.results.map(({link , title},index)=>(
                            <div key={index} className=" md:w-3/6  w-full p-3">
                                <p className='text-sm'>
                                    {link.length > 20 ? link.substring(0,20)+'...' : link}
                                </p>
                                <p className='text-lg hover:underlline dark:text-blue-300 text-blue-700'>
                                    <a href={link} target='_blank' rel="noreferrer">{title}</a>
                                </p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            )
        case "/image":
            return (
                <div className='flex flex-wrap justify-center items-center sm:p-0'>
                    {console.log(results)}
                    {results.data && results.data.image_results && results.data.image_results.map(({image:{src} ,link:{href , title} },index)=>(
                        <div key={index} className="lg:w-3/12 sm:w-3/6 md:w-2/6 my-3 flex justify-center flex-col items-center p-0 ">
                            <a href={href} target='_blank' rel="noreferrer" className='sm:p-3 p-5' >
                                <img src={src} alt={title} className="rounded" loading="lazy"/>
                                <p className='text-sm break-words mt-2 w-36'>
                                    {title.length > 20 ? title.substring(0,20)+'...' : title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case "/video":
            return (
                <div className='flex flex-wrap  justify-center '>
                    {console.log(results)}
                    {results.data && results.data.results &&results.data.results.map(({link , title},index)=>(
                        <div key={index} className="lg:w-3/12 sm:w-3/6 md:w-2/6 my-3 flex justify-center flex-col items-center flex-wrap p-0 ">
                            <ReactPlayer url={link} controls width="90%" height="200px" className="mx-50"/>
                            <p className='hover:underlline dark:text-blue-300 text-blue-700 text-sm'>
                                <a href={link} target='_blank' rel="noreferrer">{title.length > 10 ? title.substring(0,10): title }</a>
                            </p>
                        </div>
                    ))}
                    
                </div>
            )
            case "/news":
                return (
                    <div className='flex flex-wrap justify-center space-y-6 sm:px-0 px-20'>
                    <div className='flex flex-wrap justify-start  sm:px-20 lg:px-20 md-20 '>
                        {console.log(results)}
                        {results.data && results.data.entries && results.data.entries.map(({id ,link,source:{href}, title},index)=>(
                            <div key={id} className=" md:w-2/4 w-full sm:p-3 my-3 ">
                                <a href={link} target='_blank' rel="noreferrer" className=' hover:underline'>
                                    <p className="text-lg dark:text-blue-300 text-blue-700">
                                        {title}
                                    </p>
                                </a>
                                <p className='flex gap-4'>
                                    <a href={href} target='_blank' rel="noreferrer" className="hover:underline">{href}</a>
                                </p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            )
        default:
            return 'ERROR';
    }
}
