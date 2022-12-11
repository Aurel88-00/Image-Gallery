import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPaginatedPhotosQuery } from "../../modules/collectionApi/collectionApi";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Home } from "@mui/icons-material";
import LoadingProgress from "../../shared/components/LoadingProgress";
import { PhotoInterface } from "../../shared/models/props/photo.interface";

export const PhotosList: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: photoListData, isLoading: isPhotoListDataLoading } =
    useGetPaginatedPhotosQuery(
      {
        id,
        page: 1
      },
      {
        skip: !id,
      }
    );

  console.log(photoListData);
  return (
    <>
      {isPhotoListDataLoading ? (
        <LoadingProgress />
      ) : (
        <>
          <>
            <IconButton onClick={() => navigate("/")}>
              <Home />
            </IconButton>
          </>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {photoListData?.map((photo: PhotoInterface) => (
              <Box key={photo?.id}>
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
                          <Box></Box>
                        </Box>
                        <Box sx={{ margin: "0.5rem" }}>
                          <img
                            src={photo?.urls?.full}
                            alt={photo?.description || photo?.id}
                            width="280px"
                            height="400px"
                            style={{
                              borderRadius: "6px",
                              boxShadow: "#333 2px 2px",
                            }}
                          />
                        </Box>
                      </>
                    </Box>
                  </Box>
                </Container>
              </Box>
            ))}
          </Box>
        </>
      )}
    </>
  );
};
