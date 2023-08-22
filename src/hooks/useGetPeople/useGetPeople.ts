import { useEffect, useState } from "react";
import { getPeople } from "../../api/people";
import { ICharacter } from "../../types/person";

type TUseGetPeople = () => {
  characters: ICharacter[];
  isLoading: boolean;
  isSuccess: boolean;
};

export const useGetPeople: TUseGetPeople = () => {
  const [characters, setCharacters] = useState<ICharacter[]>(
    JSON.parse(localStorage.getItem("people") || '[]')
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!characters.length) {
      setIsLoading(true);
      getPeople()
        .then((data) => {
          setCharacters(data.results);
          setIsSuccess(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(characters));
  }, [characters]);

  return {
    characters,
    isLoading,
    isSuccess,
  };
};
