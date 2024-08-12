
import ProductItem from "./ProductItem";
import '../../css/related.css'
import { useGlobalProduct } from "./GlobalProduct";
import ProductPage from "./ProductPage";

export default function ProductList() {
  const { products } = useGlobalProduct();

  return (
    <div>
      <ProductPage></ProductPage>
      <div className="product-wrapper">
        {
          products.map(item => <ProductItem key={item.id} item={item}></ProductItem>)
        }
      </div>
      <div className="page-product">
        <ProductPage></ProductPage>
      </div>
    </div>
  )
}
