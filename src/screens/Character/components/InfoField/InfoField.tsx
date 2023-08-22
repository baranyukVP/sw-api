import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { FieldMapper } from "../FieldMapper";
import { ICharacter } from "../../../../types/person";

interface IProps<T> {
  name: keyof ICharacter;
  value: T;
  index: number;
}

export function InfoField<T> ({ name, value, index }: IProps<T>) {
  const theme = useTheme();

  return (
    <Box
      p={2}
      display="flex"
      justifyContent="flex-start"
      borderBottom={`1px solid 
            ${
              index % 2
                ? theme.palette.secondary.light
                : theme.palette.primary.light
            }
          `}
      overflow="hidden"
    >
      <Typography mr={1} fontWeight={600}>{name}:</Typography>
      <FieldMapper<T> name={name} value={value} />
    </Box>
  );
}
