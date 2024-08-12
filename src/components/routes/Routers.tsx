import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import DataRoutes from '../data/dataRoutes'
import { useEffect } from 'react';
import { useGlobal } from '../common/globalContext';
export default function Routers() {
  const {user} = useGlobal();
  const path = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
      window.scrollTo(0,0);
      if(path.pathname === "/pratice-react/Cart" || path.pathname === "/pratice-react/Offers") {
        const token = localStorage.getItem("auth");
        if(!user || !token) {
          navigate("/pratice-react/");
        }
      }
    
  },[path,user, navigate])
  
  return (
    <Routes>
      {/* <Route path='/' element={<Home></Home>}></Route> */}
      {
        DataRoutes.map(item => <Route key={item.id} path={item.path} element={item.element}></Route>)
      }
    </Routes>
  )
}
