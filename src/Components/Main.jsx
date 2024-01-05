import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart } from 'recharts';
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa'
// import PieChart from '../Components/PieChart'
import { Progress } from 'antd';
import PieResources from './PieResources';
import Error from '../assets/error.png'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 2500) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const Main = () => {
  return (

      <div className='pt-[25px] px-[25px] bg-[#eae3ff]'>
      <div className="flex items-center justify-between">
        <h1 className='text-[#5a5c69] leading-[34px] font-normal cursor-pointer '>Dashboard</h1>
        <button className='bg-[#71426c] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
      </div >
      <div className = 'grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out'>
            <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Earning(Monthly)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$343434</h1>
        </div>
        <FaRegCalendarMinus fontSize={20} color='black' />
      </div>

      <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out'>
            <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Earning(Monthly)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$343434</h1>
        </div>
        <FaRegCalendarMinus fontSize={20} color='black' />
      </div>


      <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out'>
            <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Earning(Monthly)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$343434</h1>
        </div>
        <FaRegCalendarMinus fontSize={20} color='black' />
      </div>


      <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out'>
            <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold '>Earning(Monthly)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$343434</h1>
        </div>
        <FaRegCalendarMinus fontSize={20} color='black' />
      </div>


      </div>

      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
        <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] '>
         <h2>Expensess</h2>
         <FaEllipsisV color='gray' className='cursor-pointer' />
        </div>
        <div>
        <LineChart
          width={800}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
        </div>
        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
        <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] '>
         <h2>Expensess</h2>
         <FaEllipsisV color='gray' className='cursor-pointer' />
        </div>

        <div  className='p2-[35px]'>
  <PieResources/>
        </div>
   

        </div>
      </div>









      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
          <h2>Expensess</h2>
         <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>
          <div className='px-[25px] space-y-[15px]'>
          <div>
            <h2>Server Migrations</h2>
          <Progress percent={70} strokeColor='#E74A3B' />
          </div>

          <div>
            <h2>Sales Rating</h2>
          <Progress percent={30} strokeColor='#' />
          </div>

          <div>
            <h2>Customer Database</h2>
          <Progress percent={50} strokeColor='#F6C23E' />
          </div>

          <div>
            <h2>Payout Details</h2>
          <Progress percent={80} strokeColor='#4E73DF' />
          </div>


          <div>
            <h2>Account Setup</h2>
          <Progress percent={30} strokeColor='#1CCC88A' />
          </div>



          </div>
        </div>





         <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
            <h2>Resourses</h2>
            <FaEllipsisV/>
          </div >
          <div className='pl-[35px]  flex items-center justify-center h-[100%]'>
            <div>
              <img className='h-[280x] w-[100px]  ' src={Error} alt=''/>
              <p className='mt-[15px] font-semibold text-gray-500'>No Data Available</p>
            </div>
          </div>
           </div>
      </div>
      </div>
  )
}

export default Main
