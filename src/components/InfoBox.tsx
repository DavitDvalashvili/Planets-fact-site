import { InfoPropsType } from "../Types";
import data from "./../../data.json";
import source from "./../../public/assets/icon-source.svg";
import InfoStyle from "./styles/InfoStyle";

const InfoBox = (props: InfoPropsType) => {
  console.log(props.activeIndex);
  console.log(data[0].images.internal);

  return (
    <InfoStyle
      activeIndex={props.activeIndex}
      categoryIndex={props.categoryIndex}
      ChooseColor={props.ChooseColor}
    >
      <div className="imageBox">
        {props.categoryIndex == 1 && (
          <img src={data[props.activeIndex].images.planet} alt="planet" />
        )}
        {props.categoryIndex == 2 && (
          <img src={data[props.activeIndex].images.internal} alt="planet" />
        )}
        {props.categoryIndex == 3 && (
          <img src={data[props.activeIndex].images.planet} alt="planet" />
        )}
        {props.categoryIndex == 3 && props.innerWidth >= 1440 && (
          <img
            className="geology"
            src={data[props.activeIndex].images.geology}
            alt="planet"
          />
        )}
      </div>
      <div className="textBox">
        <div className="textWrapper">
          <h1>{data[props.activeIndex].name}</h1>
          <p>{data[props.activeIndex].overview.content}</p>
          <div className="source">
            <span>Source :</span>
            <span>Wikipedia</span>
            <a href={data[props.activeIndex].overview.source} target="blank">
              <img src={source} alt="source-link" />
            </a>
          </div>
        </div>
        {props.innerWidth >= 768 && (
          <div className="category">
            <div
              onClick={() => {
                props.setCategoryIndex(1);
              }}
            >
              <span>01</span>
              OVERVIEW
            </div>
            <div
              onClick={() => {
                props.setCategoryIndex(2);
              }}
            >
              <span>02</span>
              STRUCTURE
            </div>
            <div
              onClick={() => {
                props.setCategoryIndex(3);
              }}
            >
              <span>03</span>
              SURFACE
            </div>
          </div>
        )}
      </div>
    </InfoStyle>
  );
};

export default InfoBox;
