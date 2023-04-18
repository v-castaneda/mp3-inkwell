import { createContext, useState, useEffect } from "react";

interface User {
    lastName: string;
    firstName: string;
    id: number;
    name: string;
    email: string;
    userId: number;
}

interface CurrentUserContext {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null >>;
}

export const CurrentUser = createContext<CurrentUserContext>({
    currentUser: null, 
    setCurrentUser: () => {}, 
})

// export const CurrentUser = createContext()

function CurrentUserProvider({ children }: { children: React.ReactNode }) {

    const [currentUser, setCurrentUser] = useState<User | null>(null)
    useEffect(() => {
        const getLoggedInUser = async () => {
            // let response = await fetch('http://localhost:5000/authentication/profile', {
            let response = await fetch(`${process.env.REACT_APP_SERVER_URL}authentication/profile`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider