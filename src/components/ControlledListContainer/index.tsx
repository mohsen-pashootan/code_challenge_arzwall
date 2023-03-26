import React, { useCallback } from "react";
import List from "@mui/material/List";
import { VariableSizeList } from "react-window";

export default function ControlledListContainer({
  children,
  sx,
  dataSize,
  dataList,
}: CONTROLLEDLISTCONTAINER) {
  const getRowHeightMemo = useCallback(
    (index: number) => {
      let _titleLength = dataList[index]?.title?.length;
      let _descLength = dataList[index]?.description?.length;
      return ((_titleLength + _descLength) / 50) * 35;
    },
    [dataList]
  );

  return dataSize < 50 ? (
    <List classes={{ root: "listContainer" }} sx={sx}>
      {children}
    </List>
  ) : (
    <VariableSizeList
      height={600}
      width={400}
      itemSize={getRowHeightMemo}
      itemCount={dataSize}
      overscanCount={5}
      itemData={dataList}
    >
      {children}
    </VariableSizeList>
  );
}
