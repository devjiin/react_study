const ItemImage = ({ imageUrl, isBigSmileItem, isAdultItem, rank }) => {
  return (
    <div className="box__itemcard-img">
      {isBigSmileItem && <span className=""></span>}
      {isAdultItem && <span className=""></span>}
      {rank && <span className="box__label-rank">{rank}</span>}
      <img src={imageUrl} alt="" className="image__itemcard" />
    </div>
  );
};

export default ItemImage;
