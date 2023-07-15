import { useContext } from "react";
import { activeContext } from "../../App";
import DefaultTheme from "../../DefaultTheme";
import data from "../../data.json";

const Planets = () => {
  const context = useContext(activeContext);
  //console.log(context);

  //const [activeIndex, setActiveIndex] = useState(0);
  data.map((planet, index) => {
    //console.log(planet.name);
    if (planet.name === context) {
      console.log(planet.name);
    }
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
    <>
      <div className="categories">{context}</div>
    </>
  );
};

export default Planets;
