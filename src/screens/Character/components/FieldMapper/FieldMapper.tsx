import React from "react";
import { Typography } from "@mui/material";
import { ICharacter } from "../../../../types/person";

interface IProps<T> {
  name: keyof ICharacter;
  value: T;
}

export function FieldMapper<T>({ name, value }: IProps<T>) {
  switch (name) {
    case "films":
    case "species":
    case "starships":
    case "vehicles":
      return <Typography>{(value as string[]).join(', ')}</Typography>;
    case "homeworld":
      return <Typography>{value as string}</Typography>;
    case "created":
    case "edited":
      return <Typography>{new Date(value as Date).getDate()}</Typography>;
    case "hair_color":
    case "skin_color":
    case "eye_color":
    default:
      return <Typography>{value as string}</Typography>;
  }
}
