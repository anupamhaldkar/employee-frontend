import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
        });

    const navigate = useNavigate();    

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        console.log(employee);
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList");
        }).catch((error) => {
            console.log(error);
        });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
            });
    };

  return (
    <div className="flex max-w-2xl shadow mx-auto border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-6">
                <label className="block text-gray-600 font-normal text-m">First Name</label>
                <input type="text"
                name="firstName"
                value={employee.firstName}
                onChange={(e)=>handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-6">
                <label className="block text-gray-600 font-normal text-m">
                    Last Name
                </label>
                <input type="text"
                name="lastName"
                value={employee.lastName}
                onChange={(e)=>handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-6">
                <label className="block text-gray-600 font-normal text-m">Email</label>
                <input type="email"
                name="emailId"
                value={employee.emailId}
                onChange={(e)=>handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button onClick={saveEmployee} className="rounded font-semibold text-white my-2 bg-blue-400 hover:bg-blue-700 py-2 px-6">Save</button>
                
                <button 
                onClick={reset}
                className="rounded font-semibold text-white my-2 bg-red-400 hover:bg-red-700 py-2 px-6">
                    Reset
                </button>

            </div>
        </div> 
    </div>
  )
}

export default AddEmployee