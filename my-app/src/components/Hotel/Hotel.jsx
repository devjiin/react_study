import { useEffect, useRef, useState } from "react";
import Layer from "./Layer";
import mockData from "../../../public/data/mockData.json";

const buttonArr = ['버튼1', '버튼2', '버튼3'];

const Hotel = () =>{
  const buttonRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpenLayer = () =>{
    setIsOpen(true);
  }
	return (
    <>
      {buttonArr.map((btn, idx)=>{
        return <button ref={el => buttonRef.current[idx] = el} key={idx} className="button" onClick={handleClickOpenLayer}>{btn}</button>
      })}
      {isOpen && <Layer data={mockData.hotel} buttonRef={buttonRef} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Hotel;