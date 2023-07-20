import { useContext, useState, useEffect } from "react";
import { activeContext } from "../App";
import DefaultTheme from "../DefaultTheme";
import PlanetStyles from "./styles/PlanetStyles";
import data from "../data.json";
import InfoBox from "./InfoBox";
import Statistics from "./Statistics";

const Planets = () => {
  const context = useContext(activeContext);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [categoryIndex, setCategoryIndex] = useState(1);

  data.map((planet, index) => {
    if (planet.name === location.pathname.slice(1)) {
      useEffect(() => {
        setActiveIndex(index);
        setCategoryIndex(1);
      }, [context]);
    }
  });

  console.log(location.pathname.slice(1));

  //target inner width of the window
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });

  //return different color as value for styling
  const ChooseColor = (parameter: number) => {
    let color;
    switch (true) {
      case parameter == 1:
        color = `${DefaultTheme.colors.GoldenKoi}`;
        break;
      case parameter == 2:
        color = `${DefaultTheme.colors.HokkaidoLavender}`;
        break;
      case parameter == 3:
        color = `${DefaultTheme.colors.DizzyDays}`;
        break;
      case parameter == 4:
        color = `${DefaultTheme.colors.BloodMoon}`;
        break;
      case parameter == 5:
        color = `${DefaultTheme.colors.RustyNail}`;
        break;
      case parameter == 6:
        color = `${DefaultTheme.colors.Tealish}`;
        break;
      case parameter == 7:
        color = `${DefaultTheme.colors.RetroBlue}`;
        break;
      default:
        color = `${DefaultTheme.colors.FairyTaleBlue}`;
        break;
    }
    return color;
  };

  return (
    <PlanetStyles
      activeIndex={activeIndex}
      ChooseColor={ChooseColor}
      categoryINdex={categoryIndex}
    >
      {innerWidth < 768 && (
        <div className="categories">
          <div
            onClick={() => {
              setCategoryIndex(1);
            }}
          >
            OVERVIEW
          </div>
          <div
            onClick={() => {
              setCategoryIndex(2);
            }}
          >
            STRUCTURE
          </div>
          <div
            onClick={() => {
              setCategoryIndex(3);
            }}
          >
            SURFACE
          </div>
        </div>
      )}
      <InfoBox
        activeIndex={activeIndex}
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        innerWidth={innerWidth}
        ChooseColor={ChooseColor}
      />
      <Statistics activeIndex={activeIndex} />
    </PlanetStyles>
  );
};

export default Planets;
