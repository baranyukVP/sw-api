import React, { FC, memo } from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export const Item_TestID = 'Item_TestID';

interface IProps {
  id: number;
  name: string;
}

export const Item: FC<IProps> = memo(({ id, name }) => {
  return (
    <Link to={`/${id}`} data-testid={Item_TestID}>
      <ListItem>
        <ListItemButton>
          <ListItemText>{name}</ListItemText>
        </ListItemButton>
      </ListItem>
    </Link>
  );
});
