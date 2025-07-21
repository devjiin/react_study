import Category from "./Category";
import mockData from "../../../public/data/mockData.json";
import ItemCards from "./ItemCards/ItemCards";
import { useMediaQuery, MediaQuery } from "react-responsive";

const Index = () => {
  const isMobile = useMediaQuery({ maxWidth: 978 });
  return (
    <>
      <Category data={mockData.best.category} isMobile={isMobile} />
      <ItemCards data={mockData.best.items} isMobile={isMobile} />
    </>
  );
};

export default Index;
