import React, { useState } from "react";

const RoleList = () => {
  const [roles, setRoles] = useState([
    { id: 1, roleName: "Admin", description: "Full access to all features" },
    { id: 2, roleName: "Editor", description: "Can edit content" },
  ]);

  const addRole = () => {
    const newRole = {
      id: Date.now(),
      roleName: "New Role",
      description: "Description of new role",
    };
    setRoles([...roles, newRole]);
  };

  const editRole = (id) => {
    const roleToEdit = roles.find((role) => role.id === id);
    const updatedRoleName = prompt("Enter new role name:", roleToEdit.roleName);
    const updatedDescription = prompt(
      "Enter new description:",
      roleToEdit.description
    );

    if (updatedRoleName && updatedDescription) {
      const updatedRoles = roles.map((role) =>
        role.id === id
          ? { ...role, roleName: updatedRoleName, description: updatedDescription }
          : role
      );
      setRoles(updatedRoles);
    }
  };

  const deleteRole = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      const updatedRoles = roles.filter((role) => role.id !== id);
      setRoles(updatedRoles);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Role Management</h2>
        <button
          onClick={addRole}
          className="mb-4 bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          + Add Role
        </button>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border px-4 py-2 text-left">Role Name</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-pink-50">
                <td className="border px-4 py-2">{role.roleName}</td>
                <td className="border px-4 py-2">{role.description}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => editRole(role.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteRole(role.id)}
                    className="text-red-600 hover:text-red-800 font-medium mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleList;
