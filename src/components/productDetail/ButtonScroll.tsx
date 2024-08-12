import {  useState } from "react"
import { useGlobalProductDetail } from "./GlobalProductDetail";

const dataButtonClick: string[] = [
  "Benefits",
  "Ingredients",
  "How to use",
  "Reviews",
  "FAQs"
]
export default function ButtonScroll() {
  const [active, setActive] = useState<number>(0);
  const { refBenefit, refIngredient, refHowToUse, refReviewPage, refFaqsPage } = useGlobalProductDetail();
  const HangleClickButtonScroll = (num: number) => {
    let ref: HTMLDivElement | null = null;
    switch (num) {
      case 0:
        ref = refBenefit.current;
        break;
      case 1:
        ref = refIngredient.current;
        break;
      case 2:
        ref = refHowToUse.current;
        break;
      case 3:
        ref = refReviewPage.current;
        break;
      case 4:
        ref = refFaqsPage.current;
        break;
    }

    setActive(num);
    window.scrollTo({
      top: (ref ? ref.getBoundingClientRect().top : 0) + window.scrollY,
      behavior: 'smooth'
    })
  }
  return (
    <div className="button-group1">
      {
        dataButtonClick.map((item, index) => (
          <button
            key={index}
            className={index === active ? 'active' : ''}
            onClick={() => HangleClickButtonScroll(index)}>{item}</button>
        ))
      }
    </div>

  )
}
