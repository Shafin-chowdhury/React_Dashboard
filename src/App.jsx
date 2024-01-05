
import { Outlet } from 'react-router-dom'
import './App.css'
import DashboardView from './Components/DashboardView'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className='flex'>
    <div className='basis-[20%] h-[100vh] border'>
      <Sidebar />
    </div>
    <div className='basis-[80%] border h-[100vh] overflow-scroll'>
      <DashboardView/>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  )
}

export default App
