import { createContext, useContext, useState } from "react";
import type { Employee } from "../dashboard/components/EmployeeCard";


interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    getFilteredEmployees: (employees: Employee[]) => Employee[];
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({children} : {children : React.ReactNode}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const getFilteredEmployees = (employees: Employee[]) => {
        if (!searchQuery.trim()) return employees;

        return employees.filter((emp) => {return emp.fullname.toLowerCase().includes(searchQuery.toLowerCase())});
    };

    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery, getFilteredEmployees}}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) throw new Error('useSearch must be within the SearchProvider');
    return context;
}