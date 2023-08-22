import { useGetPeople } from "../useGetPeople";
import { renderHook, waitFor } from "@testing-library/react";
import * as apiPeople from "../../../api/people/people";
import { mockPeople } from "../../../__mocks__/people";

const spyPeople = jest.spyOn(apiPeople, "getPeople");

describe("useGetPeople", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return default state", () => {
    spyPeople.mockReturnValue(Promise.resolve(mockPeople));
    const { result } = renderHook(() => useGetPeople());

    expect(result.current.characters.length).toBe(0);
  });

  it("should fetch", async () => {
    spyPeople.mockReturnValue(Promise.resolve(mockPeople));
    const { result } = renderHook(() => useGetPeople());

    await waitFor(() =>
      expect(result.current.characters.length).toBe(mockPeople.results.length)
    );
  });
});
