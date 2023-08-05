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
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell className="collapsibleTableTd" align="center">
          <CheckBox />
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

export default function CollapsibleTable({ tableData }) {
  console.log({ tableData });
  const [currentPage, setCurrentPage] = React.useState(1);

  const itemsPerPage = 5;

  const paginate = (array, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };
  const paginatedData = paginate(tableData || [], currentPage);

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
                <SelectOption label="Time Filter" data={time} />
              </TableCell>
              <TableCell align="left">
                <Input label="Signal Filter" />
              </TableCell>
              <TableCell align="left">
                <Input label="Desc Filter" />
              </TableCell>
              <TableCell align="left">
                <Input label="Assign Filter" />
              </TableCell>
              <TableCell align="left">
                <Input label="Group Filter" />
              </TableCell>
              <TableCell align="left">
                <SelectOption label="Action Filter" data={action} />
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
              <Row key={i} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          count={Math.ceil(tableData.length / itemsPerPage)}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </Typography>
    </TableContainer>
  );
}
