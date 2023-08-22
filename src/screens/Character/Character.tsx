import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { usePeopleContext } from "../../context";
import { InfoField } from "./components/InfoField";
import { ICharacter } from "../../types/person";

export const Character_TestId = 'Character_TestId';

export const Character = () => {
  const { id = 0 } = useParams();
  const { characters } = usePeopleContext();
  const character = characters[+id];

  if (!character) {
    return null;
  }

  return (
    <Container data-testid={Character_TestId}>
      {Object.entries(character).map(([key, value], index) => (
        <InfoField<typeof value>
          key={key}
          name={key as keyof ICharacter}
          value={value}
          index={index}
        />
      ))}
    </Container>
  );
};
