import clsx from "clsx";
import FilterItem from "./FilterItem";

const FilterLayer = ({ filterData, isLayerOpen, setIsLayerOpen, dispatch }) => {
  const handleClickClose = () => {
    return setIsLayerOpen(false);
  };

  const handleClickReset = () => dispatch({ type: "RESET_FILTERS" });
  return (
    <div
      className={clsx("box__layer-filter", isLayerOpen && "box__layer--active")}
    >
      <div className="box__content">
        <div className="box__filter-header">
          <h2>필터</h2>
          <button className="button__reset" onClick={handleClickReset}>
            모두 지우기
          </button>
          <button className="button__close" onClick={handleClickClose}>
            닫기
          </button>
        </div>
        <ul className="list__filter">
          <FilterItem filterData={filterData} dispatch={dispatch} />
        </ul>
      </div>
    </div>
  );
};

export default FilterLayer;
