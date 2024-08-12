import Title from "../home/Title";
import MainProduct from "./MainProduct";

import '../../css/product.css'
import { GlobalContextProductProvides } from "./GlobalProduct";

export default function Product() {
  return (
    <GlobalContextProductProvides>
      <div className="container">
        <Title></Title>
        <div className="home-container">
          <MainProduct></MainProduct>
        </div>
      </div>
    </GlobalContextProductProvides>
  )
}
