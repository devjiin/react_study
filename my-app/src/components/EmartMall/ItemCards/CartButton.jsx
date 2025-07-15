import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const cartAniStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 120,
  height: 120,
};

const CartButton = ({ setIsLayerOpen }) => {
  const [lottieData, setLottieData] = useState(null);
  const [isVisibleCartAnimation, setIsVisibleCartAnimation] = useState(false);
  const handleClick = () => {
    setIsLayerOpen(true);
    setIsVisibleCartAnimation(true);
  };

  useEffect(() => {
    fetch("//script.gmarket.co.kr/starro/mobile/lottie/add_cart.json")
      .then((res) => res.json())
      .then(setLottieData);
  }, []);

  useEffect(() => {
    if (isVisibleCartAnimation) {
      const timer = setTimeout(() => {
        setIsVisibleCartAnimation(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisibleCartAnimation]);
  return (
    <>
      <button
        type="button"
        className="sprite__smilefresh--before element-info-cart"
        onClick={handleClick}
      >
        <span className="for-a11y">장바구니 담기</span>
      </button>
      {isVisibleCartAnimation &&
        createPortal(
          <Lottie
            animationData={lottieData}
            loop={false}
            style={cartAniStyle}
          />,
          document.body,
        )}
    </>
  );
};

export default CartButton;
