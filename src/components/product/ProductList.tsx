
import ProductItem from "./ProductItem";
import '../../css/related.css'
import { useGlobalProduct } from "./GlobalProduct";
import ProductPage from "./ProductPage";
import { useCallback, useEffect } from "react";
import { ProductHome, ShowListProduct } from "../data/dataProduct";
import { useGlobal } from "../common/globalContext";

export default function ProductList() {
  const { products, setProducts, LengthPage, setLengthPage, loading, setLoading, page, sort, setPage, reverse, categoryType } = useGlobalProduct();
  const { search } = useGlobal();

  const fetchDataLength =useCallback(
    async () => {
      setLoading(false);
      const data : ProductHome[] | undefined = await ShowListProduct({name: search, sortBy: sort,categoryId: categoryType ,reverse: true});
      if(data &&  data.length !== 0) {
        setLengthPage(Math.ceil(data.length /12));
        setLoading(true);
      }
    }
     ,[search, sort, setLengthPage, setLoading, categoryType])

  useEffect(() => {
    fetchDataLength();
    
  },[fetchDataLength])

  const fetchDataPage = useCallback( async () => {
    const data : ProductHome[] | undefined = await ShowListProduct({name: search, sortBy: sort, page: page, limit: 12,categoryId: categoryType ,reverse: reverse === 'asc' ? false : true});
    if(data) {
      setProducts(data);
      if(LengthPage < page) {
        setPage(1);
      }
    }
  },[LengthPage, sort, reverse, page, search, setPage, setProducts, categoryType]);

  useEffect(() => {
    if(loading) {
      fetchDataPage();
    }
    
  },[fetchDataPage,loading])


  return (
    <div>
      {
        products && products.length !== 0 ?
          <div>
            <ProductPage></ProductPage>
            <div className="product-wrapper">
              {
                products?.map(item => <ProductItem key={item.id} item={item}></ProductItem>)
              }
            </div>
            <div className="page-product">
              <ProductPage></ProductPage>
            </div>
          </div>:
          <div>
             <span>Empty Product</span>
          </div>
      }

    </div>
  )
}
