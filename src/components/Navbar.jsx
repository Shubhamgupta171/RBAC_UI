// Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/"); // Redirect to the login page
  };

  return (
    <nav className="bg-blue-950 text-white p-3 fixed top-0 left-0 w-full shadow-md flex items-center justify-between z-50">
      <div>
        <Link to="/" className="mr-4 hover:text-gray-300">
          Home
        </Link>
        <Link to="/users" className="mr-4 hover:text-gray-300">
          Users
        </Link>
        <Link to="/roles" className="mr-4 hover:text-gray-300">
          Roles
        </Link>
        <Link to="/permissions" className="mr-4 hover:text-gray-300">
          Permissions
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
