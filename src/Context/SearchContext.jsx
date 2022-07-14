import { createContext, useState } from "react";

const SearchContext = createContext();

function Provider({children}) {

    const [searchTerms, setSearchTerms] = useState();

    return (
        <SearchContext.Provider value={{searchTerms, setSearchTerms}}>{children}</SearchContext.Provider>
    )
}
export { SearchContext, Provider}