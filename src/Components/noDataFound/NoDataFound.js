import React from "react";
import NoData from "../../images/emoji.jpg";
import "./NoDataFound.css";

const NoDataFound = () => {
  return (
    <div className="NoDataFoundMain">
      <img src={NoData} alt="noData" />
      <h3>No Data Found</h3>
    </div>
  );
};

export default NoDataFound;
