const ItemImage = ({ imageUrl, isBigSmileItem, isAdultItem, rank }) => {
  return (
    <div className="box__thumbnail">
      {isBigSmileItem && <span className=""></span>}
      {isAdultItem && <span className=""></span>}
      <img src={imageUrl} alt={`${rank}위`} className="image" />
      <span className="box__label-rank">{rank}</span>
    </div>
  );
};

export default ItemImage;
