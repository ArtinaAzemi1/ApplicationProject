import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate(); // Rregullova emrin e variablës

  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(result => {
        if (result.data.Status) { 
          localStorage.removeItem("valid");
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to="/dashboard" className="navbar-brand d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5 fw-bolder d-none d-sm-inline">Code With Yousof</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item w-100">
                <Link to="/dashboard" className="nav-link text-white px-0 align-middle">
                  <i className="bi bi-speedometer2 fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item w-100">
                <Link to="/student" className="nav-link px-0 align-middle text-white">
                  <i className="bi bi-people fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">Manage Employees</span>
                </Link>
              </li>
              <li className="nav-item w-100">
                <Link to="/dashboard/category" className="nav-link px-0 align-middle text-white">
                  <i className="bi bi-columns fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="nav-item w-100">
                <Link to="/dashboard/profile" className="nav-link px-0 align-middle text-white">
                  <i className="bi bi-person fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="nav-item w-100" onClick={handleLogout}>
                <button className="nav-link border-0 bg-transparent px-0 align-middle text-white">
                  <i className="bi bi-power fs-4"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;