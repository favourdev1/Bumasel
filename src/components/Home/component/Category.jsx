import React from 'react'

function Category({ categoryName = 'All', categoryImage = '/images/logo.png' }) {
    return (
        <div className='text-sm text-gray-700 flex flex-col items-center justify-center w-full gap-4 '>
            <div className="bg-[#FAF7FF] w-full transform transition-all flex-1  hover:ring-purple-200 hover:ring duration-500 overflow-hidden rounded-2xl flex items-center justify-center ">
                <div className="relative overflow-hidden items-center justify-center flex w-[60px] min-h-48 max-h-28 lg:max-h-48">
                <img src={categoryImage}  alt=" App Logo" className='w-[32px] h-[32px] lg:h-fit lg:w-fit ' />
                   
                </div>
             
            </div>
            <p>{categoryName}</p>
            
        </div>
    )
}

export default Category
