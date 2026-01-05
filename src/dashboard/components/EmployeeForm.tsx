import type { Employee } from "./EmployeeCard";
import { useEffect, useState } from "react";
import { Camera, User, X } from "lucide-react";
import Switcher1 from "./Toggle";




export default function EmployeeForm({ isOpen, onClose, employeeToEdit, onSave }: {
    isOpen: boolean;
    onClose: () => void;
    employeeToEdit: Employee | null;
    onSave: (data: Employee) => void
}) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        id: 0,
        fullname: "",
        image: "",
        gender: 'Male',
        dob: '',
        state: 'None',
        isActive: true
    });

    useEffect(() => {
        if (employeeToEdit) {
            setFormData(employeeToEdit);
        } else {
            setFormData({
                id: 0,
                fullname: "",
                image: "",
                gender: 'Male',
                dob: '',
                state: 'None',
                isActive: true
            })
        }
    }, [employeeToEdit]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setImagePreview(base64String);
                setFormData({ ...formData, image: base64String });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };



    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[#0F172A] text-[#ebebeb] rounded-2xl p-4 w-100 flex flex-col gap-5">
                <div className="flex justify-between">
                    <h2 className="text-2xl">{employeeToEdit ? 'Edit Employee' : 'Add Employee'}</h2>
                    <button onClick={onClose}><X /></button>
                </div>



                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center  overflow-hidden">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Profile Image" className="w-full h-full object-cover" />
                                ) : (
                                    <User className="opacity-100 group-hover:opacity-0" size={32} />
                                )}

                                <label className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                                    <Camera size={20} className="text-white" />
                                    <input
                                        type="file"
                                        required
                                        hidden
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <p className="text-white">Profile Photo</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label >Full Name</label>
                        <input
                            className="bg-[#f8fafc] px-2 py-1 rounded-md focus:outline-none text-slate-900 placeholder:text-slate-400"
                            required
                            type="text"
                            value={formData.fullname}
                            onChange={(e) => { setFormData({ ...formData, fullname: e.target.value }) }}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Gender</label>
                        <select
                            className="bg-[#f8fafc]  px-2 py-1 rounded-md focus:outline-none text-slate-900 placeholder:text-slate-400"
                            required
                            value={formData.gender}
                            onChange={(e) => { setFormData({ ...formData, gender: e.target.value }) }}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Prefer not to say</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Date of Birth</label>
                        <input
                            className="bg-[#f8fafc] px-2 py-1 rounded-md focus:outline-none text-slate-900 placeholder:text-slate-400"
                            required
                            type="date"
                            value={formData.dob}
                            onChange={(e) => { setFormData({ ...formData, dob: e.target.value }) }}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm">State</label>
                        <select
                            className="bg-[#f8fafc] px-2 py-1 rounded-md focus:outline-none text-slate-900 placeholder:text-slate-400"
                            required
                            value={formData.state}
                            onChange={(e) => { setFormData({ ...formData, state: e.target.value }) }}
                        >
                            <option value="Telangana">Telangana</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Employee Status</label>
                        <Switcher1 enabled={formData.isActive} onChange={(checked) =>setFormData({ ...formData, isActive: checked})} />
                    </div>

                    <div className="flex justify-between gap-2">
                        <button className=" bg-[#c10007] cursor-pointer w-full h-10 rounded-lg" type="button" onClick={onClose}>Cancel</button>
                        <button className=" bg-[#3B82F6] cursor-pointer w-full h-10 rounded-lg" type="submit">{employeeToEdit ? 'Update Details' : 'Create Employee'}</button>
                    </div>

                </form>
            </div>
        </div>
    );
}