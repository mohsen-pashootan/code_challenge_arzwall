import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemButton from "@mui/material/ListItemButton";
import { useDispatch } from "react-redux";
import { addSelectedData } from "./../../stateManager/actions";
import { UID } from "../../helpers/helper";

export default function SingleListItem(props: SINGLEITEMPROP) {
  const { title, description, avatar } = props;
  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(addSelectedData({ id: UID(), title }));
  };

  return (
    <ListItem sx={{ cursor: "pointer" }}>
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
}
