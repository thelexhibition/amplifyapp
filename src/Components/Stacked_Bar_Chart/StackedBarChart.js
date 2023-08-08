import React from "react";
import Plot from "react-plotly.js";
import "./stackedbarchart.css";

const StackedBarChart = ({ chartData }) => {
  return (
    <div className="stackedbarchart">
      <span>A Fancy Plot</span>
      <Plot data={chartData?.data || []} layout={chartData?.layout || {}} />
    </div>
  );
};

export default StackedBarChart;
