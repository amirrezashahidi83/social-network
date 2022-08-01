import React,{useReducer} from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
	const [user,dispatch] = useReducer(AuthReducer,initialState);

	return (
		<AuthContext.Provider value={{user,dispatch}}>
			{children}
		</AuthContext.Provider>
		);
}