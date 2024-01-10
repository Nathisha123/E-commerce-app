import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Dashboard from '../Components/Admin/Dashboard'
import AddProduct from '../Components/Admin/AddProduct'
import EditProduct from '../Components/Admin/EditProduct'
import TopBar from '../Components/Common/TopBar'
function AdminRoutes() {
  return <>
  <TopBar/>
    <Routes>
      <Route path = 'dashboard' element={<Dashboard/>}/>
      <Route path = 'add-product' element={<AddProduct/>}/>
      <Route path = 'edit-product/:id' element={<EditProduct/>}/>
      <Route path = '*' element={<Navigate to = 'dashboard'/>}/>
    </Routes>
  </>
}

export default AdminRoutes