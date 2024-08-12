import { MagnifyingGlass, SortAscending } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useGlobalProduct } from "./GlobalProduct";
import { ProductHome, ShowListProduct } from "../data/dataProduct";
import { useGlobal } from "../common/globalContext";
import { CategoryType, fetchDataCategory } from "../data/dataCategory";

export default function ProductTitle() {
  const [active, setActive] = useState<number>(1);
  const [toggleSort, setToggleSort] = useState<boolean>(false);
  const { setProducts, setSort, setPage, refButton, reverse, setReverse, setCategoryType } = useGlobalProduct();
  const refInput = useRef<HTMLInputElement>(null!);
  const { handleChangeSearch, setSearch } = useGlobal();
  const [listCategory, setListCategory] = useState<CategoryType[] | undefined>(undefined);

  const fetchData = async () => {
    setListCategory(await fetchDataCategory());
  }

  useEffect(() => {
    fetchData();
  }, [])

  const HangleClickDefault = async () => {
    const data: ProductHome[] | undefined = await ShowListProduct({ page: 1, reverse: false, limit: 12 });
    if (data) {
      setProducts(data);
      setActive(1);
      setReverse("asc");
      setSearch('');
      setSort('');
      setCategoryType(undefined);
      setPage(1);
      refInput.current.value = '';
    }
  }


  return (
    <div className="product-title" ref={refButton}>
      <div className="product-title-item">

        <div className="button-group">
          <div>
            <button
              className={active === 1 ? 'active' : ''}
              onClick={() => HangleClickDefault()}
            >All Products</button>
          </div>
          {
            listCategory && listCategory.map(item => (
                <div key={item.id}>
                  <button
                    className={active === (item.id +1) ? 'active' : ''}
                    onClick={() => {
                      setActive(item.id +1);
                      setCategoryType(item.id);
                    }}
                  >{item.name}</button>
                </div>
            ))
          }

        </div>
      </div>

      <div className="product-title-item">
        <div className="search">
          <div>
            <MagnifyingGlass size={24} />
          </div>
          <input type="text" placeholder="Search product..." onChange={handleChangeSearch} ref={refInput} />
        </div>

        <div className="sort">
          <div className="sort-by" onClick={() => setToggleSort(toggleSort ? false : true)}>
            <span>Sort by</span>
            {
              toggleSort &&
              <div className="toggle-sort">
                <div onClick={() => setSort('')} >Default</div>
                <div onClick={() => setSort("title")}>Name</div>
                <div onClick={() => setSort("price")}>Price</div>
              </div>
            }

          </div>
          <div className={`reverse  ${reverse === 'desc' ? ' active' : ''}`}
            onClick={() => setReverse(reverse === 'asc' ? 'desc' : 'asc')}>
            <SortAscending size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
