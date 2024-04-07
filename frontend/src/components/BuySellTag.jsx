import React from 'react'

const BuySellTag = ({type}) => {
    return (
        <div className=' flex bookmark items-center relative justify-center h-[53px] w-[40px] '>
            <div>
                <h1 className='text-white font-semibold mb-2'>{type}</h1>
            </div>

        </div>
    )
}

export default BuySellTag