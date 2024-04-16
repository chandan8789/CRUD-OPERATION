import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Users from './operations/Users'
import CreateUser from './operations/CreateUser'
import UpdateUser from './operations/UpdateUser'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/update/:id' element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
