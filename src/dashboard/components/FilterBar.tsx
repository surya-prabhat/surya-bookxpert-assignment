import type React from "react";
import { useSearch } from "../../components/SearchContext";
import { ChevronDown, Filter } from "lucide-react";


export default function FilterBar() {
    const { statusFilter, setStatusFilter, genderFilter, setGenderFilter } = useSearch()

    const SelectWrapper = ({ children }: { children: React.ReactNode }) => (
        <div className="relative flex-1 ">
            {children}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-nonetext-slate-400">
                <ChevronDown size={14} />
            </div>
        </div>
    )

    return (
        <div className="flex items-center gap-3 mb-6 no-print ml-4 xs:mr-4 sm:mr-0">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                <Filter size={18} />
            </div>

            <SelectWrapper>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-xl xs:px-4 sm:px-8 py-2 xs:text-xs sm:text-sm focus: outline-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                >
                    <option value="all">All Statuses</option>
                    <option value="active">Active only</option>
                    <option value="inactive">Inactive Only</option>
                </select>
            </SelectWrapper>

            <SelectWrapper>
                <select
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-xl xs:px-4 sm:px-8 py-2 xs:text-xs sm:text-sm focus: outline-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                >
                    <option value="all">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </SelectWrapper>
        </div>
    );

}