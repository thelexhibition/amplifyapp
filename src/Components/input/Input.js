import { TextField } from "@mui/material";
import React from "react";

const Input = ({ label, onChange, name }) => {
  return (
    <TextField
      id="outlined-basic"
      name={name}
      label={label}
      variant="outlined"
      size="small"
      onChange={onChange}
    />
  );
};

export default Input;
