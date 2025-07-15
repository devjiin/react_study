import clsx from "clsx";
import { useEffect } from "react";

const ToastPopup = ({ isLayerOpen, setIsLayerOpen }) => {
  useEffect(() => {
    if (!isLayerOpen) return;

    const timer = setTimeout(() => {
      setIsLayerOpen(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLayerOpen]);
  return (
    <div
      className={clsx(
        "fixed top-[100%] flex h-[50px] w-[calc(100%-32px)] items-center justify-center rounded-[8px] rounded-lg bg-amber-200",
        isLayerOpen && "top-[calc(100%-60px)]",
      )}
    >
      <p>토스트팝업토스트팝업토스트팝업토스트팝업</p>
    </div>
  );
};

export default ToastPopup;
