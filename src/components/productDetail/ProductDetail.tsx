
import ProductInfo from "./ProductInfo";

import '../../css/productDetail.css';
import { GlobalContextProductDetailProvides } from "./GlobalProductDetail";
import Related from "../common/related/Related";
import ButtonScroll from "./ButtonScroll";
import Benefit from "./Benefit";
import Ingredients from "./Ingredients";
import HowToUse from "./HowToUse";
import ReviewPage from "./ReviewPage";
import Faqs from "./Faqs";

export default function ProductDetail() {
  return (
    <GlobalContextProductDetailProvides>
      <div className="product-detail">
        <div className="container">
          <div className="home-container">
            <div className="main-content">
              <div className="content-product-detail">
                <ProductInfo></ProductInfo>
              </div>
              <div className="relate-product-detail">
              <Related></Related>
              </div>
              
              <ButtonScroll></ButtonScroll>
              <Benefit></Benefit>
              <Ingredients></Ingredients>
              <HowToUse></HowToUse>

              <ReviewPage></ReviewPage>
              <Faqs></Faqs>
            </div>
          </div>
        </div>
      </div>
    </GlobalContextProductDetailProvides>
  )
}
