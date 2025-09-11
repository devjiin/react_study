const ItemImage = ({ imageUrl, isBigSmileItem, isAdultItem, rank }) => {
  return (
    <div className="box__thumbnail overflow-hidden relative w-[180px] h-[180px] rounded-lg">
      {isBigSmileItem && <span className=""></span>}
      {isAdultItem && <span className=""></span>}
      <img src={imageUrl} alt={`${rank}위`} className="image w-full h-full object-cover" />
      <span className="box__label-rank block absolute top-0 left-0 z-1 w-[32px] h-[32px] py-8 bg-[#00c400] rounded-br-lg text-sm/[16px] text-white text-center box-border">{rank}</span>
    </div>
  );
};

export default ItemImage;