const numberFormet = (price) => {
  return price.toLocaleString("ko-KR");
};

const OriginPrice = ({ isCouponPrice }) => {
  return (
    <>
      {isCouponPrice && <span className="text__price-title">쿠폰적용가</span>}
      <div className="box__price-original">
        <span className="for-a11y">원가</span>
        <span className="text text__value">30,000</span>
        <span className="text text__unit">원</span>
      </div>
    </>
  );
};

const sellerPrice = () => {};

const Discount = ({ discountRate }) => {
  return (
    <div className="box__discount">
      <span className="for-a11y">할인율</span>
      <span className="text text__value">{discountRate}%</span>
    </div>
  );
};

const ItemPrice = ({
  isMobile,
  discountPrice,
  discountRate,
  price: sellPrice,
  isFreeShipping,
  itemPriceType,
  couponPrice,
}) => {
  const {
    couponAppliedPrice,
    discountRate: discountPercent,
    hasClubCoupon,
  } = couponPrice || {};
  const isCouponPrice = couponAppliedPrice < sellPrice;
  return (
    <div className="box__item-price">
      <div className="box__price">
        {isCouponPrice || <Discount discountRate={discountRate} />}
        <OriginPrice sellPrice={sellPrice} isCouponPrice={isCouponPrice} />
      </div>
      <div className="box__price">
        {isCouponPrice && <Discount discountRate={discountPercent} />}
        <div className="box__price-seller">
          <span className="for-a11y">판매가</span>
          <span className="text text__value">
            {isCouponPrice
              ? numberFormet(couponAppliedPrice)
              : numberFormet(sellPrice)}
          </span>
          <span className="text text__unit">원</span>
        </div>
        {!isMobile && (
          <div className="box__information-tags">
            {hasClubCoupon && (
              <span className="icon__tag icon__club">
                <img
                  src="//pics.gmarket.co.kr/mobile/single/kr/common/image__universe-club_30x14.png"
                  alt="유니버스클럽"
                  className="image"
                />
              </span>
            )}
            {isFreeShipping && (
              <span className="icon__tag icon__delivery-free">
                <img
                  src="//pics.gmarket.co.kr/pc/single/kr/snowwhite/common/icon_deliveyfree_2x.png"
                  alt="무료배송"
                  className="image"
                />
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemPrice;
