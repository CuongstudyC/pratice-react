import {  useState } from 'react'
import '../../../css/related.css'
import { ProductHome, Products } from '../../data/dataProduct'
import Items from './Items';
export default function Related() {
  const [Product] = useState<ProductHome[]>([...Products].slice(0,4));
  return (
    <div className="related">
        <h2>Related products</h2>
        <div className='product-wrapper'>
            {
              Product.map(item => <Items item={item} key={item.id}></Items>)
            }
        </div>
    </div>
  )
}
