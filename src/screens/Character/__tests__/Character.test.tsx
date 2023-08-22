import { render, screen } from "@testing-library/react";
import { Character, Character_TestId } from "../Character";
import { BrowserRouter } from "react-router-dom";
import { PeopleContextProvider } from "../../../context";
import * as PeopleContext from "../../../context/People.context";
import {mockPeople} from "../../../__mocks__/people";

const spyOnPeopleContext = jest.spyOn(PeopleContext, "usePeopleContext");

describe("Character screen", () => {
  it("should render empty page", () => {
    spyOnPeopleContext.mockReturnValue({ characters: [] });

    render(
      <BrowserRouter>
        <PeopleContextProvider>
          <Character />
        </PeopleContextProvider>
      </BrowserRouter>
    );

    expect(screen.queryByTestId(Character_TestId)).not.toBeInTheDocument();
  });
  it("should render", () => {
    spyOnPeopleContext.mockReturnValue({ characters: mockPeople.results });
    render(
      <BrowserRouter>
        <PeopleContextProvider>
          <Character />
        </PeopleContextProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId(Character_TestId)).toBeInTheDocument();
  });
});
