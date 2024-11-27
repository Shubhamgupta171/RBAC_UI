import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RBACImage from "../assets/rbac-image.jpg"; // Replace with the correct path
import LoginRegisterModal from "./LoginRegisterModal"; // Import the modal
import Navbar from "./Navbar"; // Import the Navbar component

const Home = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [user, setUser] = useState(null); // User state to check if logged in

  useEffect(() => {
    // Check if the user is logged in by checking localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state if found in localStorage
    } else {
      setShowModal(true); // Show modal if no user found (not logged in)
    }
  }, []);

  return (
    <div
      className="relative w-full min-h-screen" // Ensure the container takes full height and width
      style={{
        overflowX: "hidden", // Prevent horizontal scrolling
        height: "100vh", // Full height of the viewport
        width: "101vw", // Full width of the viewport
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${RBACImage})`,
          backgroundSize: "cover", // Ensures the image covers the whole page
          backgroundPosition: "center", // Centers the image
          backgroundAttachment: "fixed", // Keeps the image fixed during scroll
          backgroundRepeat: "no-repeat", // Prevents tiling of the image
          height: "100%", // Full height of the container
          width: "100%", // Full width of the container
          color: "black",
          textShadow: "0 2px 4px rgba(0,0,0,0.7)", // Adds text shadow for better contrast
        }}
      >
        {showModal && <LoginRegisterModal setShowModal={setShowModal} />}

        {user && (
          <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
              Role-Based Access Control (RBAC)
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Secure and efficient management of users, roles, and permissions.
            </p>
            <div className="flex justify-center mb-6">
              <Link
                to="/users"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mr-4"
              >
                Manage Users
              </Link>
              <Link
                to="/roles"
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300 mr-4"
              >
                Manage Roles
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
