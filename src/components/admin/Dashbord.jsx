import React from "react";
import "../../css/admin/dashbord.css"

const Dashboard = () => {
  return (
       <div className="container">
      <div className="dashboard">
        <div className="dashboard-card main">
          <div className="dashboard-card-content">
            <img
              src="../../img/img.png"
              alt="Benjamin Terrier"
              className="profile-img"
              width="100"
            />
            <h2>Benjamin Terrier</h2>
            <p>CTO at "La Source"</p>
            <a href="#" className="btn btn-primary">GET IN TOUCH</a>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>3,536</h3>
            <p>contributions</p>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>758</h3>
            <p>followers</p>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>119</h3>
            <p>repositories</p>
          </div>
        </div>
        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>119</h3>
            <p>repositories</p>
          </div>
        </div>
        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>119</h3>
            <p>repositories</p>
          </div>
        </div>
        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>119</h3>
            <p>repositories</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
