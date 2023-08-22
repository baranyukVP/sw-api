import { createContext, ReactNode, useContext } from "react";
import { useGetPeople } from "../hooks/useGetPeople";
import { ICharacter } from "../types/person";

interface IPeopleContext {
  characters: ICharacter[];
  isLoading: boolean;
  isSuccess: boolean;
}

export const PeopleContext = createContext<IPeopleContext>({
  characters: [],
  isLoading: false,
  isSuccess: false,
});

export const usePeopleContext = () => useContext(PeopleContext);

export const PeopleContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { characters, isLoading, isSuccess } = useGetPeople();

  return (
    <PeopleContext.Provider
      value={{
        characters,
        isSuccess,
        isLoading,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
