import { Calendar, CreditCard, CurrencyDollar, Receipt, User } from "phosphor-react";
import { useGlobal } from "../common/globalContext";
import OrderLine from "./OrderLine";

export default function CheckOutContent() {
  const { order, orderDetail } = useGlobal();

  const Order = [...order].pop();
  const OrderDetail = orderDetail.filter(item => item.OrderId === Order?.id);
  
  return (
    Order ? 
    <div className="checkout-content">
      <div className="content">
        <div className="left-content">
          <div>
            <Calendar size={24} />
          </div>
          <div>
            <span>Date</span>
          </div>
        </div>

        <div className="right-content">
          <span>{Order ? (new Date(Order.DateOrder)).toLocaleDateString('en-GB') : ''}</span>
        </div>

      </div>

      <div className="content">
        <div className="left-content">
          <div>
            <User size={24} />
          </div>
          <div>
            <span>Customer</span>
          </div>
        </div>

        <div className="right-content">
          <span>{Order ? Order.NameOrder : ''}</span>
        </div>
      </div>


      <div className="content">
        <div className="left-content">
          <div>
            <CreditCard size={24} />
          </div>
          <div>
            <span>Payment Method</span>
          </div>
        </div>

        <div className="right-content">
          <img src="../../img/mastercard.png" alt="" />
        </div>
      </div>

      <div className="line"></div>

      <div className="content">
        <div className="left-content">
          <div>
              <Receipt size={24} />
          </div>
          <div>
            <span>Order Number</span>
          </div>
        </div>

        <div className="right-content">
          <span>{Order ? Order.PhoneOrder : ''}</span>
        </div>
      </div>


      <div className="content">
        <div className="left-content">
          <div>
          <CurrencyDollar size={24} />
          </div>
          <div>
            <span>Total</span>
          </div>
        </div>

        <div className="right-content">
          <span className="total-price">${Order ? Order.TotalPrice : ''}</span>
        </div>
      </div>


      <OrderLine OrderDetail={OrderDetail}></OrderLine>

    </div> :
    <div className="Empty-checkout">
        <h2>No item check out</h2>
        <div>
          <button>Go Back Shopping</button>
        </div>
    </div>
  )
}
