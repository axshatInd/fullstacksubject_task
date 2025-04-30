import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-center-container">
      <h2>Welcome to Student Team Management</h2>
      <p>Manage your team members efficiently!</p>
      <div className="home-button-row">
        <Link to="/add-member"><button>Add Member</button></Link>
        <Link to="/view-members"><button>View Members</button></Link>
      </div>
    </div>
  );
}

export default Home;
