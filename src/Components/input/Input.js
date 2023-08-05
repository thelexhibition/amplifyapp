import { TextField } from "@mui/material";
import React from "react";

const Input = ({ label }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
    />
  );
};

export default Input;
