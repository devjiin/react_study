import clsx from "clsx";
import { Fragment } from "react";

const Catalogs = ({
  recipeSeq,
  sortOrderby,
  catalogs,
  activeIdx,
  setActiveIdx,
}) => {
  const handleClick = (idx) => {
    setActiveIdx(idx);
  };
  return (
    <div className="box__chip-group brand-type">
      <div className="box__chip-group-inner">
        {catalogs.map((catalog, idx) => {
          const { brandLogoImage, sdBrandName } = catalog;
          return (
            <Fragment key={idx}>
              <label
                htmlFor={`filter-chip${idx}_title_${recipeSeq}`}
                className={clsx(
                  "filter-chip",
                  idx === activeIdx && "filter-chip--active"
                )}
              >
                <input
                  id={`filter-chip${idx}_title_${recipeSeq}`}
                  type="radio"
                  name={`filter-chip_title_${recipeSeq}_${sortOrderby}`}
                  className="filter-chip__checkbox"
                  onClick={() => handleClick(idx)}
                />
                <img
                  src={brandLogoImage}
                  alt={sdBrandName}
                  className="image__brand-logo"
                />
              </label>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogs;
