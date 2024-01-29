import React from 'react'

const EmployeeList = () => {
  return (
    <div className='container mx-auto my-8'>
    <div className="h-12">
        <button className='rounded bg-slate-700 text-white px-6 py-2 font-semibold'> Add Employee</button>
    </div>
    <div className='flex shadow border-b'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-6 py-3'>
                    First Name
                </th>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-6 py-3'>
                    Last Name
                </th>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider px-6 py-3'>
                    Email Id
                </th>
                <th className='text-right font-medium text-gray-500 uppercase tracking-wider px-6 py-3'>
                    Actions
                </th>
            </thead>
            <tbody className='bg-white'>
                <tr>
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>A</div>
                    </td>
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>A</div>
                    </td>
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>A@gmail.com</div>
                    </td>
                    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                        <a href="#" className='text-indigo-500 hover:text-indigo-600 px-4'>Edit</a>
                        <a href="#" className='text-indigo-500 hover:text-indigo-600 px-4'>Delete</a>
                    </td>
                
                </tr>
            </tbody>
        </table>
        
    </div>
    </div>
  )
};

export default EmployeeList;