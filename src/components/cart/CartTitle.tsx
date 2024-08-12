import { useGlobal } from "../common/globalContext"

export default function CartTitle() {
  const {cart} = useGlobal();

  return (
    <div className="cart-title">
        <span>My Shopping Bag ({Object.keys(cart).length} Items)</span>
    </div>
  )
}
