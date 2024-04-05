import { createContext } from "react";

const UserContext = createContext({
    LoggedInUser: "Default Name"
})

export default UserContext