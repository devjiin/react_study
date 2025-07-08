import { useRef, useState } from "react";
import Layer from "./Layer";
import mockData from "../../../public/data/mockData.json";

const buttonArr = ["버튼1", "버튼2", "버튼3"];

const Hotel = () => {
  const buttonRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const handleClickOpenLayer = (idx) => {
    setIsOpen(true);
    setActiveIdx(idx);
  };
  const foucsedButton = buttonRef.current[activeIdx];
  return (
    <>
      {buttonArr.map((btn, idx) => {
        return (
          <button
            ref={(el) => (buttonRef.current[idx] = el)}
            key={idx}
            className="button"
            onClick={() => handleClickOpenLayer(idx)}
          >
            {btn}
          </button>
        );
      })}
      {isOpen && foucsedButton && (
        <Layer
          data={mockData.hotel}
          buttonRef={foucsedButton}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default Hotel;
