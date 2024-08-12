import { Receipt } from "phosphor-react";
import { useGlobal } from "../common/globalContext";
import { useRef, useState } from "react";
import { useGlobalCart } from "./globalCart";
import { useNavigate } from "react-router-dom";
import { fetchDataDelete } from "../data/dataCart";


export default function SideRight() {
  const { delivery, product, setActiveModel, user, order, setOrder, orderDetail, setOrderDetail, setProduct, setCart } = useGlobal();
  const [discount, setDiscount] = useState<number>(0);
  const [voucher, setVoucer] = useState<number>(15);
  const selectRef = useRef<HTMLSelectElement>(null!);
  const objectDelivery = Object.values(delivery).find(item => item["active"]);
  const subPrice = product.reduce((acc, curr) => (curr.price * (curr.quantity ? curr.quantity: 0)) + acc, 0)
  const totalPrice = subPrice - discount + Number(objectDelivery !== undefined ? objectDelivery["Price"] : '0');
  const { name, phone, address, setError } = useGlobalCart();
  const refButton = useRef<HTMLButtonElement>(null!);
  const navigate = useNavigate();

  const HangleClickCheckOut = async () => {
    if (!user) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setActiveModel(true);
      return;
    }

    if (name === '' || phone === '' || address === '') {
      setError("Name or Phone or Address is required");
      window.scrollTo({
        top: refButton.current.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      })
      return;
    }
    const information = localStorage.getItem('information');
    if (information) {
      const info = { ...JSON.parse(information) };
      info["active"] = true;
      localStorage.setItem("information", JSON.stringify(info));
    }
    let id = 0;
    if (order.length !== 0) {
      id = Math.max(...order.map(item => item.id), id) + 1;
    }
    const newOrder = [...order];
    newOrder.push({
      id: id,
      UserId: user.id,
      NameOrder: name,
      PhoneOrder: phone,
      AddressOrder: address,
      DateOrder: new Date(),
      TotalPrice: totalPrice
    })

    setOrder(newOrder);

    const orderDetailcopy = [...orderDetail];
    product.forEach(item => {
      orderDetailcopy.push({
        OrderId: id,
        ProductName: item.title,
        Quantity: (item.quantity ? item.quantity : 0),
        Price: item.price,
        imgProduct: item.img[0],
        ProductId: item.id
      })
    })

    setOrderDetail(orderDetailcopy);

    localStorage.setItem("order", JSON.stringify(newOrder));
    localStorage.setItem("orderDetail", JSON.stringify(orderDetailcopy));
    setProduct([]);
    setCart(undefined);
    await fetchDataDelete(user.id);
    navigate('/pratice-react/CheckOut');
  }

  return (
    <div className="side-right-cart">
      <div className="wrapper">
        <div className="payment-title">Payment method</div>
        <div className="payment-methods">Change payment methods</div>

        <div className="master-card">
          <div >
            <img src="/pratice-react/img/mastercard.png" alt="" />
            <span>Mastercard</span>
          </div>

          <div>
            <span>**** 5987</span>
          </div>
        </div>

        <div className="voucher">
          <div className="title">Voucher</div>
          <div className="voucher-item">
            <select ref={selectRef} onChange={(e) => setVoucer(Number(e.target.value))} >
              <option value="15">$15 OFF</option>
              <option value="5">$5 OFF </option>
            </select>
            <button onClick={() => setDiscount(Number(selectRef.current.value))}>Apply</button>
          </div>
          <div className="tag">
            <span>${voucher} Off</span>
          </div>

        </div>

        <div className="summary">
          <div className="summary-title">
            <Receipt size={24} />
            <span>Summary</span>
          </div>

          <div className="summary-content">
            <span>Subtotal</span>
            <span>${subPrice}</span>
          </div>

          <div className="summary-content">
            <span>Discount</span>
            <span>-${discount}</span>
          </div>

          <div className="summary-content">
            <span>Deliverry Fee</span>
            <span>${Number(objectDelivery !== undefined ? objectDelivery["Price"] : '0')}</span>
          </div>

          <div className="line"></div>

          <div className="summary-content">
            <span>Total</span>
            <span className="total-price">${totalPrice}</span>
          </div>
        </div>


        <div className="button-payment">
          <button onClick={() => HangleClickCheckOut()} ref={refButton}>Proceed to payment</button>
        </div>
      </div>
    </div>
  )
}
