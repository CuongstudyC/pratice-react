import { MagnifyingGlass, ShoppingCartSimple } from "phosphor-react";
import Login from "./Login";
import Translation from "../../classComponents/Translation";
import { useGlobal } from "../globalContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ActionHeader() {
  const { Translate, cart } = useGlobal();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    let quan = 0;
    Object.values(cart).forEach(item => {
        quan+=item;
    })
  setQuantity(quan);
  },[cart])
  
  return (
    <div className='action-header'>
      <div className="search-input">
        <div>
          <MagnifyingGlass size={16} color="#171A1FFF" />
        </div>
        <div>
          <input type="text" placeholder={Translate("SEARCH PRODUCT")} />
        </div>
      </div>

      <div className="cart">
        <div>
          <ShoppingCartSimple size={20} color="#171A1FFF" />
        </div>

        <Link to={"/Cart"} className="cart-item">
          <span><Translation>Cart</Translation> ({quantity})</span>
        </Link>

      </div>

      <Login></Login>

    </div>
  )
}