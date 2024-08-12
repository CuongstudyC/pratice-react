import CartTitle from "./CartTitle";
import '../../css/cart.css'
import SideLeft from "./SideLeft";
import { useGlobal } from "../common/globalContext";
import Translation from '../classComponents/Translation';
import { Link } from "react-router-dom";
import SideRight from "./SideRight";
import { GlobalContextCartProvides } from "./globalCart";
import Related from "../common/related/Related";

export default function Cart() {
  const { product } = useGlobal();

  return (
    <GlobalContextCartProvides>
      <div className="cart">
        <div className="container">
          <CartTitle></CartTitle>
          <div className="home-container">
            {
              (product && product.length !== 0) ?
                <div>
                  <div className="cart-wrapper">
                    <SideLeft></SideLeft>
                    <SideRight></SideRight>
                  </div>

                  <div className="related-product">
                  <Related></Related>
                  </div>              
                </div>

                :
                <div className="empty-cart">
                  <Translation>NOCART</Translation>
                  <Link to={"/Product"} className="link"><button>Go Shopping Now</button></Link>
                </div>
            }

          </div>
        </div>
      </div>
    </GlobalContextCartProvides>
  )
}
