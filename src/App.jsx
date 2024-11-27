import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
// import Login from "./components/Login";
import UserList from "./components/Users/UserList";
import RoleList from "./components/Roles/RoleList";
import PermissionsTable from "./components/Permissions.jsx/PermissionsTable.jsx";
import Dashboard from "./components/Dashboard"; // Dashboard page
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/users" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/permissions" element={<PermissionsTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
