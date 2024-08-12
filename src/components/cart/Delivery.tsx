import { CheckCircle, Truck } from "phosphor-react";
import { deliveryData } from "../data/dataDelivery";
import { useGlobal } from "../common/globalContext";
import { useState } from "react";


export default function Delivery() {
  const {delivery, setDelivery} = useGlobal();
  const [check, setCheck] = useState<number>(0);


  const HangleChangeRadio = (item : string, num: number) => {
    setDelivery(deliveryData[item]);
    setCheck(num);
  }
  
  const HangleClickActiveDelivery = (id: number) => {
      const newDelivery = {...delivery}
      Object.values(newDelivery).map(item => {
        item["active"] = false;
        if(item.id === id) {
          item["active"] = true;
        }
        return item;
      })

      setDelivery({...newDelivery});
      
  }
  return (
    <div className="box-contain">
      <div className="order-summary-title">
        <div>
          <Truck size={30} />
        </div>
        <div>
          <span>Delivery options</span>
        </div>

      </div>

      <div className="operator">
        <span>Operator</span>
        <div className="selected">
          {
            Object.keys(deliveryData).map((item,index) => (
              <div className="selected-item" key={item} >
              <input type="radio" id={item} name="operator"
               onChange={() => HangleChangeRadio(item,index)}
               checked={check === index ? true : false}
               />
              <label htmlFor={item}>{item}</label>
            </div>
            ))
          }
        </div>
      </div>

      <div className="delivery">
          {
            Object.values(delivery).map((item,index) => (                       
              <div className={`delivery-item ${item["active"] ? 'active' : ''}`} 
                    key={Number(item["id"])}
                    onClick={() => HangleClickActiveDelivery(Number(item["id"]))}>
              <div>
                <CheckCircle size={24} className={`${item["active"] ? 'active' : ''}`}/>
              </div>
              <div className={`delivery-item-content ${item["active"] ? 'active': ''}`}>
                  <span>${Number(item["Price"])}</span>
                  <span>{Object.keys(delivery).find((_, index1) => index1 === index)} delivery</span>
                  <span>Est. arrival:
                 {(new Date(item["Arrival"].toString())).toDateString() === (new Date()).toDateString()?
                  ' Today' : `${(new Date(item["Arrival"].toString()).getDate() < 10 ? ' 0' : ' ')}${(new Date(item["Arrival"].toString()).getDate())}/${(new Date(item["Arrival"].toString()).getMonth() +1 < 10 ? '0': '')}${(new Date(item["Arrival"].toString()).getMonth() +1)}`}</span>
              </div>
            </div>
            ))
          }

      </div>
    </div>
  )
}