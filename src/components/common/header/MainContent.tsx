import { NavLink } from "react-router-dom";
import DataRoutes from '../../data/dataRoutes';


export default function MainContent() {
  return (
    <div className='main-header'>
        {
          DataRoutes.map(item => (item.id > 1 && item.id <=5 ) && <NavLink className="navlink" key={item.id} to={item.path}>{item.name}</NavLink>)
        }
    </div>
  )
}
