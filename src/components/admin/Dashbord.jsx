import React from "react";
import "../../css/admin/dashbord.css";
import Dash_nav from './Dash_nav'

const Dashboard = () => {
  return (
    <div>   
      <Dash_nav/> 
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
            <button href="#" className="btn btn-primary">GET IN TOUCH</button>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>3,536</h3>
            <p>contributions</p>
            <button>edite</button>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>3,536</h3>
            <p>contributions</p>
            <button>edite</button>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>3,536</h3>
            <p>contributions</p>
            <button>edite</button>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>3,536</h3>
            <p>contributions</p>
            <button>edite</button>
          </div>
        </div>

        <div className="dashboard-card stat">
          <div className="dashboard-card-content">
            <h3>3,536</h3>
            <p>contributions</p>
            <button>edite</button>
          </div>
        </div>

      </div>
    </div></div>
   
  );
};

export default Dashboard;
