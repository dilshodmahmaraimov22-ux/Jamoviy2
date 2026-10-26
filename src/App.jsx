import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<Login/>}/>
                         <Route element={<Layout/>}>
                               <Route path='/home' element={<Home/>}/>
                               <Route path='/about' element={<About/>}/>
                               <Route path='/shop' element={<Shop/>}/>
                               <Route path='/blog' element={<Blog/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App