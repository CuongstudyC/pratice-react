import {  MagnifyingGlass, SortAscending } from "phosphor-react";
import {  useEffect, useRef, useState } from "react";
import { useGlobalProduct } from "./GlobalProduct";
import { Products } from "../data/dataProduct";
import { useGlobal } from "../common/globalContext";

export default function ProductTitle() {
  const [active, setActive] = useState<number>(1);
  const [toggleSort, setToggleSort] = useState<boolean>(false);
  const { setProducts, page, setSort, setPage , refButton , reverse, setReverse } = useGlobalProduct();
  const refInput = useRef<HTMLInputElement>(null!);
  const {handleChangeSearch, setSearch} = useGlobal();


  return (
    <div className="product-title" ref={refButton}>
      <div className="product-title-item">

        <div className="button-group">
          <div>
            <button
              className={active === 1 ? 'active' : ''}
              onClick={() => {
                setActive(1);
                setProducts(Products.slice(12*page -12, 12*page));
                setSearch('');
                setSort('');
                setPage(1);
                refInput.current.value = '';
              }}
            >All Products</button>
          </div>
          <div>
            <button
              className={active === 2 ? 'active' : ''}
              onClick={() => setActive(2)}
            >Face</button>
          </div>
          <div>
            <button
              className={active === 3 ? 'active' : ''}
              onClick={() => setActive(3)}
            >Body</button>
          </div>
        </div>
      </div>

      <div className="product-title-item">
        <div className="search">
          <div>
            <MagnifyingGlass size={24} />
          </div>
          <input type="text" placeholder="Search product..."  onChange={handleChangeSearch} ref={refInput} />
        </div>

        <div className="sort">
          <div className="sort-by" onClick={() => setToggleSort(toggleSort ? false : true)}>
            <span>Sort by</span>
            {
              toggleSort &&
              <div className="toggle-sort">
                <div onClick={() => setSort('')} >Default</div>
                <div onClick={() => setSort("Name")}>Name</div>
                <div onClick={() => setSort("Price")}>Price</div>
              </div>
            }

          </div>
          <div className={`reverse  ${reverse === 'dec' ? ' active' : ''}`}
              onClick={() => setReverse( reverse === 'acs' ? 'dec' : 'acs')}>
            <SortAscending size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
