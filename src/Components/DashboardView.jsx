import React from 'react'
import { FaEnvelope, FaSearch, FaRegBell, FaSignOutAlt  } from 'react-icons/fa'

const DashboardView = () => {
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
      <div className="flex items center rounded-[5px]">
        <input type='text' className='bg-[#e1d9f7] h-[40px] outline-none p1-[13px] w-[350px] rounded-[3px] placeholder:text-[15px]  leading-[20px] font-normal' placeholder='Search For...'/>
        <div className='bg-[#71426c] h-[40px] px-[14px] flex items-center jusify-center cursor-pointer rounded-tr-[15px] rounded-br-[15px]'>
            <FaSearch color='white'/>
        </div>
      </div>

        <div className='flex items-center gap-[15px] relative'>
        <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
            <FaRegBell/>
            <FaEnvelope/>
        </div>
        <div className='flex items-center gap-[15px] relative'>
          <p>LOGOUT</p>
          <div>
            <FaSignOutAlt/> 
          </div>
        </div>

        </div>
       </div>
        

       
  )
}

export default DashboardView
