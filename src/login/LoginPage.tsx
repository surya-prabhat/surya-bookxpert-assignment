import type React from "react"
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();
    const { login, isLoading } = useAuth();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login();
    };

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (isAuthenticated) {
            navigate('/dashboard')
        }
    }, [navigate])

    return (
        <div className="h-full w-100vw flex justify-center items-center">
            <div className="border rounded-2xl text-[#ebebeb] bg-[#0F172A] w-fit px-3 flex flex-col items-center gap-6 shadow-2xl">
                <h1 className="text-2xl font-medium mt-4">Please Sign In</h1>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4 flex flex-col gap-3">
                        <div className="flex gap-2 flex-col w-80">
                            <p className="text-sm">Email</p>
                            <input
                                className="bg-[#f8fafc] px-2 py-2 rounded-md focus:outline-none text-slate-900 placeholder:text-slate-400"
                                type="email"
                                required
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="flex gap-2 flex-col">
                            <p className="text-sm">Password</p>
                            <input
                                className="bg-[#f8fafc] px-2 py-2 rounded-md focus:outline-none text-slate-900 placeholder:text-slate-400"
                                type="password"
                                required
                                placeholder="password"
                            />
                        </div>
                    </div>

                    <button className="py-2 cursor-pointer rounded-md text-center w-full bg-[#3B82F6] mb-4 " type="submit" disabled={isLoading}>{isLoading ? "Signing In..." : "Sign-in"}</button>

                </form>
            </div>
        </div>
    );
}