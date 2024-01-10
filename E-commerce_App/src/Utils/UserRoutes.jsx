import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Cart from '../Components/Users/Cart'
import Home from '../Components/Users/Home'
import Product from '../Components/Users/Product'
import TopBar from '../Components/Common/TopBar'
function UserRoutes() {
  return <>
  <TopBar/>
  <Routes>
    <Route path = '/' element={<Home/>}/>
    <Route path = 'cart' element={<Cart/>}/>
    <Route path = 'product/:id' element={<Product/>}/>
    <Route path = '*' element={<Navigate to='/'/>}/>
  </Routes>
</>
}

export default UserRoutes