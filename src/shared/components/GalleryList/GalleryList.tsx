import { FC } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Image } from "@mui/icons-material";
import { GalleryListProps } from "../../models/props/gallery-list.interface";

import { capitalizeTitle } from "../../../utils/capitalizeTitle";

export const GalleryList: FC<GalleryListProps> = ({ data }) => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "1rem 0",
                }}
              >
                <Box>
                  <Typography variant="h5">
                    {capitalizeTitle(data?.title)}
                  </Typography>
                </Box>
                <Box>
                  <IconButton disableRipple={true} disabled={true}>
                    {data?.total_photos}&nbsp;
                    <Image />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ margin: "0.5rem" }}>
                <img
                  src={data?.cover_photo?.urls?.full}
                  alt={data?.title}
                  width="280px"
                  height="300px"
                  style={{ borderRadius: "6px", boxShadow: "#333 2px 2px" }}
                />
              </Box>
            </>
          </Box>
        </Box>
      </Container>
    </>
  );
};
