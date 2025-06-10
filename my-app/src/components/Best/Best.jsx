import Category from "./Category";
import mockData from "../mockData/mockData";
import ItemCards from "./ItemCards/ItemCards";

const Index = () => {
  return (
    <>
      <Category data={mockData.best.category} />
      <ItemCards data={mockData.best.items} />
    </>
  );
};

export default Index;
