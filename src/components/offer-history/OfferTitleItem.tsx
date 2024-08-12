import { OrderType } from "../data/dataOrder";

export default function OfferTitleItem({orderItem, open}: {orderItem: OrderType, open: number}) {

  return (
    <div className="offer-content-item item-title" key={orderItem.id}>
      <div className="offer-side-left-title">
        <span>Delivery on  {orderItem ? new Date(orderItem.DateOrder).toDateString() : '' }</span>
        <span>Order #{orderItem ? orderItem.id : ''}</span>
      </div>

      <div className="offer-side-right-title">

        <div>
          <span>Manage order</span>
        </div>

        <div>
          <span onClick={() => window.print()}>View invoice</span>
        </div>

        <div>
          <svg width="16" height="16" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <path d={open === orderItem.id ? "M 4 6 L 12 18 L 20 6" : "M9 5l7 7-7 7"} stroke="#00BDD6FF" strokeWidth="2" fill="none" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </div>

      </div>
    </div>
  )
}
