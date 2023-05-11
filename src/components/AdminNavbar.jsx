import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav
      className="nav flex-column bg-info "
      style={{ height: "100vh", minWidth: "16%" }}
    >
      <Link to="/" className="btn btn-primary btn-sm m-3" aria-current="page">
        Home
      </Link>
      <Link to="/admin/dashboard" className="btn btn-primary btn-sm m-3">
        DashBoard
      </Link>
      <Link to="/admin/dashboard/upload" className="btn btn-primary btn-sm m-3">
        Upload book
      </Link>
      <Link to="/admin/dashboard/manage" className="btn btn-primary btn-sm m-3">
        Manage Books
      </Link>
    </nav>
  );
};

export default AdminNavbar;
