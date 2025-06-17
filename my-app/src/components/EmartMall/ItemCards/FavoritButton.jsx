import clsx from "clsx";
import { useState } from "react";

const FavoritButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    setIsPressed((prev) => !prev);
    const alertText = isPressed
      ? "장바구니에 담겼습니다"
      : "장바구니 담기가 해재되었습니다";
    alert(alertText);
  };
  return (
    <button
      className={clsx(
        "sprite__smilefresh--after button__favorite-item",
        isPressed && "js-active"
      )}
      aria-pressed={isPressed}
      aria-label="관심상품 등록하기"
      onClick={handleClick}
    ></button>
  );
};

export default FavoritButton;
