
import data from "../data.json";
import { HeaderProps } from "../Types";
import { Link } from "react-router-dom";

const Header = (props: HeaderProps) => {
  
  return (
    <nav>
      <ul>
        {data.map((planet) => (
          <li  key={planet.name}>
          <Link
          to={planet.name}
          onClick={()=> {
           props.setActivePage(planet.name)
          }}
         
          >
            {planet.name}
          </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
