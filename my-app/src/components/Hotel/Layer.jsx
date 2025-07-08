import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import Title from "./Titile";

const Layer = ({data, isOpen, setIsOpen, buttonRef}) =>{
  const {tabs, services} = data;
  const [isSelected, setIsSelected] = useState(false);
  const modalRef = useRef(null);
  const handleClickCloseLayer = () =>{
    setIsOpen(false);
    buttonRef.current.focus();
  }

  useEffect(()=>{
    const handleKeyPress = (e) => {
      if(isOpen){
      const modalElement = modalRef.current;
      const focusableElements = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

        if(e.key === "Tab"){
          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
          } else if (
            !e.shiftKey && document.activeElement === lastElement
          ) {
            firstElement.focus();
          }
          
        }else if(e.key === 'Escape'){
          handleClickCloseLayer();
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);
	return (
    <>
      <div ref={modalRef} className={clsx('fixed top-1/2 left-1/2 z-[999] transform -translate-x-1/2 -translate-y-1/2 p-[16px] bg-white', isOpen ? 'block' : 'hidden')}>
        <div className="box__title">
          <h2 className="text__title">상세검색</h2>
          <button className="absolute right-0 top-0 w-[32px] h-[32px] text-[24px]" onClick={handleClickCloseLayer}>X</button>
        </div>
        <div className="box__content">
          <div className="box__tabs flex px-2 py-3">
            {tabs.map(({id, tabname})=>{
              return (
              <label htmlFor="" key={id}>
                <input type="checkbox" />
                {tabname}
              </label>
              )
            })}
          </div>
          <div className="box__price">
            <input type="range" id="input-left" min="0" max="10" value="1"/>
            <input type="range" id="input-right" min="0" max="10" value="10"/>
          </div>
          <div className="box__search">
            <label htmlFor="inputSearch"><Title title="호텔명"/></label>
            <input type="text" id="inputSearch" className="block border w-full" placeholder="(예:신라호텔)을 입력하세요" />
          </div>
          <div className="box__services">
            <Title title="부대/편의시설"/>
            <div className="grid grid-cols-5 gap-[1px]">
              {services.map((text, idx)=>
                <label key={idx}>
                  <input />
                  {text}
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="dimmed"></div>
    </>
	)
}

export default Layer;