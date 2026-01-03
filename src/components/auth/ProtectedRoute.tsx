import type { JSX } from "react";
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children} : {children: JSX.Element}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return children;
}