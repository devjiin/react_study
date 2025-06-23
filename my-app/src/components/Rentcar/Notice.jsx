import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Notice = ({ data }) => {
  uuidv4();
  const [isExpened, setIsExpened] = useState(false);
  const handleClick = () => {
    setIsExpened((prev) => !prev);
  };
  return (
    <>
      <button
        type="button"
        className="button"
        aria-expanded={isExpened}
        onClick={handleClick}
      >
        자세히
      </button>
      <ul className="list__notice">
        {data.map((text) => (
          <li className="list-item" key={uuidv4()}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Notice;
