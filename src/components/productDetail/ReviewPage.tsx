
import { useGlobalProductDetail } from "./GlobalProductDetail";

import ReviewSideLeft from "./ReviewSideLeft";
import ReviewSideRight from "./ReviewSideRight";
import ReviewTitle from "./ReviewTitle";

export default function ReviewPage() {
  const {refReviewPage} = useGlobalProductDetail();
  return (
    <div className="page-reviewes" ref={refReviewPage}>
        <ReviewTitle></ReviewTitle>
        <div className="content-reviewes">
            <ReviewSideLeft></ReviewSideLeft>
            <ReviewSideRight></ReviewSideRight>
        </div>
    </div>
  )
}
