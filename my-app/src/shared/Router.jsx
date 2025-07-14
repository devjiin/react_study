import { Route, Routes } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Page6 from "../pages/Page6";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/state" element={<Page2 />} />
      <Route path="/useEffect" element={<Page3 />} />
      <Route path="/swiper" element={<Page4 />} />
      <Route path="/focus" element={<Page5 />} />
      <Route path="/createPortal" element={<Page6 />} />
    </Routes>
  );
};
