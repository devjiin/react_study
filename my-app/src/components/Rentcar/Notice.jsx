import { useState } from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

const Notice = ({ data }) => {
  const [isExpened, setIsExpened] = useState(false);
  const handleClick = () => {
    setIsExpened((prev) => !prev);
  };

  uuidv4();
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
      <ul className={clsx('list__notice', isExpened && 'list__notice--active')}>
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
