import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
       <NavLink to={'/pratice-react'}><img src="/pratice-react/logo.svg" alt="" /></NavLink> 
    </div>
  )
}
