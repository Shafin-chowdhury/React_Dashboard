import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'
import App from '../App'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= '/' element= {<App />}>
        <Route index element = {<Main/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
