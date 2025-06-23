import Checkbox from "./Checkbox";
import Notice from "./Notice";

const ListItem = ({ item, idx }) => {
  const { labelText, notice } = item;
  return (
    <li className="list-item">
      <div className="box__checkbox-wrap">
        <Checkbox labelText={labelText} idx={idx} />
      </div>
      <Notice data={notice} />
    </li>
  );
};

export default ListItem;
