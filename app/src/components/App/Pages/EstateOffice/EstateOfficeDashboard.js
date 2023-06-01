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
        <Link to={{ pathname: "/properties", state: { from: "/office" } }} className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">🏠</span>
            <h2 className="admin-dashboard-tile-title">Properties</h2>
            <p className="admin-dashboard-tile-text">
              View and manage your properties
            </p>
          </Link>
          <Link to="/office/:officeId/dashboard" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">💬</span>
            <h2 className="admin-dashboard-tile-title">Messages</h2>
            <p className="admin-dashboard-tile-text">
              View estate office messages
            </p>
          </Link>
          <Link to="/users" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">👥</span>
            <h2 className="admin-dashboard-tile-title">Add colleagues</h2>
            <p className="admin-dashboard-tile-text">
              View and manage your colleagues
            </p>
          </Link>
          <Link to="/estate-offices" className="admin-dashboard-tile">
            <span className="admin-dashboard-tile-icon">🏢</span>
            <h2 className="admin-dashboard-tile-title">Estate Office</h2>
            <p className="admin-dashboard-tile-text">
              View and manage estate office details
            </p>
          </Link>
        </div>
        <div className="admin-dashboard-other-options">
          <Link to="/office/settings/:id" className="admin-dashboard-other-option">
            <FaCog className="admin-dashboard-other-option-icon" />
            Settings
          </Link>
        </div>
      </div>
    </>
  );
};

export default EstateOfficeDashboard;