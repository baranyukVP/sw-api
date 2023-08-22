import React from "react";

import { Container, List } from "@mui/material";
import { Item } from "./components/Item";
import { Loader } from "../../components/Loader";
import { usePeopleContext } from "../../context";

export const Main = () => {
  const { characters, isLoading } = usePeopleContext();

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <List>
        {characters.map((character, index) => (
          <Item key={character.name} id={index} name={character.name} />
        ))}
      </List>
    </Container>
  );
};
