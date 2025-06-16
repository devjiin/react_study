const ItemPrice = ({ discountRate, itemPrice, sellPrice }) => {
  return (
    <span className="box__itemcard-price-area">
      <span className="box__price-seller">
        <span className="for-a11y">판매가</span>
        <strong className="text__price-seller">{itemPrice}</strong>
        <span className="text__unit">원</span>
      </span>
    </span>
  );
};

export default ItemPrice;
