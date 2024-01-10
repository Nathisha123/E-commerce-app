import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserRoutes from './Utils/UserRoutes'
import AdminRoutes from './Utils/AdminRoutes'
function App() {
  return <>
    <div>
        <BrowserRouter>
          <Routes>
              <Route path = '/admin/*' element={<AdminRoutes/>}/>
              <Route path = '/*' element={<UserRoutes/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  </>
}

export default App