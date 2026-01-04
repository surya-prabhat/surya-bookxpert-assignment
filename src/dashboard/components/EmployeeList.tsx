import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees, saveEmployee } from "../../utils/storage";
import EmployeeCard, { type Employee } from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";


export default function EmployeeList() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        setEmployees(getEmployees());
    }, []);

    const handleSave = (formData: any) => {
        if (editingEmployee) {
            const updated = employees.map((emp) => emp.id === editingEmployee.id ? { ...formData, id: emp.id } : emp);
            localStorage.setItem('employee_portal_data', JSON.stringify(updated));
            setEmployees(updated);
        } else {
            const newList = saveEmployee(formData);
            setEmployees(newList);
        }
        setIsModelOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            const updatedList = deleteEmployee(id);
            setEmployees(updatedList);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <h1 className="text-6xl text-center">Total Number of Employees: {employees.length}</h1>

            <div className="flex flex-col gap-2">
                <button onClick={() => { setEditingEmployee(null); setIsModelOpen(true); }}>Add Employee</button>
                <button onClick={handlePrint}>Print List</button>
                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <div className="print-container">
                            <EmployeeCard key={employee.id} employee={employee} onDeleteClick={(id) => handleDelete(id)} onEditClick={(emp) => { setEditingEmployee(emp); setIsModelOpen(true); console.log(emp) }} />
                        </div>
                    ))
                ) : (
                    <div>
                        <p>No Employees Found, Start by adding one!</p>
                    </div>
                )}
            </div>

            <EmployeeForm
                isOpen={isModalOpen}
                onClose={() => setIsModelOpen(false)}
                employeeToEdit={editingEmployee}
                onSave={handleSave}
            />
        </>
    );
}