import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { Header_TestId } from "../components/Header/Header";
import { Loader_TestId } from "../components/Loader/Loader";

describe("App", () => {
  it("should render App", () => {
    render(<App />);

    expect(screen.getByTestId(Header_TestId)).toBeInTheDocument();
    expect(screen.getByTestId(Loader_TestId)).toBeInTheDocument();
  });
});
