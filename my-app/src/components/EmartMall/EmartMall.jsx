import mockData from "../../../public/data/mockData.json";
import ItemCards from "./ItemCards/ItemCards";
import Title from "./Titile/Title";

const EmartMall = () => {
  const emartMallData = mockData.emartMall;
  const { shortcutLandingUrl, shortcutText, title, items } = emartMallData;
  return (
    <>
      <Title
        title={title}
        shortcutLandingUrl={shortcutLandingUrl}
        shortcutText={shortcutText}
      />
      <div className="box__itemcard-slide swiper-navigation-12009_brandbestitem">
        <ul className="box__items-list">
          {items.map((item) => (
            <li className="list-item" key={item.itemNo}>
              <ItemCards item={item} />;
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EmartMall;
