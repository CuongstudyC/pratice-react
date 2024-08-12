
import { useGlobal } from "../common/globalContext";
import { OrderDetailType } from "../data/dataOrderDetail";
import { Link } from 'react-router-dom';

export default function OfferContentMain({ detailItem }: { detailItem: OrderDetailType[] }) {
  const { setOrderDetail, orderDetail, order, setOrder } = useGlobal();

  const HangleClickBuyAgain = (item: OrderDetailType) => {
    let newPrice = 0;
    const newOrderDetail = [...orderDetail].map(i => {
      if (i.ProductId === item.ProductId) {
        newPrice += i.Price;
        return { ...i, Quantity: i.Quantity + 1 }
      }
      return {...i};
    })

    const newOrder = [...order].map(i => {
      if (i.id === item.OrderId) {
        return { ...i, TotalPrice: i.TotalPrice + newPrice }
      }
      return {...i};
    })
    setOrderDetail(newOrderDetail);

    setOrder(newOrder);

    localStorage.setItem("order", JSON.stringify(newOrder));
    localStorage.setItem("orderDetail", JSON.stringify(newOrderDetail));

  }

  return (
    <div className="offer-content-max-height">
      {
        detailItem.map((item,index) => (
          <div key={index}>
            <div className="offer-content-item">
              <div className="side-left-main">
                <div className="left-item">
                  <img src={item.imgProduct} alt="" />
                </div>

                <div className="right-item">
                  <div className="product-name">
                    {item.ProductName}
                  </div>
                  <div className="tag">
                    <span>x{item.Quantity} Items</span>
                  </div>
                  <div className="price">
                    ${item.Price}
                  </div>
                </div>

              </div>

              <div className="side-right-main">
                <button onClick={() => HangleClickBuyAgain(item)}>Buy again</button>
                <Link to={`/Product/${item.ProductId}`} style={{textDecoration: 'none'}}><button>View product</button></Link>
              </div>
            </div>

            {
              index < detailItem.length -1 && <div className="line"></div>
            } 
          </div>
        ))
      }

    </div>

  )
}
