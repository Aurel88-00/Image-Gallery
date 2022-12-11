import { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const LoadingProgress: FC = () => {
  return (
    <Backdrop style={{ color: "#fff", zIndex: 400000 }} open={true}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
