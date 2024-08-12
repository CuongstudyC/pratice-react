import { Pen, ShoppingCartSimple, Trash } from "phosphor-react";
import { useGlobal } from "../common/globalContext";
import { Link } from "react-router-dom";

export default function Order() {
  const { product, deleteCart, changeNumberCart } = useGlobal();
  
  return (
    <div className="box-contain">
      <div className="order-summary-title">
        <div>
          <ShoppingCartSimple size={30} color="#323842FF" />
        </div>
        <div>
          <span>Order summary</span>
        </div>

      </div>

      <div className="table">
        <div className="table-content">
          <div>
            <span>Name</span>
          </div>
          <div></div>

          <div>
            <span>Price</span>
          </div>

          <div>
            <span>Quantity</span>
          </div>

          <div>
            <span>Total</span>
          </div>

          <div></div>
        </div>
        {
          product.map(item => (
            <div className="table-content" key={item.id}>
              <div>
                <Link to={`/pratice-react/Product/${item.id}`}><img src={item.img[0]} alt="" /></Link>
                
              </div>
              <div>
                <span>{item.title}</span>
              </div>
              <div>
                <span>${item.price}</span>
              </div>
              <div>
                <div className="quantity">
                  <Pen size={16} />
                  <input
                    type="number"
                    value={item.quantity}
                    min={0}
                    max={100}
                    onChange={(e) => changeNumberCart(item.id, Number(e.target.value))} /></div>
              </div>
              <div>
                <span>
                  {
                    item.price * (item.quantity ? item.quantity : 0)
                  }
                </span>
              </div>

              <div>
                <Trash size={20} onClick={() => deleteCart(item.id)}></Trash>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
