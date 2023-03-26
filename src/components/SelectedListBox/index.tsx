import React, { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const MemoSelectedListBox = React.memo(
  function SelectedListBox({ dataList, onDeleteSelected }: SELECTEDLIST) {
    return (
      <Box
        component="div"
        sx={{
          p: 2,
          backgroundColor: "white",
          borderRadius: "4px",
          width: "432px",
          height: "740px",
          padding: "16px",
          overflow: "scroll",
        }}
      >
        {dataList.length ? (
          <Typography align="left" variant="body1" component="p">
            Tap to delete
          </Typography>
        ) : null}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {dataList.length
            ? dataList.map((item) => (
                <Chip
                  key={item.id}
                  label={item.title}
                  color="primary"
                  component="div"
                  clickable
                  onClick={() => onDeleteSelected(item)}
                  sx={{ margin: "5px" }}
                />
              ))
            : null}
        </div>
      </Box>
    );
  },
  (prevProps, newProps) => prevProps.dataList === newProps.dataList
);

export default MemoSelectedListBox;
