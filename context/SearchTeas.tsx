import * as React from "react";
//Types
import { Teas } from "types";

const SearchTeas = () => {
  const [currentCountry, setCurrentCountry] = React.useState("Any");
  const [currentType, setCurrentType] = React.useState("Any");
  const [inputText, setInputText] = React.useState("");

  //Set the country and type whenever they change
  React.useEffect(() => {
    setCurrentCountry(currentCountry);
    setCurrentType(currentType);
  }, [currentCountry, currentType]);

  //Get country and type from session storage
  React.useEffect(() => {
    const countryData = sessionStorage.getItem("country");
    const typeData = sessionStorage.getItem("type");

    if (countryData) {
      setCurrentCountry(countryData);
    }
    if (typeData) {
      setCurrentType(typeData);
    }
  }, []);

  //Set country and type to session storage
  React.useEffect(() => {
    sessionStorage.setItem("country", currentCountry);
    sessionStorage.setItem("type", currentType);
  }, [currentCountry, currentType]);

  //Input handler
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.currentTarget.value.toLowerCase();
    setInputText(lowerCase);
  };

  //Function for the SearchBar to filter teas
  const filterTeas = (teas: Teas) => {
    let result = teas;

    if (currentType != "Any") {
      result = result.filter((tea) => tea.typeOfTea.name === currentType);
    }
    if (currentCountry != "Any") {
      result = result.filter((tea) => tea.country.name === currentCountry);
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

//React Context
type UseSearchTeasType = ReturnType<typeof SearchTeas>;

const SearchTeasContext = React.createContext<UseSearchTeasType | null>(null);

export const useSearchTeasContext = () => {
  const context = React.useContext(SearchTeasContext);
  if (!context) {
    throw new Error(
      "useSearchTeasContext must be used within a SearchTeasContextProvider"
    );
  }
  return context;
};

export const SearchTeasProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <SearchTeasContext.Provider value={{ ...SearchTeas() }}>
    {children}
  </SearchTeasContext.Provider>
);
