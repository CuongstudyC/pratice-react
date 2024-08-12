
import { useGlobalProduct } from "./GlobalProduct";
import { CaretLeft, CaretRight } from "phosphor-react";

export default function ProductPage() {
  const { page, setPage, refButton, LengthPage } = useGlobalProduct();
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
        page > 2 &&
        <>
          <button
            onClick={() => {
              setPage(1);
              hangleClickPage();
            }}>
            1
          </button>
          {
            page !== 3 && <button>...</button>
          }

        </>
      }
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
      {
        (page < LengthPage - 4) &&
        <>{
          page !== LengthPage - 5 &&
          <button>...</button>
        }

          <button
            onClick={() => {
              setPage(LengthPage);
              hangleClickPage();
            }}>
            {LengthPage}
          </button>
        </>
      }
      <button onClick={() => {
        setPage(page === LengthPage ? page : page + 1)
        hangleClickPage();
      }}><CaretRight size={32} /></button>
    </div>
  )
}
