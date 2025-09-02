import { useReducer, useState } from "react";
import FilterLayer from "../components/Filter/FilterLayer";
import "../styles/common.css";
import mockData from "../../public/data/mockData.json";
import FilterItem from "../components/Filter/FilterItem";

function reducer(state, action) {
  switch (action.type) {
    case "FILTER_DYNAMIC": {
      const { filterId, itemId } = action.payload;
      return state.map((filter) =>
        filter.filterType === filterId
          ? {
              ...filter,
              data: filter.data.map((item) =>
                item.id === itemId
                  ? { ...item, isChecked: !item.isChecked }
                  : item,
              ),
            }
          : filter,
      );
    }
    case "RESET_FILTERS": {
      return state.map((filter) => ({
        ...filter,
        data: filter.data.map((item) => ({
          ...item,
          isChecked: false,
        })),
      }));
    }
    default:
      return state;
  }
}

const Page7 = () => {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, mockData.filter);
  const handleClickOpen = () => {
    setIsLayerOpen(true);
  };

  return (
    <div className="container">
      <ul className="list__dynamic-filter">
        <FilterItem filterData={state} dispatch={dispatch} />
      </ul>
      <button className="button__layer-open" onClick={handleClickOpen}>
        열기
      </button>
      <FilterLayer
        filterData={state}
        isLayerOpen={isLayerOpen}
        setIsLayerOpen={setIsLayerOpen}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Page7;
