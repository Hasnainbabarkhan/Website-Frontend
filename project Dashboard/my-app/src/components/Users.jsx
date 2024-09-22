import React, { useState } from 'react';

const Dropdown = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    onEdit();
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <span className="cursor-pointer" onClick={toggleDropdown}>
        &#8230;
      </span>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Users = () => {
  const handleEdit = (user) => {
    console.log(`Edit ${user}`);
  };

  const handleDelete = (user) => {
    console.log(`Delete ${user}`);
  };

  return (
    <div>
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className='border-b border-gray-300 text-neutral-500'>User Name</th>
            <th className='border-b border-gray-300 text-neutral-500'>Role</th>
            <th className='border-b border-gray-300 text-neutral-500'>ID (Email)</th>
            <th className='border-b border-gray-300 text-neutral-500'>Status</th>
            <th className='border-b border-gray-300 text-neutral-500'>Department</th>
            <th className='border-b border-gray-300 text-neutral-500'>Last Login</th>
            <th className='border-b border-gray-300 text-neutral-500'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border-b border-gray-300 text-blue-600 underline font-bold'>Brian</td>
            <td className='border-b border-gray-300'>admin</td>
            <td className='border-b border-gray-300'>brian@namutech.io</td>
            <td className='border-b border-gray-300 text-green-500 font-bold'>Active</td>
            <td className='border-b border-gray-300'>-</td>
            <td className='border-b border-gray-300'>20-09-15 18:23:02</td>
            <td className='border-b border-gray-300'>
              <Dropdown onEdit={() => handleEdit('Brian')} onDelete={() => handleDelete('Brian')} />
            </td>
          </tr>
          <tr>
            <td className='border-b border-gray-300 text-blue-600 underline font-bold'>Puru</td>
            <td className='border-b border-gray-300'>user</td>
            <td className='border-b border-gray-300'>puru@namutech.io</td>
            <td className='border-b border-gray-300 text-red-500 font-bold'>Inactive</td>
            <td className='border-b border-gray-300'>IT</td>
            <td className='border-b border-gray-300'>20-09-15 18:23:02</td>
            <td className='border-b border-gray-300'>
              <Dropdown onEdit={() => handleEdit('Puru')} onDelete={() => handleDelete('Puru')} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;


