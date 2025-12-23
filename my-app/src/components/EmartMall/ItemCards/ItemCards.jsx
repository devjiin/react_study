import CartButton from "./CartButton";
import Counter from "./Counter";
import ItemImage from "./ItemImage";
import ItemPrice from "./ItemPrice";
import FavoritButton from "./FavoritButton";

const ItemCard = ({ item, setIsLayerOpen }) => {
  const {
    buyCount,
    buyUnitCount,
    couponDiscount,
    discountRate,
    hasOption,
    imageUrl,
    isAdult,
    isBigSmileItem,
    isCartVisible,
    isSoldOut,
    itemName,
    itemNo,
    itemPrice,
    itemUrl,
    rank,
    reviewPoint,
    sellerInfo,
    sellPrice,
    tagLabels,
    dealImageUrl,
    deliveryCode,
  } = item;
  return (
    <div className="box__itemcard-container">
      <div className="box__itemcard-body">
        <div className="box__itemcard-inner">
          {tagLabels?.length > 0 &&
            tagLabels.map((label) => {
              const { code, text } = label;
              return (
                <span className="box__thumbnail__label" key={code}>
                  {text}
                </span>
              );
            })}
          <a
            href={itemUrl}
            className="link__itemcard"
            tabIndex="-1"
            aria-hidden="true"
          >
            <ItemImage
              imageUrl={imageUrl}
              isBigSmileItem={isBigSmileItem}
              isAdult={isAdult}
              rank={rank}
            />
          </a>
          <div className="box__itemcard-info">
            <div className="box__element-info">
              <Counter />
              <CartButton setIsLayerOpen={setIsLayerOpen} />
            </div>
            <a href={itemUrl} className="link__itemcard-info">
              <span
                className="box__itemcard-title-area"
                id={`itemCard_title_${itemNo}`}
              >
                <span className="text__title" id="item_title">
                  {itemName}
                </span>
              </span>
              <ItemPrice
                discountRate={discountRate}
                itemPrice={itemPrice}
                sellPrice={sellPrice}
              />
            </a>
            <FavoritButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
