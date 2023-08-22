import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./screens/Main";
import { Character } from "./screens/Character";
import { Header } from "./components/Header";
import { PeopleContextProvider } from "./context";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({});

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PeopleContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":id" element={<Character />} />
          </Routes>
        </PeopleContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
