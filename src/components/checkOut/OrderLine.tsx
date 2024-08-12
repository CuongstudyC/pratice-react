import { OrderDetailType } from '../data/dataOrderDetail';

export default function OrderLine({ OrderDetail }: { OrderDetail: OrderDetailType[] }) {

  return (
    <div className="order-line">
      <div className="title">Order Line</div>
      <div className="line"></div>
      {
        OrderDetail.length !== 0 && OrderDetail.map((item, index) => (
          <div key={index}>
            <div className="product-item">
              <div className="product-left">
                <div>
                  <img src={item.imgProduct} alt="" />
                </div>
                <div className="content-product">
                  <span className='product-title-checkout'>{item.ProductName}</span>
                  <span className='size'>Size: 50ml</span>
                  <div className='tag'>
                    <span>x{item.Quantity} Items</span>
                  </div>
                </div>
              </div>

              <div className="product-right">
                <span>${item.Price}</span>
              </div>
            </div>
            {index !== OrderDetail.length - 1 && <div className='line'></div>}
          </div>
        ))
      }

    </div>

  )
}
