import { Link } from "react-router-dom";
import "../styles/nav.css";

const navText = [
  {
    id: 1,
    name: "page1",
  },
  {
    id: 2,
    name: "page2",
  },
  {
    id: 3,
    name: "page3",
  },
];
const Nav = () => {
  return (
    <div className="box__nav">
      {navText.map(({ id, name }) => {
        return (
          <Link to={id === 1 ? "/" : `/page${id}`} key={id} className="button">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
