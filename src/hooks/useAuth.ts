import { useState } from "react"


export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const login = async() => {
        setIsLoading(true);
        
        await new Promise((resolve) => setTimeout(resolve, 1000));

        localStorage.setItem('isAuthenticated', 'true');
        setIsLoading(false);

        window.location.href = "/dashboard";
    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        window.location.href = "/";
    };

    return { login, isLoading, logout}
}