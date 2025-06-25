import { useEffect, useState } from "react";
import mockData from "../../../public/data/mockData.json";
import { v4 as uuidv4 } from "uuid";
import Notice from "./Notice";
import Checkbox from "./Checkbox";
import clsx from "clsx";
import throttle from 'lodash/throttle';

const Rentcar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [data, setData] = useState(mockData.rentcar.agreeList);
  
  const dataLength = data.length;
  const [checkedItem, setCheckedItem] = useState([]);

  const handleAllChange = (checked) => {
    if(checked){
      setCheckedItem(data.map((item)=> item.id));
    }else{
      setCheckedItem([]);
    }
  }

  const handleChange = (checked, id) =>{
    if(checked){
      setCheckedItem(prev => [...prev, id]);
    }else{
      setCheckedItem(checkedItem.filter(el => el !== id));
    }
  }

  useEffect(()=>{
  const throttledScroll = throttle(() => {
    const currentScroll = window.scrollY;
    setIsFixed(currentScroll >= 100);
  }, 200);

  const dataWithId = data.map((item)=> ({
    ...item,
    id: uuidv4()
  }));
  setData(dataWithId);

  window.addEventListener('scroll', throttledScroll);
  return () => {
    window.removeEventListener('scroll', throttledScroll);
  }
  },[]);

  return (
    <>
      <div className={clsx('box__top', isFixed && 'is-fixed')}>fix 영역</div>
      <ul className="list">
        <li className="list-item">
          <span className="box__checkbox-wrap">
            <input
              type="checkbox"
              id="inputCheckboxAll"
              className="input__checkbox"
              onChange={(e) => handleAllChange(e.target.checked)}
              checked={checkedItem.length === dataLength}
            />
            <label htmlFor="inputCheckboxAll" className="text__label">
              전체 동의
            </label>
          </span>
        </li>
        {data.map(({labelText, notice, id}) => {
          return (
            <li className="list-item" key={id}>
              <span className="box__checkbox-wrap">
                <Checkbox labelText={labelText} id={id} onChange={handleChange} checkedItem={checkedItem} />
              </span>
              <Notice data={notice} />
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Rentcar;
