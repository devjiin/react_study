import { useContext } from "react";
import { Layercontext } from "../../../pages/Page2";

const CartButton = () => {
  const { setIsLayerOpen } = useContext(Layercontext);
  return (
    <button
      type="button"
      className="sprite__smilefresh--before element-info-cart"
      onClick={() => setIsLayerOpen(true)}
    >
      <span className="for-a11y">장바구니 담기</span>
    </button>
  );
};

export default CartButton;
