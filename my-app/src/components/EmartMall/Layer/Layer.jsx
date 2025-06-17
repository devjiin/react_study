import clsx from "clsx";
import { useContext } from "react";
import { Layercontext } from "../../../pages/Page2";

const Layer = () => {
  const { isLayerOpen, setIsLayerOpen } = useContext(Layercontext);

  const onClickClose = () => {
    setIsLayerOpen(false);
  };
  return (
    <div
      className={clsx("box__layer-cart", isLayerOpen && "box__layer--active")}
    >
      <div className="box__inner">
        <button className="button__close" onClick={onClickClose}>
          X
        </button>
        <div className="box__content">
          <p className="text">장바구니에 담겼습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Layer;
