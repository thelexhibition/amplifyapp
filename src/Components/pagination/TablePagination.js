import { Pagination } from "@mui/material";
import React from "react";

const TablePagination = ({ count, currentPage, itemsPerPage, onChange }) => {
  return (
    <Pagination
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
