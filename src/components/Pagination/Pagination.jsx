import PaginationItem from "@mui/material/Pagination";

import React from "react";

const Pagination = ({ setPage, numOfPages = 10 }) => {
  const handlePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
    console.log("From pagginnation" + Number(page));
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <PaginationItem
        count={numOfPages}
        onChange={(event, page) => handlePage(page)}
      />
    </div>
  );
};

export default Pagination;
