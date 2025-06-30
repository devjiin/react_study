import { Link } from "react-router-dom";
import "../styles/nav.css";

const navText = [
  {
    id: "router",
  },
  {
    id: "state",
  },
  {
    id: "useEffect",
  },
  {
    id: "swiper",
  },
];
const Nav = () => {
  return (
    <div className="box__nav">
      {navText.map(({ id }) => {
        return (
          <Link to={id === 1 ? "/" : `/${id}`} key={id} className="button">
            {id}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
