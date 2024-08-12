
import { useGlobalProductDetail } from "./GlobalProductDetail";


export default function ReviewerPage({LengthPage} : {LengthPage : number}) {
  const {page, setPage} = useGlobalProductDetail();
  return (
    <div className="page">
      <button onClick={() => setPage(page === 1 ? 1 : page -1)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19l-7-7 7-7" stroke="#424955FF" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </button>
      {
        Array(LengthPage).fill(0).map((_,index) => {
          if(index +1 >= page -1 && index +1 <= page +3  ) {
            return <button key={index} className={(page === index +1) ? 'active' : ''} onClick={() => setPage(index +1)}>{index +1}</button>
          }
        })
      }
      <button onClick={() => setPage(page === LengthPage ? page : page +1)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5l7 7-7 7" stroke="#424955FF" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
