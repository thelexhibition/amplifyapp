import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";

const CheckBox = ({ onClick, workflow }) => {
  const [isChecked, setIsChecked] = useState(workflow);

  useEffect(() => {
    setIsChecked(workflow);
  }, [workflow]);

  return (
    <Checkbox
      onClick={onClick}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default CheckBox;
