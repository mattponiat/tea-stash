import * as React from "react";
//Types
import { Teas } from "types";

const SearchTeas = () => {
  const [currentCountry, setCurrentCountry] = React.useState("Any");
  const [currentType, setCurrentType] = React.useState("Any");
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    setCurrentCountry(currentCountry);
    setCurrentType(currentType);
  }, [currentCountry, currentType]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.currentTarget.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filterTeas = (teas: Teas) => {
    let result = teas;

    if (currentType != "Any") {
      result = result.filter((tea) => tea.typeOfTea.name === currentType);
    }
    if (currentCountry != "Any") {
      result = result.filter((tea) => tea.country === currentCountry);
    }
    if (inputText) {
      result = result.filter((tea) =>
        tea.name.toLowerCase().includes(inputText)
      );
    }
    return result;
  };

  return {
    currentCountry,
    setCurrentCountry,
    currentType,
    setCurrentType,
    inputText,
    inputHandler,
    filterTeas,
  };
};

//Context
type UseSearchTeasType = ReturnType<typeof SearchTeas>;

const SearchTeasContext = React.createContext<UseSearchTeasType | null>(null);

export const useSearchTeasContext = () => React.useContext(SearchTeasContext)!;

export const SearchTeasProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <SearchTeasContext.Provider value={{ ...SearchTeas() }}>
    {children}
  </SearchTeasContext.Provider>
);
