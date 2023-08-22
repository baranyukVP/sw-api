import { Box, CircularProgress } from "@mui/material";
import React, { FC } from "react";

export const Loader_TestId = "Loader_TestId";

interface IProps {
  isLoading: boolean;
}

export const Loader: FC<IProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      my={5}
      data-testid={Loader_TestId}
    >
      <CircularProgress />
    </Box>
  );
};
