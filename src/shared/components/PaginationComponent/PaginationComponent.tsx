import { FC } from "react";
import { PaginationInterface } from "../../models/props/pagination.interface";
import { Box, Pagination } from "@mui/material";

export const PaginationComponent: FC<PaginationInterface> = ({
  page,
  setPage,
}) => {
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Pagination
          count={100}
          page={page}
          boundaryCount={17}
          onChange={handlePagination}
          color="primary"
          size="large"
        />
      </Box>
    </>
  );
};
