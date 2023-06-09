import React, { memo, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SingleListItem from "../ListItem/index";
import Button from "@mui/material/Button";
import EmptyStateList from "../EmptyStateList/index";
import ControlledListContainer from "./../ControlledListContainer/index";
import { VirtualizedListItem } from "../VirtualizedListItem/index";
import useSearch from "../../hooks/useSearch";
import Typography from "@mui/material/Typography";

const MemoApiListBox = React.memo(
  function ApiListBox({
    listName,
    onGetData,
    dataList,
    loading,
    onClearList,
  }: ApiListBox) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchList = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      setSearchValue(target.value);
    };

    const { resultListArr, searchValue: searchValueData } = useSearch({
      listArr: dataList,
      searchQuery: searchValue,
    });

    const handleClearList = () => {
      setSearchValue("");
      onClearList(listName);
    };

    return (
      <Box
        component="div"
        sx={{
          p: 2,
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "16px",
        }}
      >
        <TextField
          id="outlined-search"
          placeholder="Search..."
          type="input"
          name={listName}
          value={searchValue}
          onChange={handleSearchList}
          fullWidth
          classes={{ root: "searchInputBox" }}
          sx={{
            width: "400px",
            marginBottom: "5px",
          }}
        />
        <Box
          component="div"
          sx={{
            display: "block",
          }}
        >
          <ControlledListContainer
            sx={{
              width: "400px",
              height: "600px",
              padding: "8px 0px",
              listStyle: "none",
              margin: "0px",
              position: "relative",
              backgroundColor: "white",
              overflowY: "scroll",
            }}
            dataSize={resultListArr.length}
            dataList={resultListArr}
          >
            {!resultListArr.length && !searchValueData ? (
              <EmptyStateList
                listName={listName}
                onGetData={onGetData}
                loading={loading}
              />
            ) : !resultListArr.length && searchValueData ? (
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "(-50%, -50%)",
                  transform: "translate(-50%, -50%)",
                }}
                align="center"
                variant="body1"
                component="p"
              >
                No Results Found
              </Typography>
            ) : resultListArr.length < 50 ? (
              resultListArr.map((item) => (
                <SingleListItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  avatar={item.avatar}
                />
              ))
            ) : resultListArr.length > 50 ? (
              VirtualizedListItem
            ) : null}
          </ControlledListContainer>
          <Button
            sx={{
              marginTop: "10px",
            }}
            variant="contained"
            fullWidth
            onClick={handleClearList}
          >
            Clear List
          </Button>
        </Box>
      </Box>
    );
  },
  (prevProps, newProps) =>
    prevProps.loading === newProps.loading &&
    prevProps.dataList === newProps.dataList
);

export default MemoApiListBox;
