import { createContext, useState } from "react";
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
        <Layer />
      </Layercontext.Provider>
    </div>
  );
};

export default Page2;
