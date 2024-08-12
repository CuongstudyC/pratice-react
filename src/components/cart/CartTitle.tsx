import { useCallback, useEffect, useState } from "react";
import { useGlobal } from "../common/globalContext"

export default function CartTitle() {
  const [countCart, setCountCart] = useState<number | undefined>(0);
  const { hangleCountLengthCart } = useGlobal();

  const fnCountCart = useCallback(async () => {
    setCountCart(await hangleCountLengthCart());
  }, [hangleCountLengthCart])

  useEffect(() => {
    fnCountCart();
  }, [fnCountCart])
  return (
    <div className="cart-title">
      <span>My Shopping Bag ({countCart} Items)</span>
    </div>
  )
}
