import { createContext, useContext, useState } from "react";

// Creates a global authentication context
const AuthContext = createContext(null)

// Provides authentication state and actions to the entire app
export default function AuthProvider({children}){

    // Initializes user state from localStorage to persist login sessions
    const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? {email:localStorage.getItem("currentUserEmail")} : null);

    // Handles user registration and stores new users in localStorage
    function signUp(email,password){

        // Retrieves existing users from localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        // Prevents duplicate accounts by checking if email already exists
        if(users.find((u) => u.email === email)){
            return {success: false, error: "Email already exists"};
        }
        const newUsers = {email, password};
        users.push(newUsers);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email);

        setUser({email});

        return {success: true};

    }

    // Authenticates user by matching email and password from localStorage
    function login(email, password){

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        // Searches for a matching user in stored users
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        // Returns error if credentials are invalid
        if(!user){
            return {success: false, error: "invalid email or password"}
        }

        localStorage.setItem("currentUserEmail", email);
        setUser({email});

        return {success: true};
    }

    // Logs out the user by clearing session data
    function logout(){
        localStorage.removeItem("currentUserEmail");
        setUser(null);
    }

    {/* Exposes auth state and functions to all child components */}
    return (
        <AuthContext.Provider value={{ signUp, login, logout, user,}}>
        {children}
        </AuthContext.Provider>
    );
    
}

// Custom hook to access authentication context
export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}