import { createContext, useContext, useState } from "react";
import type { Employee } from "../dashboard/components/EmployeeCard";



interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    getFilteredEmployees: (employees: Employee[]) => Employee[];
    statusFilter: string;
    setStatusFilter: (val: string) => void;
    genderFilter: string;
    setGenderFilter: (val: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');

    const getFilteredEmployees = (employees: Employee[]) => {
        // if (!searchQuery.trim()) return employees;

        return employees.filter((emp) => {
            const matchesSearch =  emp.fullname.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === 'all' ? true : statusFilter === 'active' ? emp.isActive === true : emp.isActive === false;
            const matchesGender = genderFilter === "all" ? true : emp.gender.toLowerCase() === genderFilter.toLowerCase();
        
            return matchesSearch && matchesGender && matchesStatus;
        });
    };

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, statusFilter, setStatusFilter, genderFilter, setGenderFilter, getFilteredEmployees }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) throw new Error('useSearch must be within the SearchProvider');
    return context;
}