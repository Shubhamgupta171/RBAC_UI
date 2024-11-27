import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
  ]);

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
      role: "Viewer",
    };
    setUsers([...users, newUser]);
  };

  const editUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    const updatedName = prompt("Enter new name:", userToEdit.name);
    const updatedEmail = prompt("Enter new email:", userToEdit.email);
    const updatedRole = prompt("Enter new role:", userToEdit.role);

    if (updatedName && updatedEmail && updatedRole) {
      const updatedUsers = users.map((user) =>
        user.id === id
          ? { ...user, name: updatedName, email: updatedEmail, role: updatedRole }
          : user
      );
      setUsers(updatedUsers);
    }
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-pink shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Management</h2>
        <button
          onClick={addUser}
          className="mb-4 bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          + Add User
        </button>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-pink-50">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => editUser(user.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
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

export default UserList;
