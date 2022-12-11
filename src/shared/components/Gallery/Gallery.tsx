import React, { FC, useState } from "react";
import { useGetPaginatedCollectionQuery } from "../../../modules/collectionApi/collectionApi";
import { Box, Grid } from "@mui/material";
import LoadingProgress from "../LoadingProgress";
import GalleryList from "../GalleryList";
import { CollectionInterface } from "../../models/props/collection.interface";
import PaginationComponent from "../PaginationComponent";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const Gallery: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, data } = useGetPaginatedCollectionQuery(page);
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr ",
            gap: "20px",
            margin: "1rem 0",
            cursor: "pointer",
          }}
        >
          <>
            {isLoading ? (
              <LoadingProgress />
            ) : (
              <>
                {data &&
                  data?.map((collection: CollectionInterface) => (
                    <Grid
                      onClick={() => navigate(`/photos/${collection?.id}`)}
                      sx={{
                        borderRadius: "10px",
                        background: "#f0f5fa",
                        padding: "0.5rem",
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      }}
                    >
                      <GalleryList key={collection.id} data={collection} />
                    </Grid>
                  ))}
              </>
            )}
          </>
        </Box>
      </Container>
      <>
        <PaginationComponent page={page} setPage={setPage} />
      </>
    </>
  );
};
