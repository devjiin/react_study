import clsx from "clsx";
import { useEffect, useRef } from "react";
import Title from "./Titile";

const Layer = ({ data, isOpen, setIsOpen, buttonRef }) => {
  const { tabs, services } = data;
  const modalRef = useRef(null);
  const handleClickCloseLayer = () => {
    setIsOpen(false);
    buttonRef?.focus();
  };

  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    firstElement?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isOpen) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        } else if (e.key === "Escape") {
          handleClickCloseLayer();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);
  return (
    <>
      <div
        ref={modalRef}
        className={clsx(
          "fixed top-1/2 left-1/2 z-[999] h-[500px] -translate-x-1/2 -translate-y-1/2 transform bg-white p-[16px]",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="box__title">
          <h2 className="text-center">상세검색</h2>
          <button
            className="absolute top-0 right-0 h-[32px] w-[32px] text-[24px]"
            onClick={handleClickCloseLayer}
          >
            X
          </button>
        </div>
        <div>
          <div className="box__tabs flex gap-[9px] px-2 py-3">
            {tabs.map(({ id, tabname }) => {
              return (
                <label
                  key={id}
                  className="relative grow rounded-2xl text-center focus-within:outline focus-within:outline-2 focus-within:outline-black"
                >
                  <input
                    type="checkbox"
                    className="peer absolute appearance-none"
                  />
                  <span className="block w-full rounded-2xl border border-solid border-gray-400 peer-checked:bg-blue-500 peer-checked:text-white">
                    {tabname}
                  </span>
                </label>
              );
            })}
          </div>
          <div className="box__price">
            {/* <input type="range" id="input-left" min="0" max="10" value="1" />
            <input type="range" id="input-right" min="0" max="10" value="10" /> */}
          </div>
          <div className="box__search">
            <label htmlFor="inputSearch">
              <Title title="호텔명" />
            </label>
            <input
              type="text"
              id="inputSearch"
              className="block w-full border"
              placeholder="(예:신라호텔)을 입력하세요"
            />
          </div>
          <div className="box__services">
            <Title title="부대/편의시설" />
            <div className="grid grid-cols-5 gap-[1px]">
              {services.map((service) => (
                <label
                  key={service.id}
                  className="h-[70px] focus-within:outline focus-within:outline-2 focus-within:outline-black"
                >
                  <input type="checkbox" className="appearance-none" />
                  <span>{service.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="dimmed"></div>
    </>
  );
};

export default Layer;
