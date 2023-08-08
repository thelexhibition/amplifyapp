import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectOption = ({ label, data, onChange, name }) => {
  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        autoWidth={true}
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label={label}
        onChange={onChange}
        name={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data?.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectOption;
