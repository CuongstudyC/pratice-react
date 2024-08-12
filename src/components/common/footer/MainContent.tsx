import { CaretDown } from "phosphor-react";
import { useGlobal } from "../globalContext";

export default function MainContent() {

  const { language, setLanguage } = useGlobal();
  return (
    <>
      <div className="main-content">
        <div className="about">
          <span>About</span>
          <span>Home</span>
          <span>Shop</span>
          <span>Our story</span>
          <span>Blogs</span>
        </div>

        <div className="help">
          <span>Help</span>
          <span>Shipping & Returns</span>
          <span>Track Order</span>
          <span>FAQs</span>
        </div>

        <div className="contact">
          <span>Contact</span>
          <span>Phone:</span>
          <span>(+1) 123 456 7893</span>
          <span>Email:</span>
          <span>name@email.com</span>
        </div>
      </div>

      <div className="button-english">
        <select name="" id="" onChange={(e) => setLanguage(e.target.value === "EN" ? "EN" : "VI")} value={language}>
          <option value={language === "EN" ? "EN" : "VI"} >
            {
              language === "EN" ? "English" : "Viet Nam"
            }
          </option>
          <option value={language === "EN" ? "VI" : "EN"}>
            {
              language === "EN" ? "Viet Nam" : "English"
            }
          </option>
        </select>
        <CaretDown size={12} color="#DEE1E6FF" />
      </div>
    </>
  )
}
