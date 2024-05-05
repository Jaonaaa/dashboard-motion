import React from "react";
import CustomChart from "../../utilsComponents/Chart/CustomChart";
import HorizContainer from "../../utilsComponents/Container/HorizContainer/HorizContainer";
import "./Graphs.sass";

const example1 = {
  labels: ["Successful", "Failed"],
  datasets: [
    {
      label: "Missions",
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderWidth: 1,
      data: [15, 2],
    },
  ],
};

const example2 = {
  labels: ["America", "Asia", "Europa", "Africa", "Australia"],
  datasets: [
    {
      label: "",
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderWidth: 1,
      data: [33, 50, 15, 14, 10],
    },
  ],
};

const Graphs = () => {
  return (
    <>
      <div className=" graphs_container">
        <HorizContainer>
          <div className="container_block">
            <CustomChart
              title="Status of missions"
              labels={example1.labels}
              datasets={example1.datasets}
              type="bar"
              positionTitle="default"
            />
          </div>
          <div className="container_block">
            <CustomChart
              title="Intervention rate"
              labels={example2.labels}
              datasets={example2.datasets}
              type="bar"
              positionTitle="default"
            />
          </div>
        </HorizContainer>
      </div>
    </>
  );
};

export default Graphs;
