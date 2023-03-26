import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

export default function EmptyStateList({
  listName,
  onGetData,
  loading,
}: EmptyStateList) {
  return (
    <Box
      component="div"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: "100%",
      }}
    >
      <Typography variant="body1" component="p">
        Click the Button to get data
      </Typography>
      <LoadingButton
        onClick={() => onGetData(listName)}
        loading={loading}
        sx={{
          marginTop: "10px",
        }}
        variant="contained"
      >
        Get Data
      </LoadingButton>
      {/* <Button
        sx={{
          marginTop: "10px",
        }}
        variant="contained"
        onClick={() => onGetData(listName)}
      >
        Get Data
      </Button> */}
    </Box>
  );
}
