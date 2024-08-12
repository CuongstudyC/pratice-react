import { useEffect } from "react";
import { useGlobal } from "../common/globalContext";
import { Products } from "../data/dataProduct";
import { useGlobalProduct } from "./GlobalProduct";
import { CaretLeft, CaretRight } from "phosphor-react";

export default function ProductPage() {
  const { page, setPage, sort, setProducts, refButton, reverse } = useGlobalProduct();
  const { search } = useGlobal();
  const LengthProduct = [...Products].sort((a, b) => {
    if (sort === "Name") {
      return a.title.localeCompare(b.title);
    } else if (sort === "Price") {
      return a.price - b.price;
    }
    return a.id - b.id;
  }).filter(item => item.title.toLowerCase().includes(search.toLowerCase())).length;

  const LengthPage = Math.ceil(LengthProduct / 12);

  useEffect(() => {
    if (reverse === 'acs') {
      setProducts([...Products].sort((a, b) => {
        if (sort === "Name") {
          return a.title.localeCompare(b.title);
        } else if (sort === "Price") {
          return a.price - b.price;
        }
        return a.id - b.id;
      }).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .slice(12 * page - 12, page * 12));

    } else {
      setProducts([...Products].sort((a, b) => {
        if (sort === "Name") {
          return a.title.localeCompare(b.title);
        } else if (sort === "Price") {
          return a.price - b.price;
        }
        return a.id - b.id;
      }).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .reverse()
        .slice(12 * page - 12, page * 12));
    }
    if (LengthPage < page) setPage(1);

  }, [search, sort, page, reverse])


  const hangleClickPage = () => {
    window.scrollTo({
      top: (refButton.current ? refButton.current?.getBoundingClientRect().top : 0) + window.scrollY,
      behavior: 'smooth'

    })
  }

  return (
    <div className="page-wrapper">
      <button
        onClick={() => {
          setPage(page === 1 ? 1 : page - 1)
          hangleClickPage();
        }}><CaretLeft size={32} /></button>
      {
        new Array(LengthPage).fill(0).map((_, index) => {
          if (index + 1 >= page - 1 && index + 1 <= page + 4) {
            return (
              <button
                className={(index + 1 === page) ? 'active' : ''}
                onClick={() => {
                  setPage(index + 1);
                  hangleClickPage();
                }}
                key={index + 1}>
                {index + 1}
              </button>
            )
          }
        })
      }
      <button onClick={() => {
        setPage(page === LengthPage ? page : page + 1)
        hangleClickPage();
      }}><CaretRight size={32} /></button>
    </div>
  )
}
