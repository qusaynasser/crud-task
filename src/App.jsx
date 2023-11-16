import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './component/creat/Create.jsx'
import Index from './component/index/Index.jsx'
import Details from './component/details/Details.jsx'
import Update from './update/Update.jsx'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/user/index' element={<Index/>}/>
      <Route path='/' element={<Create/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/user/update/:id' element={<Update/>}/>
    </Routes>
    </>
  )
}
