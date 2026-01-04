
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";


export default function DashboardPage() {



    return (
        <div className="flex flex-col gap-10">
            <Header />
            <EmployeeList />

        </div>
    )
}