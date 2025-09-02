import clsx from "clsx";

const FilterItem = ({ filterData, dispatch }) => {
  function handleChecked(filterType, id) {
    dispatch({
      type: "FILTER_DYNAMIC",
      payload: { filterId: filterType, itemId: id },
    });
  }
  return filterData.map((filter, idx) => {
    const { filterType, title, data } = filter;
    return (
      <li className="flex" key={`filterType${idx}`}>
        <strong className="w-[102px]">{title}</strong>
        {data.map((btn) => (
          <label className="mr-[10px]" key={btn.id}>
            <input
              type="checkbox"
              className={clsx("mr-[10px]")}
              value={btn.id}
              checked={btn.isChecked}
              onChange={() => handleChecked(filterType, btn.id)}
            />
            {btn.name}
          </label>
        ))}
      </li>
    );
  });
};

export default FilterItem;
