
import { useEffect, useRef, useState } from "react";
import { FaqsLeft, FaqsRight } from "../data/dataFaqs";
import { useGlobalProductDetail } from "./GlobalProductDetail"


export default function Faqs() {
  const {refFaqsPage} = useGlobalProductDetail();
  const refbutton = useRef<HTMLDivElement>(null!);
  const [height, setHeight] = useState<number>(0);
  const [open, setOpen] = useState<number>(0);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  useEffect(() => {
      const HeightButton = refbutton.current.getBoundingClientRect().height +20;
      setHeight(HeightButton || 0);
  },[open])

  useEffect(() => {
    const TotalHeight = refFaqsPage && refFaqsPage.current ?  refFaqsPage.current.getBoundingClientRect().height : 0;
    setTotalHeight(TotalHeight || 0);
    
  },[open, refFaqsPage ])
  
  return (
    <div className="faqs" ref={refFaqsPage}>
      <div className="container">
        <h2>FAQs</h2>
        <div className="faqs-content">

          <div className="faqs-content-item">
            {
              FaqsLeft.map((item,index) => (
                <div key={item.id} className={`box-content-faqs${open === index ? ' open' : ''}`}
                 style={{maxHeight: ((open === index) ? totalHeight : height)}}
                 onClick={() => setOpen(index !== open ? index : -1)} >
                <div className="title-faqs-content-item" ref={refbutton}>
                  <p>{item.title}</p>
                
                  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 
                    <path d={open === index ? "M 4 6 L 12 18 L 20 6" : "M9 5l7 7-7 7"} stroke="#00BDD6FF" strokeWidth="2" fill="none" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                 
                </div>
  
                <span>{item.content}</span>
              </div>
              ))
            }


          </div>

          <div className="faqs-content-item" >
            {
              FaqsRight.map((item,index) => (
                <div key={item.id} className={`box-content-faqs${open === (index + FaqsLeft.length) ? ' open' : ''}`}
                 style={{maxHeight: ((open === index + FaqsLeft.length) ? totalHeight : height)}}
                 onClick={() => setOpen(index +FaqsLeft.length !== open ? index + FaqsLeft.length  : -1)} >
                <div className="title-faqs-content-item" ref={refbutton}>
                  <p>{item.title}</p>
                
                  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 
                    <path d={open === index + FaqsLeft.length ? "M 4 6 L 12 18 L 20 6" : "M9 5l7 7-7 7"} stroke="#00BDD6FF" strokeWidth="2" fill="none" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                 
                </div>
  
                <span>{item.content}</span>
              </div>
              ))
            }

          </div>


        </div>
      </div>
    </div>

  )
}
