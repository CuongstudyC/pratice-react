import { useState } from "react";
import { useGlobalProductDetail } from "./GlobalProductDetail";

export default function SideLeft() {
  const { product } = useGlobalProductDetail();
  const [active, setActive] = useState<number>(0);
  return (
    <div className="side-left">
      <div className="side-left-img">
        {
          product && product.img.map((item, index) => (
            <div
              key={index}
              className={index === active ? 'active' : 'not-active'}
              onClick={() => setActive(index)}>
              <img src={item} alt="" />
            </div>
          ))
        }
      </div>
      <div className="main-product">
        {
          product && product.img.map((item, index) => (
            <div key={index} style={{transform: `translateY(-${(active*100)}%)`}}>
              <img src={item} alt="" />
              <div className="tag">
                <span className="tag-content">Best Seller</span>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
