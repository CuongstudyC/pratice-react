import { useEffect, useState } from "react";
import { useGlobal } from "../common/globalContext";
import OfferContentMain from "./OfferContentMain";
import OfferTitleItem from "./OfferTitleItem";
import { Link } from 'react-router-dom';

export default function OfferContentTitle() {
  const { order, setOrder, orderDetail, setOrderDetail } = useGlobal();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<number>(0);
  useEffect(() => {
    const order1 = localStorage.getItem("order");
    
    if (order1) {   
      const newOrder = JSON.parse(order1);
      setOpen(newOrder.length !== 0 ? [...newOrder][newOrder.length -1].id : 0);
      setOrder([...newOrder].sort((a,b) => b.id - a.id));
    }
    
        const orderDetail1 = localStorage.getItem("orderDetail");
    if (orderDetail1) {
      const newOrderDetail = JSON.parse(orderDetail1);
      setOrderDetail([...newOrderDetail]);
    }

    setLoading(true);

  }, [loading])


  return (
    <div className="offer-box-wrapper">
      {
         order.length !== 0 ?  order.map((orderItem) => (
            <div
             className={`acrodian-offer${open === orderItem.id ? ' active': ''}`}
               onClick={(() => setOpen(orderItem.id))} key={orderItem.id}>
              <OfferTitleItem orderItem={orderItem} key={orderItem.id} open={open}></OfferTitleItem>
              <OfferContentMain detailItem={orderDetail.filter(detailItem => detailItem.OrderId === orderItem.id)} key={2000} ></OfferContentMain>
            </div>
          )
        ) :
         <div className="empty-history">
              <h2>Empty History</h2>
              <div>
                <Link to={'/pratice-react/Product'} className="link-product"> <button>Go Back To Shopping</button></Link>
              </div>
         </div>
      }
    </div>

  )
}
