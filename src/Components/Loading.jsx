import React from 'react'
import {Oval} from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Oval type="Puff" color="#00BFFF" height={80} width={80}wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#00BFFF"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
}
