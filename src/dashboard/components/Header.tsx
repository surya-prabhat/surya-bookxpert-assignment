import { useAuth } from "../../hooks/useAuth";
import SearchBar from "./SearchBar";

export default function Header() {
    const { logout } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        logout();
    };


    return (
        <div className="mt-4 flex w-full justify-between px-3">
        <SearchBar />
        <form onSubmit={handleSubmit}>
            <button className="py-2 px-4 cursor-pointer rounded-md text-center w-full bg-[#3B82F6] mb-4 text-[#ebebeb]" type="submit">Logout</button>
        </form>
        </div>
    )

}