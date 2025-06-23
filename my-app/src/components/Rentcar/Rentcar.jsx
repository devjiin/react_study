import { useRef } from "react";
import mockData from "../../../public/data/mockData.json";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

const Rentcar = () => {
  uuidv4();
  const checkAllref = useRef(null);
  return (
    <ul className="list">
      <input
        type="checkbox"
        id="inputCheckboxAll"
        className="input__checkbox"
        ref={checkAllref}
      />
      <label htmlFor="inputCheckboxAll" className="text__label">
        전체 동의
      </label>
      {mockData.rentcar.agreeListItem.map((item, idx) => (
        <ListItem item={item} key={uuidv4()} idx={idx} />
      ))}
    </ul>
  );
};

export default Rentcar;
