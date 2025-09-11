import ItemImage from "./ItemImage";
import ItemPrice from "./ItemPrice";
// import MiniShopInfo from "./MiniShopInfo";

const ItemCards = ({ data, isMobile = false }) => {
  return (
    <div className="box__best-list px-8">
      <ul className="list__best flex flex-wrap">
        {data.map((item) => {
          const {
            avgStarPoint,
            consultingPeriod,
            discountPrice,
            discountRate,
            expressShippingText,
            goodsCode,
            goodsName,
            imageUrl,
            isAdultItem,
            isBigSmileItem,
            isExpressShipping,
            isFreeShipping,
            isPriceExpose,
            isStartPrice,
            isSuperDeal,
            itemPriceType,
            linkUrl,
            lmos,
            price,
            rank,
            couponPrice,
            miniShopInfo,
          } = item || {};
          return (
            <li className="list-item w-1/5 mb-[30px] pr-[58px]" key={goodsCode}>
              <a href="" className="link">
                <ItemImage
                  imageUrl={imageUrl}
                  isBigSmileItem={isBigSmileItem}
                  isAdultItem={isAdultItem}
                  rank={rank}
                />

                <div className="box__item-info">
                  {isMobile && (
                    <ItemPrice
                      isMobile={isMobile}
                      discountPrice={discountPrice}
                      discountRate={discountRate}
                      price={price}
                      isFreeShipping={isFreeShipping}
                      itemPriceType={itemPriceType}
                      couponPrice={couponPrice}
                    />
                  )}
                  <p className="box__item-title">{goodsName}</p>
                  {!isMobile && (
                    <ItemPrice
                      isMobile={isMobile}
                      discountPrice={discountPrice}
                      discountRate={discountRate}
                      price={price}
                      isFreeShipping={isFreeShipping}
                      itemPriceType={itemPriceType}
                      couponPrice={couponPrice}
                    />
                  )}

                  {!isMobile && isSuperDeal && (
                    <div className="box__lmo-tags">
                      <span className="text__tags">
                        <img
                          src="//script.gmarket.co.kr/starro/desktop/images/single/best/logo_superdeal@3x.png"
                          alt="슈퍼딜"
                          className="image"
                        />
                      </span>
                    </div>
                  )}
                </div>
              </a>
              {/* {isMobile && <MiniShopInfo miniShopInfo={miniShopInfo} />} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemCards;
