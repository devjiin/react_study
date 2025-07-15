import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import EmartMall from "../components/EmartMall/EmartMall";
import "../styles/emartmall.scss";
import Layer from "../components/EmartMall/Layer/Layer";

export const Layercontext = createContext();

const Page2 = () => {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  return (
    <div className="container">
      <Layercontext.Provider value={{ isLayerOpen, setIsLayerOpen }}>
        <EmartMall />
        {isLayerOpen &&
          createPortal(<Layer />, document.querySelector("#root"))}
      </Layercontext.Provider>
    </div>
  );
};

export default Page2;
