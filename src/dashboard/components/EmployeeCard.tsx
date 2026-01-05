import Toggle from "./Toggle";

export interface Employee {
    id: number;
    fullname: string;
    image: string;
    gender: string;
    dob: string;
    state: string;
    isActive: boolean;
};

export default function EmployeeCard({ employee, onEditClick, onDeleteClick, onStatusChange }: { employee: Employee; onEditClick: (emp: any) => void; onDeleteClick: (id: number) => void; onStatusChange: (id: number, newStatus: boolean) => void}) {
    return (
        <div className=" employee-card rounded-2xl xs:flex xs:flex-col sm:flex sm:flex-row xs:gap-6 sm:gap-3 items-center mx-4 px-2 py-2 bg-[#0F172A] text-[#ebebeb] print:shadow-none ">
            <div className="employee-image xs:mt-4 sm:mt-0 print:w-20 print:h-17 xs:w-26 sm:w-30 sm:h-27 rounded-full overflow-hidden">
                <img className="xs:w-full xs:h-full object-cover print:border print:border-slate-300" src={employee.image} alt="Employee Image" />
            </div>

            <div className="w-full flex flex-col xs:gap-4 sm:gap-4">
                <div className="flex justify-between ">
                    <p className="text-2xl">{employee.fullname}</p>
                    <p className="print-emp-status ">{employee.isActive ? 'Active' : 'Inactive'}</p>
                    <Toggle enabled={employee.isActive} onChange={(newStatus) => onStatusChange(employee.id, newStatus)}/>
                </div>

                <div className="flex justify-between">
                    <div className="sm:text-sm print:flex print:gap-5">
                        <p>Gender: {employee.gender}</p>
                        <p>DOB: {employee.dob}</p>
                        <p>State: {employee.state}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="bg-[#3B82F6] cursor-pointer rounded-md w-20 h-7" onClick={() => onEditClick(employee)}>Edit</button>
                        <button className="bg-red-700 cursor-pointer rounded-md w-20 h-7 text-[#F8FAFC]" onClick={() => onDeleteClick(employee.id)}>Delete</button>
                    </div>
                </div>

                <p className="text-right text-xs pr-2">#{employee.id}</p>
            </div>

            
        </div>
    );
}