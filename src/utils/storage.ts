const STORAGE_KEY = 'employee_portal_data';

const initialData = [
    { id: 1, fullname: "Alex Rivera", image: "/jason-goodman-Ti7LQ0r-zy4-unsplash.jpg", gender: "Male", dob: "01/05/2002", state: "Hyderabad", isActive: true},
    { id: 2, fullname: "Alex Rivera", image: "/jason-goodman-Ti7LQ0r-zy4-unsplash.jpg", gender: "Male", dob: "01/05/2002", state: "Hyderabad", isActive: true}
];

export const getEmployees = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : initialData;
};

export const saveEmployee = (newEmployee: any) => {
    const current = getEmployees();
    const updated = [...current,{...newEmployee, id: String(Date.now())}];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
};

export const deleteEmployee = (id: number) => {
    const current = getEmployees();
    const updated = current.filter((emp: any) => {return String(emp.id) !== String(id)});
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
}