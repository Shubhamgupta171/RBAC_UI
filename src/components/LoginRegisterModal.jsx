import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRegisterModal = ({ setShowModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "csm23@gmail.com", // Default email for testing
    password: "1234", // Default password for testing
    confirmPassword: "1234", // Default password for registration
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // registration logic
    if (formData.password === formData.confirmPassword) {
      localStorage.setItem("user", JSON.stringify({ email: formData.email }));
      setShowModal(false);
      navigate("/home"); // Navigate to homepage/dashboard
    } else {
      alert("Passwords do not match");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login logic (just comparing with default credentials)
    if (
      formData.email === "csm23@gmail.com" &&
      formData.password === "1234"
    ) {
      localStorage.setItem("user", JSON.stringify({ email: formData.email }));
      setShowModal(false); // Close modal
      navigate("/home"); // Navigate to homepage/dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border rounded mt-2"
            />
          </div>
          {isRegistering && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-3 border rounded mt-2"
              />
            </div>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-3 mt-4 bg-blue-600 text-white rounded"
            >
              {isRegistering ? "Register" : "Login"}
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsRegistering(false)}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsRegistering(true)}
                className="text-blue-500 cursor-pointer"
              >
                Register
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
