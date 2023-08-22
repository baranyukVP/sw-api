import React from "react";

import { Container, List } from "@mui/material";
import { useGetPeople } from "../../hooks/useGetPeople";
import { Item } from "./components/Item";
import { Loader } from "../../components/Loader";

export const Main = () => {
  const { characters, isLoading } = useGetPeople();

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <List>
        {characters.map((character) => (
          <Item key={character.name} name={character.name} />
        ))}
      </List>
    </Container>
  );
};
