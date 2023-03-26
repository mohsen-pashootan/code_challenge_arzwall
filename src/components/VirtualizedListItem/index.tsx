import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemButton from "@mui/material/ListItemButton";
import { addSelectedData } from "./../../stateManager/actions";
import { useDispatch } from "react-redux";
import { UID } from "../../helpers/helper";

export const VirtualizedListItem = (props: VIRTUALIZEDLIST) => {
  const { data, index, style } = props;
  const title = data[index].title;
  const description = data[index].description;
  const avatar = data[index].avatar;
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(addSelectedData({ id: UID(), title }));
  };

  return (
    <ListItem
      sx={{ cursor: "pointer" }}
      style={style}
      key={index}
      component="div"
      disablePadding
    >
      <ListItemButton onClick={handleItemClick}>
        <ListItemAvatar>
          <Avatar src={avatar}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={description} />
      </ListItemButton>
    </ListItem>
  );
};
