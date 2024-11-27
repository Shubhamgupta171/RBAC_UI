import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to the Role-Based Access Control (RBAC) Dashboard! RBAC is a
          method of restricting access based on the roles of users within an
          organization. It ensures that users have only the permissions they
          need to perform their job functions, improving both security and
          operational efficiency.
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
