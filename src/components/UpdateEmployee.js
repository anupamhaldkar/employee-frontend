import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: ""
        });
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee)
        .then((response) => {
            navigate("/employeeList");
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            }catch(e){
                console.log(e);
            }
        };
        fetchData();
    },[]);
    
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

  return (
    <div className="flex max-w-2xl shadow mx-auto border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Update Employee</h1>
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
                <button 
                onClick={updateEmployee} 
                className="rounded font-semibold text-white my-2 bg-blue-400 hover:bg-blue-700 py-2 px-6">
                    Update
                </button>
                
                <button 
                onClick={()=> navigate("/employeeList")}
                className="rounded font-semibold text-white my-2 bg-red-400 hover:bg-red-700 py-2 px-6">
                    Cancel
                </button>

            </div>
        </div> 
    </div>
  )
}

export default UpdateEmployee