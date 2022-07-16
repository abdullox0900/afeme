import { createContext, useEffect, useState } from "react";

const UpdateUserContext = createContext()

function Provider({children}) {

    const [updateUser, setUpdateUser] = useState(0);

    return (
        <UpdateUserContext.Provider value={{updateUser, setUpdateUser}}>{children}</UpdateUserContext.Provider>
    )
}
export { UpdateUserContext, Provider}