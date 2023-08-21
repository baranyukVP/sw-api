import { useEffect, useState } from "react";
import { getPeople } from "../../api/people";
import { ICharacter } from "../../types/person";

type TUseGetPeople = () => {
  characters: ICharacter[];
  isLoading: boolean;
  isSuccess: boolean;
};

export const useGetPeople: TUseGetPeople = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    getPeople()
      .then((data) => {
        setCharacters(data.results);
        setIsSuccess(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    characters,
    isLoading,
    isSuccess,
  };
};
