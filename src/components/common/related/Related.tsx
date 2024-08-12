import {  useEffect, useState } from 'react'
import '../../../css/related.css'
import { Limit4, ProductHome } from '../../data/dataProduct'
import Items from './Items';
export default function Related() {
  const [Product, setProduct] = useState<ProductHome[] | undefined>(undefined);

  const fetchData =  async () => {
    setProduct(await Limit4(true));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="related">
        <h2>Related products</h2>
        <div className='product-wrapper'>
            {
              Product?.map(item => <Items item={item} key={item.id}></Items>)
            }
        </div>
    </div>
  )
}
