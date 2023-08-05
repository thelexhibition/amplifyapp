import React from "react";
import "./loader.css";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
