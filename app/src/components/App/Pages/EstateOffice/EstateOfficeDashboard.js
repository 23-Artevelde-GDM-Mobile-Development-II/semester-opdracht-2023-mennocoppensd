import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Design/Public/Header/Header";
import { FaCog } from "react-icons/fa";
import "./EstateOfficeDashboard.css";

const EstateOfficeDashboard = () => {
  return (
    <>
      <Header />
      <div className="admin-dashboard-container">
        <h1 className="admin-dashboard-title">Estate Office Dashboard</h1>
        <div className="admin-dashboard-content">
          <Link to="/properties" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">🏠</span>
            <h2 className="admin-dashboard-tile-title">Properties</h2>
            <p className="admin-dashboard-tile-text">
              View and manage all properties
            </p>
          </Link>
          <Link to="/estate-offices" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">📠</span>
            <h2 className="admin-dashboard-tile-title">Estate Offices</h2>
            <p className="admin-dashboard-tile-text">
              View and manage all estate offices
            </p>
          </Link>
          <Link to="/users" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">👥</span>
            <h2 className="admin-dashboard-tile-title">Users</h2>
            <p className="admin-dashboard-tile-text">
              View and manage all users
            </p>
          </Link>
          <Link to="/categories" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">📄</span>
            <h2 className="admin-dashboard-tile-title">Categories</h2>
            <p className="admin-dashboard-tile-text">
              View and manage all categories
            </p>
          </Link>
        </div>
        <div className="admin-dashboard-other-options">
          <Link to="/admin/settings" className="admin-dashboard-other-option">
            <FaCog className="admin-dashboard-other-option-icon" />
            Settings
          </Link>
        </div>
      </div>
    </>
  );
};

export default EstateOfficeDashboard;