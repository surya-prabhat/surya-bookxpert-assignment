import { Search } from 'lucide-react'

export default function SearchBar() {
    return (
        <div className='h-11 search-bar group flex items-center w-100 bg-white px-2 py-1 border border-slate-200 rounded-xl transition-all duration-100 focus-within:outline-[#3B82F6]/20 focus-within:outline-2'>
            <Search className='w-10 text-[#0F172A]' />
            <input

                type="text"
                placeholder="Search"
                className='w-full bg-transparant text-md text-slate-900 placeholder:text-slate-400 outline-none'
            />
        </div>
    )
}