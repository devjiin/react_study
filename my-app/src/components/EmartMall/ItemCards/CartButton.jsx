import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/add_cart.json";
import { useState } from "react";

const CartButton = ({ setIsLayerOpen }) => {
  const [isVisibleCartAnimation, setIsVisibleCartAnimation] = useState(false);
  const handleClick = () => {
    setIsLayerOpen(true);
    setIsVisibleCartAnimation(false);
  };
  return (
    <>
      <button
        type="button"
        className="sprite__smilefresh--before element-info-cart"
        onClick={handleClick}
      >
        <span className="for-a11y">장바구니 담기</span>
      </button>
      {isVisibleCartAnimation && (
        <Lottie
          animationData={animationData}
          onComplete
          style={{ width: 120, height: 120 }}
        />
      )}
    </>
  );
};

export default CartButton;
