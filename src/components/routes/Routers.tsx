import {Route, Routes, useLocation} from 'react-router-dom'

import DataRoutes from '../data/dataRoutes'
import { useEffect } from 'react';
export default function Routers() {
  const path = useLocation();
  useEffect(() => {
      window.scrollTo(0,0);
  },[path])
  
  return (
    <Routes>
      {/* <Route path='/' element={<Home></Home>}></Route> */}
      {
        DataRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}></Route>)
      }
    </Routes>
  )
}
