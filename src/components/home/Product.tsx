import { useEffect, useState } from "react";
import { ProductHome, Products } from "../data/dataProduct";
import Items from './Items';
import { useGlobal } from "../common/globalContext";

export default function Product() {
  const [status, setStatus] = useState<string>("best-sellers");
  const [Product, setProduct] = useState<ProductHome[]>(null!);
  const {user} = useGlobal();

  useEffect(() => {
    setProduct(Products.filter(item => item.isStatus).slice(0,4));
  },[])

  const hangleClickProductHome = (str: string) => {
    setStatus(str);
    switch(str) {
      case "best-sellers":
         setProduct(Products.filter(item => item.isStatus).slice(0,4)); 
        break;
      case "new-product":
          setProduct(Products.slice(0,4));
        break;
    }
  }
  return (
    <div className='home-container'>
      <div className="product">
        <h2>
          { 
            user ? `${user.name} ` : 'Our '
          } 
        products</h2>
        <div className="button-group">
          <button className={`${status === "best-sellers" ? 'active' : ''}`} onClick={() => hangleClickProductHome("best-sellers")} >Best-sellers</button>
          <button className={`${status === "new-product" ? 'active': ''}`} onClick={() => hangleClickProductHome("new-product")}>New products</button>
        </div>

        <div className="product-wrapper">
          {
            Product?.map(item => <Items item={item} key={item.id}></Items>)
          }
        </div>
      </div>
    </div>
  )
}
