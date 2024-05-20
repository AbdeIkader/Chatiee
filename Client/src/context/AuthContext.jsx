import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	// Retrieve data from localStorage
	const storedUserData = localStorage.getItem("chat-user");
  
	// Check if the stored data is valid JSON
	let initialAuthUser = null;
	try {
	  initialAuthUser = JSON.parse(storedUserData);
	} catch (error) {
	  console.error("Error parsing stored user data:", error);
	  // Handle the error here (e.g., clear invalid data from localStorage)
	}
  
	// Initialize state with parsed data or null if parsing failed
	const [authUser, setAuthUser] = useState(initialAuthUser);
  
	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
  };
  