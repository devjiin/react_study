const Counter = () => {
  return (
    <div className="element-info-qty">
      <button className="sprite__smilefresh--before element-info-qty-minus">
        <span className="for-a11y">상품 수 감소</span>
      </button>
      <span className="element-info-item-qty">선택 된 수량</span>
      <button className="sprite__smilefresh--before element-info-qty-plus">
        <span className="for-a11y">상품 수 증가</span>
      </button>
    </div>
  );
};

export default Counter;
