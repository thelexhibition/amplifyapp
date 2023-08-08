import { Pagination } from "@mui/material";
import React from "react";
import "./TablePagination.css";

const TablePagination = ({ count, currentPage, itemsPerPage, onChange }) => {
  return (
    <Pagination
      className="pagination"
      count={count}
      variant="outlined"
      shape="rounded"
      color="primary"
      page={currentPage}
      onChange={onChange}
    />
  );
};

export default TablePagination;
