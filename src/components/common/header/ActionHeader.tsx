import { MagnifyingGlass, ShoppingCartSimple } from "phosphor-react";
import Login from "./Login";
import Translation from "../../classComponents/Translation";
import { useGlobal } from "../globalContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchDataTotalQuantityCart } from "../../data/dataCart";


export default function ActionHeader() {
  const { Translate, cart, user, deleteCart, changeNumberCart, setActiveModel } = useGlobal();
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const HangleLinkCart = () => {
    if (user) {
      navigate("/pratice-react/Cart");
      return;
    }
    setActiveModel(true);
  }

  useEffect(() => {
    if (!user) {
      setQuantity(0);
    }
  }, [user])

  const hangleTotalSum = useCallback(
    async () => {
      try {
        if (user) {
          const data = await fetchDataTotalQuantityCart(user.id);
          if (data) {
            setQuantity(data);
            return;
          }
          setQuantity(0);
        }
      } catch (e) {
        setQuantity(0);
        return;
      }
      return;

    }
    , [user])

  useEffect(() => {
    hangleTotalSum();
  }, [hangleTotalSum, cart, deleteCart, changeNumberCart, user])

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

        <div className="cart-item" onClick={() => HangleLinkCart()}>
          <span><Translation>Cart</Translation> ({quantity})</span>
        </div>

      </div>

      <Login></Login>

    </div>
  )
}