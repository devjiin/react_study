import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(1);
  const handleClick = (e) => {
    if (e.target.value === "minus") {
      count <= 1 ? setCount(1) : setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="element-info-qty">
      <button
        className="sprite__smilefresh--before element-info-qty-minus"
        value="minus"
        onClick={(e) => handleClick(e)}
      >
        <span className="for-a11y">상품 수 감소</span>
      </button>
      <span className="element-info-item-qty">
        <span className="for-a11y">선택된 수량</span>
        {count}
      </span>
      <button
        className="sprite__smilefresh--before element-info-qty-plus"
        value="plus"
        onClick={(e) => handleClick(e)}
      >
        <span className="for-a11y">상품 수 증가</span>
      </button>
    </div>
  );
};

export default Counter;
