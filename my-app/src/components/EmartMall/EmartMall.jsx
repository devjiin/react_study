import { useState } from "react";
import mockData from "../../../public/data/mockData.json";
import Catalogs from "./Catalogs/Catalogs";
import ItemCards from "./ItemCards/ItemCards";
import Title from "./Titile/Title";

const EmartMall = () => {
  const emartMallData = mockData.emartMall;
  const {
    recipeSeq,
    sortOrderby,
    shortcutLandingUrl,
    shortcutText,
    title,
    sdBrandItemCatalogs,
  } = emartMallData;
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <div className="box__sub-category">
        <div className="box__sub-category-inner">
          <Title
            title={title}
            shortcutLandingUrl={shortcutLandingUrl}
            shortcutText={shortcutText}
          />
          <Catalogs
            recipeSeq={recipeSeq}
            sortOrderby={sortOrderby}
            catalogs={sdBrandItemCatalogs}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
        </div>
        <div className="box__itemcard-slide">
          <ul className="box__items-list">
            {sdBrandItemCatalogs[activeIdx].items.map((item) => (
              <li className="list-item" key={item.itemNo}>
                <ItemCards item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmartMall;
