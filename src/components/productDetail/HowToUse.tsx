
import { useState } from "react";
import { useGlobalProductDetail } from "./GlobalProductDetail"

export default function HowToUse() {
  const { refHowToUse } = useGlobalProductDetail();
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="how-to-use" ref={refHowToUse}>
      <h2>How to use</h2>
      <div className="howToUse-item">
        <img src="/pratice-react/img/howtouse.jpg" alt="" />
        <div className="button-used">
          <button onClick={() => setActive(true)}>
            <span>Watch video</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2L12 8L4 14V2Z" fill="black" stroke="white" strokeWidth="1" />
            </svg>
          </button>
        </div>

        {
        active &&
        <div className="howToUse-video">
          <div className="video">
            <iframe src="https://www.youtube.com/embed/xoj4o8D19IQ" title="Tập Đầy Đủ 5 | My Deer Friend Nokotan | It&#39;s Anime［Phụ Đề Đa Ngôn Ngữ］" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="button-exit" onClick={() => setActive(false)}>
            <span>x</span>
          </div>
        </div>
      }

      </div>
    </div>
  )
}
