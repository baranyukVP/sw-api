import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Main } from "../Main";
import * as apiPeople from "../../../api/people/people";
import { mockPeople } from "../../../__mocks__/people";
import { Item_TestID } from "../components/Item/Item";
import { Loader_TestId } from "../../../components/Loader/Loader";
import { BrowserRouter } from "react-router-dom";
import { PeopleContextProvider } from "../../../context";

const spyPeople = jest.spyOn(apiPeople, "getPeople");

describe("Main page", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch people", () => {
    spyPeople.mockReturnValue(Promise.resolve(mockPeople));
    render(
      <PeopleContextProvider>
        <Main />
      </PeopleContextProvider>
    );

    expect(spyPeople).toHaveBeenCalledTimes(1);
  });

  it("should render loader", () => {
    spyPeople.mockReturnValue(Promise.resolve(mockPeople));
    render(
      <PeopleContextProvider>
        <Main />
      </PeopleContextProvider>
    );

    expect(screen.getByTestId(Loader_TestId)).toBeInTheDocument();
  });

  it("should render all people", async () => {
    spyPeople.mockReturnValue(Promise.resolve(mockPeople));
    render(
      <BrowserRouter>
        <PeopleContextProvider>
          <Main />
        </PeopleContextProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryAllByTestId(Item_TestID).length).toBe(
        mockPeople.results.length
      );
    });
  });
});
