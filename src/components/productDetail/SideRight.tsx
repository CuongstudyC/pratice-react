import { useNavigate } from "react-router-dom";
import { useGlobal } from "../common/globalContext";
import { useGlobalProductDetail } from "./GlobalProductDetail"
import { useState } from "react";
import { Comment } from "../data/dataComment";
import { fetchDataCreate, fetchDataFindDetailCart, fetchDataUpdate } from "../data/dataCart";

export default function SideRight() {
  const { product, } = useGlobalProductDetail();
  const { cart, setCart, order, user, setUser, setActiveModel } = useGlobal();
  const [cartQuantity, setCartQuantity] = useState<number>(1);
  const { avergeStar } = useGlobalProductDetail();
  // const moveCursorToEnd = (e: HTMLElement) => {
  //   const range = document.createRange();
  //   const selection = window.getSelection();
  //   range.selectNodeContents(e);
  //   range.collapse(false); // Đặt con trỏ ở cuối nội dung
  //   selection?.removeAllRanges();
  //   selection?.addRange(range);
  // };

  // const HangleChangeButton = (e: React.FormEvent<HTMLButtonElement>) => {
  //     if(!Number(e.currentTarget.innerText)){
  //       e.currentTarget.innerText = cartQuantity.toString();
  //       moveCursorToEnd(e.currentTarget);
  //       return;
  //     }
  //     if(Number(e.currentTarget.innerText) > 100) {
  //       e.currentTarget.innerText = "100";
  //     }
  //     if(Number(e.currentTarget.innerText) < 0) {
  //       e.currentTarget.innerText  = "0";
  //     }
  //     setCartQuantity(Number(e.currentTarget.innerText));
  //     moveCursorToEnd(e.currentTarget);
  // }

  const hangleClickCartInDetail = async () => {
    const token = localStorage.getItem("auth");
    if (!user || !token) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setActiveModel(true);
      return;
    }
    const findCart = await fetchDataFindDetailCart(user.id, (product ? product.id : 0));
    if (!findCart) {
      await fetchDataCreate({ userId: user.id, productId: (product ? product.id : 0) });
    }

    const data = await fetchDataUpdate({ userId: user.id, productId: (product ? product.id : 0), quantity: (cartQuantity + (findCart ? findCart.quantity : 0)) });
    if (data && product) {
      setCart(cart?.map(item => {
        if (item.userId === user.id && item.productId === product.id) {
          return { ...data }
        }
        return { ...item }
      }))
      return;
    }
    if (token) {
      localStorage.removeItem("auth");
      setUser(undefined);
    }
  }

  const navigate = useNavigate();

  const hangleLinkPageCart = () => {
    const token = localStorage.getItem("auth");
    if (!user || !token) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setActiveModel(true);
      return;
    }
    navigate("/pratice-react/Cart");
  }

  return (
    <div className="side-right">
      <div className="content-product">
        <h2>{product?.title}</h2>
        <p>Aliquip fugiat ipsum nostrud ex et eu incididunt</p>
        <div className="price">
          <span>${product?.price}</span>
          <span>${product?.oldPrice}</span>
        </div>

        <p>{product?.description}</p>

        <div className="total-reviewes">
          <div>
            <strong>{[...Comment].length}</strong>
            <span> reviewes</span>
          </div>

          <div>
            <strong>{[...order].length}</strong>
            <span> sold</span>
          </div>

          <div className="star">
            <div style={{ display: "flex" }}>
              {
                Array(5).fill(0).map((_, index) => {
                  if (index + 1 <= avergeStar) {
                    return (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" key={index}>
                        <defs><linearGradient id="rating_gradient"><stop offset="50%" stopColor="rgba(243,198,63,1)" /><stop offset="49.99%" stopColor="rgba(243,198,63,1)" /></linearGradient></defs>
                        <path d="M11.2367 2.20032C11.5192 1.52111 12.4814 1.52112 12.7639 2.20033L15.0875 7.78692C15.2066 8.07326 15.4759 8.2689 15.785 8.29369L21.8162 8.7772C22.5495 8.83599 22.8468 9.75107 22.2881 10.2296L17.693 14.1659C17.4575 14.3676 17.3546 14.6842 17.4266 14.9858L18.8305 20.8712C19.0012 21.5868 18.2227 22.1523 17.595 21.7689L12.4314 18.615C12.1668 18.4534 11.8339 18.4534 11.5693 18.615L6.4057 21.7689C5.77793 22.1523 4.99951 21.5868 5.17019 20.8712L6.57408 14.9858C6.64604 14.6842 6.54318 14.3676 6.30766 14.1659L1.71252 10.2296C1.15385 9.75107 1.45118 8.83599 2.18445 8.7772L8.21565 8.29369C8.52477 8.2689 8.79405 8.07326 8.91315 7.78692L11.2367 2.20032Z" fill="url(#rating_gradient)" />
                        <path d="M11.6984 2.39234C11.8101 2.12378 12.1906 2.12378 12.3023 2.39234L14.6259 7.97894C14.817 8.43839 15.249 8.75232 15.7451 8.79209L21.7763 9.27561C22.0662 9.29885 22.1838 9.66068 21.9629 9.84991L17.3677 13.7861C16.9898 14.1099 16.8248 14.6178 16.9402 15.1018L18.3441 20.9873C18.4116 21.2702 18.1038 21.4938 17.8556 21.3422L12.692 18.1883C12.2674 17.9289 11.7333 17.9289 11.3086 18.1883L6.14508 21.3422C5.89685 21.4938 5.58906 21.2702 5.65655 20.9873L7.06044 15.1018C7.1759 14.6178 7.01086 14.1099 6.63294 13.7861L2.0378 9.8499C1.8169 9.66068 1.93447 9.29885 2.2244 9.27561L8.25561 8.79209C8.75163 8.75232 9.18371 8.43839 9.37481 7.97894L11.6984 2.39234Z" stroke="rgba(0,0,0,0)" />
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

            <div>
              <b>{avergeStar}</b>
            </div>
          </div>
        </div>

        <div className="free-ship">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#117B34FF" strokeWidth="2" />
            <path d="M6 12L10 16L18 8" stroke="#117B34FF" strokeWidth="2" />
          </svg>
          <span>Free shipping on orders over $49USD</span>
        </div>

        <div className="free-ship" style={{ marginBottom: "10px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#117B34FF" strokeWidth="2" />
            <path d="M6 12L10 16L18 8" stroke="#117B34FF" strokeWidth="2" />
          </svg>
          <span>Free + easy returns</span>
        </div>

        <div className="quantity">
          <div>
            <span>Quantity</span>
          </div>

          <div className="button-group">
            <button onClick={() => setCartQuantity(cartQuantity === 1 ? 1 : cartQuantity - 1)}>
              -</button>
            {/* contentEditable="true": có thể chỉnh sửa */}
            <button>{cartQuantity}</button>
            <button onClick={() => setCartQuantity(cartQuantity === 1000 ? 1000 : cartQuantity + 1)}>+</button>
          </div>

        </div>

        <div className="cart-checkout">
          <button onClick={() => hangleClickCartInDetail()}>
            <svg className="w-6 h-6" fill="#00BDD6FF" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-9.83-3.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2l-2.76 5H8.53l-.13-.27L6.16 6l-.95-2l-.94-2H1v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" /></svg>
            <span>Add to bag</span>
          </button>
          <button onClick={() => hangleLinkPageCart()}>
            <span>Checkout</span>
          </button>

        </div>

      </div>
    </div>
  )
}
