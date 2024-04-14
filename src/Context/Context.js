import {createContext, useEffect, useReducer} from 'react'
import Reducer from './Reducer';

let user = null;
try {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user = JSON.parse(storedUser);
  }
} catch (error) {
  console.error("Error parsing user data from localStorage:", error);
}

const INITIAL_STATE = {
  user: user,
  isFetching: false,
  error: false,
};

export  const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({children}) => {
         const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

         useEffect(()=> {
            localStorage.setItem('user', JSON.stringify(state.user))
         },[state.user])

         return (
            <Context.Provider value={{
               user:state.user,
               isFetching:state.isFetching,
               error:state.error,
               dispatch
            }}>
               {children}
            </Context.Provider>
         )
}