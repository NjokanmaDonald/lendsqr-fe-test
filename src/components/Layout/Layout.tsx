import { Routes, Route } from "react-router-dom";
import Dashboard from '../../pages/Dashboard/Dashboard'
import UserPages from '../../pages/UserPages/UserPages'
import UsersDetails from '../../pages/UsersDetails/UsersDetails'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import SidebarResponsive from '../SidebarResponsive/SidebarResponsive'
import './Layout.scss'


function Layout() {

  return (
    <>
    <div className="layout">        
          <Navbar />
        <div className="layout__Main">
          <div className='layout__Main__Sidebar'>
            <Sidebar />
          </div>

          <div className='layout__Main__Right'>
            <SidebarResponsive />
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/users' element={<UserPages />}/>
              <Route path='/users/:id' element={<UsersDetails />}/>
            </Routes>
          </div>
        </div>     
    </div>
    </>
  )
}

export default Layout