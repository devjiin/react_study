import { Suspense, useReducer, useState } from "react";
import FilterLayer from "../components/Filter/FilterLayer";
import "../styles/common.css";
import FilterItem from "../components/Filter/FilterItem";
import { createContext } from "react";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import { ErrorBoundary } from "react-error-boundary";
import { fetchData } from "../api/fetchData";

const resource = fetchData();

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

export const FilterContext = createContext(null);

const Page7 = () => {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const initialData = resource.read().filter;
  const [state, dispatch] = useReducer(reducer, initialData);
  const handleClickOpen = () => {
    setIsLayerOpen(true);
  };

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<Loading />}>
        <div className="container">
          <FilterContext.Provider value={dispatch}>
            <ul className="list__dynamic-filter">
              <FilterItem filterData={state} />
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
          </FilterContext.Provider>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Page7;
