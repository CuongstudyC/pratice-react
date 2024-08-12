
import Delivery from "./Delivery";
import Information from "./Information";
import Order from "./Order";
export default function SideLeft() {
  
  return (
    <div className="sideLeft">
        <Order ></Order>
        <Delivery></Delivery>   
        <Information></Information>
    </div>
  )
}
