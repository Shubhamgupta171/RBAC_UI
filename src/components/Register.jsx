import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Register = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Check if the user is logged in (this can be based on localStorage or a context)
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registering with: ", formData);
    // On success, redirect to login page
    localStorage.setItem("user", JSON.stringify({ email: formData.email }));
    navigate("/login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    if (formData.email && formData.password) {
      // Simulate login success
      localStorage.setItem("user", JSON.stringify({ email: formData.email }));
      navigate("/dashboard"); // Navigate to a protected page after login
    } else {
      alert("Please enter valid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        className="bg-local relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('../assets/rbac-image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Register as Admin</h2>

          <form onSubmit={handleRegister}>
            {/* Email input */}
            <TEInput
              type="email"
              label="Email address"
              size="lg"
              className="mb-6"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Password input */}
            <TEInput
              type="password"
              label="Password"
              size="lg"
              className="mb-6"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />

            {/* Confirm Password input */}
            <TEInput
              type="password"
              label="Confirm Password"
              size="lg"
              className="mb-6"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />

            <div className="text-center lg:text-left">
              <TERipple rippleColor="light">
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  Register
                </button>
              </TERipple>
            </div>
          </form>

          <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    // Render Login form if the user is logged in
    return (
      <div
        className="bg-local relative min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: "skyblue", // Background for logged-in users
        }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Login as Admin</h2>

          <form onSubmit={handleLogin}>
            {/* Email input */}
            <TEInput
              type="email"
              label="Email address"
              size="lg"
              className="mb-6"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Password input */}
            <TEInput
              type="password"
              label="Password"
              size="lg"
              className="mb-6"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />

            <div className="text-center lg:text-left">
              <TERipple rippleColor="light">
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  Login
                </button>
              </TERipple>
            </div>
          </form>

          <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    );
  }
};

export default Register;
