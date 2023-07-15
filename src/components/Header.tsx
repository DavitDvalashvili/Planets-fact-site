import data from "../data.json";
import { useState } from "react";
import { HeaderProps } from "../Types";
import { Link } from "react-router-dom";
import HeaderStyles from "./styles/HeaderStyles";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icons-close.svg";
import { motion } from "framer-motion";
import arrow from "../assets/icon-chevron.svg";

const Header = (props: HeaderProps) => {
  //hook and handle click event for toggling navbar
  const [hideNav, setHideNav] = useState<boolean>(true);
  const handleClick = () => {
    hideNav ? setHideNav(false) : setHideNav(true);
  };

  //target inner width of the window
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });

  return (
    <HeaderStyles>
      <h1>THE PLANETS</h1>
      {(!hideNav || innerWidth >= 768) && (
        <nav>
          <ul>
            {data.map((planet) => (
              <Link
                key={planet.name}
                to={planet.name}
                className="list"
                onClick={() => {
                  props.setActivePage(planet.name);
                }}
              >
                <div>
                  {innerWidth < 768 && <div className="bullet"></div>}
                  <li>{planet.name}</li>
                </div>
                {innerWidth < 768 && <img src={arrow} alt="" />}
              </Link>
            ))}
          </ul>
        </nav>
      )}
      {hideNav && innerWidth < 768 && (
        <motion.img
          src={hamburger}
          alt="hamburger"
          onClick={handleClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
      )}
      {!hideNav && innerWidth < 768 && (
        <motion.img
          src={close}
          alt="close"
          onClick={handleClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
      )}
    </HeaderStyles>
  );
};

export default Header;
