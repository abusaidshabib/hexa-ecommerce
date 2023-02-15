import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const UserContext = ({children}) => {
  const [data, setData] = useState([]);


  const value = {data}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

};

export default UserContext;