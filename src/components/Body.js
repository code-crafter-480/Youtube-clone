import React from 'react'
import Sidebar from './Sidebar';

import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex mt-20' >
        < Sidebar />
        < Outlet />        
        {/* ➡️ Outlet particular children ke show kore */}
    </div>
  )
}

export default Body
