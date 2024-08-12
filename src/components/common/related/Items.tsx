import { ShoppingCart } from "phosphor-react";
import { ProductHome } from "../../data/dataProduct";
import { useGlobal } from "../globalContext";
import { Link } from "react-router-dom";

export default function Items({ item }: { item: ProductHome }) {
  const {hangleClickCart} = useGlobal();
  return (
    <div className="product-item">
      <Link to={`/pratice-react/Product/${item.id}`} className="link-product">
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

        <div className="cart" onClick={() => hangleClickCart(item.id)}>
          <ShoppingCart size={20}  />
        </div>

      </div>
    </div>
  )
}