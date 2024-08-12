import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
       <NavLink to={'/'}><img src="../../logo.svg" alt="" /></NavLink> 
    </div>
  )
}
