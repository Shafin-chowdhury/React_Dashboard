import React from 'react'
import {FaChevronRight, FaRegSun, FaTachometerAlt,FaWrench,FaStickyNote,FaRegChartBar, FaRegCalendar, FaBolt} from 'react-icons/fa'
import DP from '../assets/DP.png'

const Sidebar = () => {
  return (
    <div className='bg-[#71426c] h-screen px-[25px]'>


      <div className='px-[15px] py-[30px] flex items-center justify-start border-b-[1px] border-[#EDEDED]/[1.3]'> 
        <h1 className='text-white text-[25px] leading-[24px] font-extralight cursor-pointer'>ADMIN PANEL</h1>
      </div>

      <div className=' items-center    gap-[10px] py-[20px] border-b-[1px] border-[#EDEDED]/[1.3]'>
            <img className='w-[70px] h-[80px]'  src={DP} alt="/" />
            <div className='flex items-center  gap-[10px]    '>
            <p className='text-white'>Shafin Chowdhury</p>
</div>
</div>



      <div className='flex items-center gap-[10px] py-[20px] border-b-[1px] border-[#EDEDED]/[1.3]'>
      <FaTachometerAlt color = 'white'/>
      <p className='text-[14px] leading-[20px] font-light text-white'>DASHBOARD</p>
      </div>
     

     <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[1.3]'>
        <p className='text-[10px] font-extralight leading-[16px] text-white/[1.4]'>Interface</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaRegSun color='white'/> 
              <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>  
            </div>
            <FaChevronRight color='white'/>
        </div>


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaWrench color='white'/> 
              <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>  
            </div>
            <FaChevronRight color='white'/>
        </div>
     </div>


     <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[1.3]'>
        <p className='text-[10px] font-extralight leading-[16px] text-white/[1.4]'>Interface</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaStickyNote color='white'/> 
              <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>  
            </div>
            <FaChevronRight color='white'/>
        </div>


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaRegChartBar color='white'/> 
              <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>  
            </div>
            <FaChevronRight color='white'/>
        </div>


        <div className='flex items-center gap-[10px]'>
              <FaRegCalendar color='white'/> 
              <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>  
            </div>

        <div className='bg-[#371735] mt-[16px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
            <FaBolt color='white' />
        <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'>Get All Your Outstanding Deals And Offers
        <button className='bg-[#71426c] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade to pro</button>
        </p>
        </div>
               
     </div>
    </div>
    
     

     

  )
}

export default Sidebar
