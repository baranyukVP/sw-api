import { IPeopleResponse } from "../../types/person";

export function getPeople(): Promise<IPeopleResponse> {
  return fetch("https://swapi.dev/api/people").then((res) => res.json());
}
