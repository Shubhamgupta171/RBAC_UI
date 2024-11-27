import React, { useState } from "react";

const PermissionsTable = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [newPermission, setNewPermission] = useState("");

  // Add a new permission to a role
  const addPermission = (roleId) => {
    if (!newPermission) {
      alert("Permission cannot be empty!");
      return;
    }
    const updatedRoles = roles.map((role) =>
      role.id === roleId && !role.permissions.includes(newPermission)
        ? { ...role, permissions: [...role.permissions, newPermission] }
        : role
    );
    setRoles(updatedRoles);
    setNewPermission("");
  };

  // Remove a permission from a role
  const removePermission = (roleId, permission) => {
    const updatedRoles = roles.map((role) =>
      role.id === roleId
        ? {
            ...role,
            permissions: role.permissions.filter((perm) => perm !== permission),
          }
        : role
    );
    setRoles(updatedRoles);
  };

  // Select a role to manage permissions
  const selectRole = (role) => {
    setSelectedRole(role);
    setNewPermission("");
  };

  // Close the permission editor
  const closeEditor = () => {
    setSelectedRole(null);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Permissions Management
        </h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Permissions</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{role.name}</td>
                <td className="border px-4 py-2">
                  {role.permissions.length > 0
                    ? role.permissions.join(", ")
                    : "No Permissions"}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => selectRole(role)}
                    className="text-blue-600 hover:text-blue-800 font-medium mx-2"
                  >
                    Manage Permissions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedRole && (
          <div className="mt-6 bg-gray-50 p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Manage Permissions for: {selectedRole.name}
            </h3>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={newPermission}
                onChange={(e) => setNewPermission(e.target.value)}
                placeholder="Add new permission"
                className="border p-2 rounded flex-1 mr-4"
              />
              <button
                onClick={() => addPermission(selectedRole.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
              >
                Add Permission
              </button>
            </div>
            <ul>
              {selectedRole.permissions.map((perm) => (
                <li
                  key={perm}
                  className="flex justify-between items-center mb-2"
                >
                  <span className="text-gray-700">{perm}</span>
                  <button
                    onClick={() => removePermission(selectedRole.id, perm)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={closeEditor}
              className="mt-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PermissionsTable;
