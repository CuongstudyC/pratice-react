import { ShoppingCart } from "phosphor-react";
import { ProductHome } from "../data/dataProduct";
import { useGlobal } from "../common/globalContext";
import { Link } from "react-router-dom";

export default function ProductItem({ item }: { item: ProductHome }) {
  const { cart, setCart } = useGlobal();

  return (
    <div className="product-item">
      <Link to={`/Product/${item.id}`} className="link-product">
        <div>
          <div className="product-img">

            <img src={item.img[0]} alt="" />
            {
              item.isStatus ? <div className="tag" id="tag1"><span>Best-sellers</span></div> : ''
            }
          </div>
          <div className="content-product">
            <span className="product-title1">{item.title}</span>
            <span className="content">{item.description}</span>
          </div>

        </div>
      </Link>
      <div className="product-price">

        <div className="price">
          <span>${item.price}</span>
          {
            item.oldPrice ? <span>${item.oldPrice}</span> : ''
          }
        </div>

        <div className="cart">
          <ShoppingCart size={20} onClick={() => setCart(cart[item.id] ? { ...cart, [item.id]: cart[item.id] + 1 } : { ...cart, [item.id]: 1 })} />
        </div>

      </div>
    </div>
  )
}
