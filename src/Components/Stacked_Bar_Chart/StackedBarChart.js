import React from "react";
import Plot from "react-plotly.js";
import "./stackedbarchart.css";

const StackedBarChart = () => {
  var trace1 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
    name: "SF Zoo",
    type: "bar",
  };

  var trace2 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  };
  var trace3 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  };

  var data = [trace1, trace2, trace3];

  return (
    <div className="stackedbarchart">
      <span>A Fancy Plot</span>
      <Plot
        data={data}
        layout={{
          width: 1000,
          height: 400,
        }}
      />
    </div>
  );
};

export default StackedBarChart;
