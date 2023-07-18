import data from "../data.json";
import { StatisticsType } from "../Types";

const Statistics = (props: StatisticsType) => {
  return (
    <>
      <div>
        <h4>ROTATION TIME</h4>
        <span>{data[props.activeIndex].rotation}</span>
      </div>
      <div>
        <h4>REVOLUTION TIME</h4>
        <span>{data[props.activeIndex].revolution}</span>
      </div>
      <div>
        <h4>RADIUS</h4>
        <span>{data[props.activeIndex].radius}</span>
      </div>
      <div>
        <h4>AVERAGE TEMP</h4>
        <span>{data[props.activeIndex].temperature}</span>
      </div>
    </>
  );
};

export default Statistics;
