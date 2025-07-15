import { createPortal } from "react-dom";
import ItemCards from "../components/EmartMall/ItemCards/ItemCards";
import ToastPopup from "../components/ToastPopup/ToastPopup";
import { useState } from "react";
import "../styles/common.css";
import mockData from "../../public/data/mockData.json";

const Page6 = () => {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  return (
    <div className="container">
      <ItemCards
        item={mockData.emartMall.sdBrandItemCatalogs[0].items[0]}
        setIsLayerOpen={setIsLayerOpen}
      />
      {isLayerOpen &&
        createPortal(
          <ToastPopup
            isLayerOpen={isLayerOpen}
            setIsLayerOpen={setIsLayerOpen}
          />,
          document.body,
        )}
    </div>
  );
};

export default Page6;
