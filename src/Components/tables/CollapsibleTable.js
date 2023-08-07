import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./collapsibleTable.css";
import CheckBox from "../checkBox/CheckBox";
import {
  collapsibleTableTh,
  collapsibleTableTd,
  time,
  action,
} from "./tableHelper";
import TablePagination from "../pagination/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import StackedBarChart from "../Stacked_Bar_Chart/StackedBarChart";
import SelectOption from "../select/SelectOption";
import Input from "../input/Input";

function Row(props) {
  const { row, onClick } = props;
  const [open, setOpen] = React.useState(false);

  const rawData = row?.related_data;
  const a = JSON.stringify(rawData);
  // console.log(JSON.parse(a));

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell className="collapsibleTableTd">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className="collapsibleTableTd" align="center">
          {row?.datetime}
        </TableCell>
        <TableCell className="collapsibleTableTd" align="center">
          {row?.name}
        </TableCell>
        <TableCell className="collapsibleTableTd" align="center">
          {row?.description}
        </TableCell>
        <TableCell className="collapsibleTableTd" align="center">
          {row?.assignee}
        </TableCell>
        <TableCell className="collapsibleTableTd" align="center">
          {row?.group}
        </TableCell>
        <TableCell
          className="collapsibleTableTd"
          align="center"
          onClick={() => onClick(row)}
        >
          <CheckBox workflow={row?.workflow} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography component="div" className="collapsibleTableUnder">
                <Typography component="div" className="dataDiv">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "600" }}
                  >
                    History
                  </Typography>
                  <Typography>
                    Some text…… Or paragraph…..\n… continued\n… continued
                  </Typography>
                  <Typography>...continued</Typography>
                  <Typography>...continued</Typography>
                </Typography>
                <Typography component="div" className="chartDiv">
                  <StackedBarChart />
                </Typography>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ tableData, updateFields }) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
  const [filterData, setFilterData] = React.useState({
    time: "",
    name: "",
    desciption: "",
    assigne: "",
    group: "",
    action: "",
  });
  const [data, setData] = React.useState([]);
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFilterData((prev) => ({ ...prev, [name]: value }));
  };

  const paginate = (array, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  // React.useEffect(() => {
  //   const DataBinding = () => {};
  //   DataBinding();
  // }, [data]);

  React.useEffect(() => {
    const validData = tableData?.filter((ele) => {
      if (filterData.time) {
        const currentTime = new Date().getTime();
        const timeIntervals = {
          "Past 24hrs": 24 * 60 * 60 * 1000,
          "Past 7 Days": 7 * 24 * 60 * 60 * 1000,
          "Past 30 Days": 30 * 24 * 60 * 60 * 1000,
        };
        const selectedTime = timeIntervals[filterData.time];

        if (selectedTime !== undefined) {
          const cutoffTime = currentTime - selectedTime;

          // Split date and time
          const [datePart, timePart] = ele.datetime.split(", ");
          const [dd, mm, yyyy] = datePart.split("/").map(Number);
          const [hh, min, sec] = timePart.split(":").map(Number);

          // Create a new Date object with the parsed values
          const rowDateTime = new Date(
            yyyy,
            mm - 1,
            dd,
            hh,
            min,
            sec
          ).getTime();

          return rowDateTime >= cutoffTime;
        }
      }
      if (filterData.name) {
        return ele.name.includes(filterData.name);
      }
      if (filterData.desciption) {
        return ele.description.includes(filterData.desciption);
      }
      if (filterData.assigne) {
        return ele.assignee.includes(filterData.assigne);
      }
      if (filterData.group) {
        return ele.group.includes(filterData.group);
      }
      if (filterData.action) {
        const action = {
          Resolved: true,
          Reject: false,
          All: "All",
        };
        const workflow = action[filterData.action];
        if (workflow === "All") {
          return ele;
        } else return ele.workflow === workflow;
      }
      return ele;
    });
    if (validData) {
      setData([...validData]);
    }
  }, [filterData]);

  const paginatedData = paginate(data, currentPage);

  return (
    <TableContainer component={Paper} className="collapsibleTableMain">
      <Typography component="div" className="mainHeading">
        <EditIcon /> App Name
      </Typography>
      <Typography component="div" className="collapsibleTable">
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">
                <SelectOption
                  label="Time Filter"
                  data={time}
                  onChange={inputHandler}
                  name="time"
                />
              </TableCell>
              <TableCell align="left">
                <Input
                  label="Signal Filter"
                  name="name"
                  onChange={inputHandler}
                />
              </TableCell>
              <TableCell align="left">
                <Input
                  label="Desc Filter"
                  name="desciption"
                  onChange={inputHandler}
                />
              </TableCell>
              <TableCell align="left">
                <Input
                  label="Assign Filter"
                  name="assigne"
                  onChange={inputHandler}
                />
              </TableCell>
              <TableCell align="left">
                <Input
                  label="Group Filter"
                  name="group"
                  onChange={inputHandler}
                />
              </TableCell>
              <TableCell align="left">
                <SelectOption
                  name="action"
                  label="Action Filter"
                  data={action}
                  onChange={inputHandler}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="collapsibleTableTh" />
              {collapsibleTableTh.map((item, index) => {
                return (
                  <TableCell
                    key={index}
                    align="center"
                    className="collapsibleTableTh"
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, i) => (
              <Row key={i} row={row} onClick={updateFields} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          count={Math.ceil(data.length / itemsPerPage)}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </Typography>
    </TableContainer>
  );
}
