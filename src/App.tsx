import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./screens/Main";
import { Character } from "./screens/Character";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};
