import clsx from "clsx";
import { useState } from "react";

const FavoritButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    const newState = !isPressed;
    setIsPressed(newState);
    const alertText = newState
      ? "관심상품이 등록되었습니다."
      : "관심상품이 등록이 해재되었습니다";
    alert(alertText);
  };
  return (
    <button
      className={clsx(
        "sprite__smilefresh--after button__favorite-item",
        isPressed && "js-active",
      )}
      aria-pressed={isPressed}
      aria-label="관심상품 등록하기"
      onClick={handleClick}
    ></button>
  );
};

export default FavoritButton;
