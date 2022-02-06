import * as React from "react";

const SearchTeas = () => {
  const [currentCountry, setCurrentCountry] = React.useState("Any");
  const [currentType, setCurrentType] = React.useState("Any");

  React.useEffect(() => {
    setCurrentCountry(currentCountry);
    setCurrentType(currentType);
    console.log(currentCountry);
    console.log(currentType);
  }, [currentCountry, currentType]);

  return { currentCountry, setCurrentCountry, currentType, setCurrentType };
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
