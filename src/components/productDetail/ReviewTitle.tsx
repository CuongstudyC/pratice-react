import { useEffect, useRef, useState } from "react"
import ModelReview from "./ModelReview";

export default function ReviewTitle() {
  const [toggleWriteComment, setToggleWriteComment] = useState<boolean>(false);
  const refModeReviewer = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if(toggleWriteComment) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({
        top: refModeReviewer.current.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      })
    }else {
      document.body.style.overflow = 'auto';
    }
  },[toggleWriteComment])
  
  return (
    <div className="title-reviewes">
      <h2>Reviews</h2>
      <button>

        <svg className="w-6 h-6" fill="#00BDD6FF" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z" />
        </svg>
        <span
          onClick={() => setToggleWriteComment(toggleWriteComment ? false : true)}>
          Write a review
        </span>
      </button>
      {
        toggleWriteComment && <ModelReview 
        setToggle={setToggleWriteComment}
        refModeReviewer={refModeReviewer}
        ></ModelReview>
      }
    </div>
  )
}
