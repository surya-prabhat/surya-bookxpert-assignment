
import Header from "./components/Header";


export default function DashboardPage() {


    return (
        <div className="flex flex-col gap-10">
            <Header />
            <h1 className="text-6xl text-center">Total Number of Employees: 10</h1>
        </div>
    )
}