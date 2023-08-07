import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectOption = ({ label, data, onChange, name }) => {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  // console.log({data})
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
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
