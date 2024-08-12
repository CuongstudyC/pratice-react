import { useEffect, useState } from "react";
import ReviewerPage from "./ReviewerPage";
import { Comment, CommentType } from "../data/dataComment";
import { useGlobalProductDetail } from "./GlobalProductDetail";

export default function ReviewSideRight() {
  const [comment, setComment] = useState<CommentType[] | undefined>(undefined);
  const { page } = useGlobalProductDetail();
  const LengthPage = Math.ceil(Comment.length /3);
  // const resetTime = (date: Date) => {
  //   return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // }
  useEffect(() => {
    setComment([...Comment].reverse());

  }, [])
  return (
    <div className="content-item">
      <div className="box-content-item">
        {
          Array(LengthPage).fill(null).map((_,index) => {
            return (

              <div className="content-comment-item" key={index} style={{transform: `translateX(-${100*(page -1)}%)`}}>

                {
                  comment ? comment.map((item, i) => {
                    
                    if (i >= (page * 3 - 3) && (i < page * 3)) {
                      
                      return <div className="box-comment" key={item.id}>
                        <div className="user-title">
                          <img src={item.avartar}
                            alt="" style={{
                              background:
                                `rgb(${Math.floor(Math.random() * 255) + 1},
                           ${Math.floor(Math.random() * 255) + 1},
                          ${Math.floor(Math.random() * 255) + 1})`
                            }} />
                          <div className="info-user">
                            <div className="name-user">
                              <h2>{item.name}</h2>
                              <span>
                                {
                                  Math.ceil((new Date().getTime() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24)) + ' days ago'
                                }
                              </span>
                            </div>

                            <div className="star">
                              {
                                new Array(5).fill(null).map((_, index) => {
                                  if (index + 1 <= item.rating) {
                                    return (
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" key={index}>
                                        <defs>
                                          <linearGradient id="rating_gradient">
                                            <stop offset="50%" stopColor="rgba(243,198,63,1)" />
                                            <stop offset="49.99%" stopColor="rgba(243,198,63,1)" />
                                          </linearGradient>
                                        </defs>
                                        <path
                                          d="M11.2367 2.20032C11.5192 1.52111 12.4814 1.52112 12.7639 2.20033L15.0875 7.78692C15.2066 8.07326 15.4759 8.2689 15.785 8.29369L21.8162 8.7772C22.5495 8.83599 22.8468 9.75107 22.2881 10.2296L17.693 14.1659C17.4575 14.3676 17.3546 14.6842 17.4266 14.9858L18.8305 20.8712C19.0012 21.5868 18.2227 22.1523 17.595 21.7689L12.4314 18.615C12.1668 18.4534 11.8339 18.4534 11.5693 18.615L6.4057 21.7689C5.77793 22.1523 4.99951 21.5868 5.17019 20.8712L6.57408 14.9858C6.64604 14.6842 6.54318 14.3676 6.30766 14.1659L1.71252 10.2296C1.15385 9.75107 1.45118 8.83599 2.18445 8.7772L8.21565 8.29369C8.52477 8.2689 8.79405 8.07326 8.91315 7.78692L11.2367 2.20032Z"
                                          fill="url(#rating_gradient)" />
                                        <path
                                          d="M11.6984 2.39234C11.8101 2.12378 12.1906 2.12378 12.3023 2.39234L14.6259 7.97894C14.817 8.43839 15.249 8.75232 15.7451 8.79209L21.7763 9.27561C22.0662 9.29885 22.1838 9.66068 21.9629 9.84991L17.3677 13.7861C16.9898 14.1099 16.8248 14.6178 16.9402 15.1018L18.3441 20.9873C18.4116 21.2702 18.1038 21.4938 17.8556 21.3422L12.692 18.1883C12.2674 17.9289 11.7333 17.9289 11.3086 18.1883L6.14508 21.3422C5.89685 21.4938 5.58906 21.2702 5.65655 20.9873L7.06044 15.1018C7.1759 14.6178 7.01086 14.1099 6.63294 13.7861L2.0378 9.8499C1.8169 9.66068 1.93447 9.29885 2.2244 9.27561L8.25561 8.79209C8.75163 8.75232 9.18371 8.43839 9.37481 7.97894L11.6984 2.39234Z"
                                          stroke="rgba(0,0,0,0)" />
                                      </svg>
                                    )
                                  }
                                  return (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" key={index}>
                                      <path
                                        d="M11.2367 2.20032C11.5192 1.52111 12.4814 1.52112 12.7639 2.20033L15.0875 7.78692C15.2066 8.07326 15.4759 8.2689 15.785 8.29369L21.8162 8.7772C22.5495 8.83599 22.8468 9.75107 22.2881 10.2296L17.693 14.1659C17.4575 14.3676 17.3546 14.6842 17.4266 14.9858L18.8305 20.8712C19.0012 21.5868 18.2227 22.1523 17.595 21.7689L12.4314 18.615C12.1668 18.4534 11.8339 18.4534 11.5693 18.615L6.4057 21.7689C5.77793 22.1523 4.99951 21.5868 5.17019 20.8712L6.57408 14.9858C6.64604 14.6842 6.54318 14.3676 6.30766 14.1659L1.71252 10.2296C1.15385 9.75107 1.45118 8.83599 2.18445 8.7772L8.21565 8.29369C8.52477 8.2689 8.79405 8.07326 8.91315 7.78692L11.2367 2.20032Z"
                                        fill="rgba(222,225,230,1)" />
                                      <path
                                        d="M11.6984 2.39234C11.8101 2.12378 12.1906 2.12378 12.3023 2.39234L14.6259 7.97894C14.817 8.43839 15.249 8.75232 15.7451 8.79209L21.7763 9.27561C22.0662 9.29885 22.1838 9.66068 21.9629 9.84991L17.3677 13.7861C16.9898 14.1099 16.8248 14.6178 16.9402 15.1018L18.3441 20.9873C18.4116 21.2702 18.1038 21.4938 17.8556 21.3422L12.692 18.1883C12.2674 17.9289 11.7333 17.9289 11.3086 18.1883L6.14508 21.3422C5.89685 21.4938 5.58906 21.2702 5.65655 20.9873L7.06044 15.1018C7.1759 14.6178 7.01086 14.1099 6.63294 13.7861L2.0378 9.8499C1.8169 9.66068 1.93447 9.29885 2.2244 9.27561L8.25561 8.79209C8.75163 8.75232 9.18371 8.43839 9.37481 7.97894L11.6984 2.39234Z"
                                        stroke="rgba(0,0,0,0)" />
                                    </svg>
                                  )
                                })
                              }
                            </div>

                          </div>
                        </div>
                        <div className="user-content">
                          <p>
                            {item.content}
                          </p>
                        </div>
                      </div>
                    }
                  })
                    : ''
                }
              </div>
            )

          })

        }
      </div>
      <ReviewerPage LengthPage={LengthPage}></ReviewerPage>
    </div>
  )
}
