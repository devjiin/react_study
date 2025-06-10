import Category from "./Category";
import mockData from '../mockData/mockData';


const Index = () => {
	return(
		<div>
			<Category data={mockData.best.category} />
		</div>
	)
}

export default Index;