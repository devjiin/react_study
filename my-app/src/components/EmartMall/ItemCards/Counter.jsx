import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.target.value == "minus" && count > 0 ? setCount(count-1) : setCount(count +1);
  }
  return (
    <div className="element-info-qty">
      <button className="sprite__smilefresh--before element-info-qty-minus" value="minus" onClick={handleClick}>
        <span className="for-a11y">상품 수 감소</span>
      </button>
      <span className="element-info-item-qty">선택 된 수량</span>
      <button className="sprite__smilefresh--before element-info-qty-plus" value="plus" onClick={handleClick}>
        <span className="for-a11y">상품 수 증가</span>
      </button>
    </div>
  );
};

export default Counter;
