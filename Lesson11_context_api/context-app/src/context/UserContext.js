import { createContext,useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const[user,setUser] = useState( null);
  const values = { user , setUser};
  
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext



{/* 
      id:1,
      username: 'mseven',
      password: '123',
      bio:'Velit aute velit occaecat esse incididunt sunt minim. Do excepteur est est duis sit ut laborum amet. Ad veniam mollit ut fugiat esse incididunt eiusmod esse ut esse consequat. Et id ad laboris ullamco anim ad veniam.'
   */}