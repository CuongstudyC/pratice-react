import { Check, UserCircle, WarningCircle } from "phosphor-react";

import { useGlobalCart } from "./globalCart";

export default function Information() {
  const { name, setName, phone, setPhone, address, setAddress, error, setError, checkActive, setCheckActive } = useGlobalCart();


  const checkError = () => {
    if (name === '' || phone === '' || address === '') {
      setError("Name or Phone or Address is required");
      setCheckActive(false);
      return;
    }
    const information = {
      name: name,
      phone: phone,
      address: address,
      active: false
    }
    localStorage.setItem("information", JSON.stringify(information));
    const active = !checkActive;
    setCheckActive(checkActive ? false : true);
    if(!active) {
      localStorage.removeItem("information")
    }
  }


  const HangleCloseError = () => {
    setError('');
  }

  return (
    <div className="box-contain">
      <div className="order-summary-title">
        <div>
          <UserCircle size={30} color="#323842FF" />
        </div>
        <div>
          <span>Customer information</span>
        </div>
      </div>
      {
        error ?
          <div className="error">
            <p >{error}</p>
            <button onClick={() => HangleCloseError()}>x</button>
          </div> : ''
      }


      <div className="form">
        <div className="name-phone">
          <div className="name-phone-item">
            <label htmlFor="fullname">Full Name</label>
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="name-phone-item">
            <label htmlFor="phone">Phone</label>
            <input type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value.match(/^\d[\d-]*$/) || e.target.value === '' ? e.target.value : phone)} />
          </div>
        </div>

        <div className="address-form">
          <label htmlFor="address">Address</label>
          <input type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="saveInfo">
          <div>
            <Check size={20}
              onClick={() => checkError()}
              className={`${checkActive ? 'active' : ''}`} />
            <input type="checkbox"
              id="checkBox"
              onChange={() => checkError()}
              checked={checkActive ? true : false}
            />
          </div>
          <div>
            <label htmlFor="checkBox" >Save as default</label>
          </div>
        </div>


        <div className="delivery-note">
          <div>
            <WarningCircle size={24} />
          </div>
          <div className="note-item">
            <span className="title">Delivery note</span>
            <span>
              Eiusmod et nisi non sunt dolor proident consequat irure ut exercitation consectetur fugiat
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
