import React from 'react'
import Sidebar from './Sidebar';

import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
      <div className="flex mt-20 h-screen">
          <Sidebar />
          {/* Video container that adjusts width dynamically */}
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
      </div>     

      /* ➡️ Outlet particular children ke show kore */

      /* 
      Body is the parent route.
      ➡️ When a user visits /, <Feed /> will render inside the <Outlet /> of Body.
      ➡️ When a user visits /watch, <Watch /> will render inside the <Outlet /> of Body.
      */

)
}

export default Body
