const ItemImage = ({ imageUrl, isBigSmileItem, isAdultItem, rank }) => {
  return (
    <div className="box__thumbnail relative h-[180px] w-[180px] overflow-hidden rounded-lg">
      {isBigSmileItem && <span className=""></span>}
      {isAdultItem && <span className=""></span>}
      <img
        src={imageUrl}
        alt={`${rank}위`}
        className="image h-full w-full object-cover"
      />
      <span className="box__label-rank absolute top-0 left-0 z-1 box-border block h-[32px] w-[32px] rounded-br-lg bg-[#00c400] text-center text-sm/[16px] text-white">
        {rank}
      </span>
    </div>
  );
};

export default ItemImage;
