import React from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();

  return <>{id}</>;
};
