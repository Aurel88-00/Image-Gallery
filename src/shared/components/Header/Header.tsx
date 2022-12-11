import { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ padding: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Image Gallery
          </Typography>
          <Tooltip title="Avatar placeholder">
            <Button color="inherit">Avatar</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
