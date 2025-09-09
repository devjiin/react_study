import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Page6 from "../pages/Page6";
import Page7 from "../pages/Page7";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page1 />,
      },
      {
        path: "/state",
        element: <Page2 />,
      },
      {
        path: "/useEffect",
        element: <Page3 />,
      },
      {
        path: "/swiper",
        element: <Page4 />,
      },
      {
        path: "/focus",
        element: <Page5 />,
      },
      {
        path: "/createPortal",
        element: <Page6 />,
      },
      {
        path: "/filter",
        element: <Page7 />,
        errorElement: <Error />,
      },
    ],
  },
]);
