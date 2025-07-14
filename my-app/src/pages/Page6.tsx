import { createPortal } from "react-dom";
import EmartMall from "../components/EmartMall/EmartMall";
import "../styles/common.css";
import ToastPopup from "../components/ToastPopup/ToastPopup";
import { useState } from "react";

const Page6 = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="container">
      {/* <EmartMall /> */}
      {showModal && createPortal(<ToastPopup />, document.body)}
    </div>
  );
};

export default Page6;
