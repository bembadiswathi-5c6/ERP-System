import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  // these numbers are fetched from an API
  const totalProducts = 200;
  const totalOrders = 50;

  return (
    <div className="container">
      <h2 className="title">Simplified ERP System </h2>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3>Total number of Products</h3>
            <p>{totalProducts}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Total number of Orders</h3>
            <p>{totalOrders}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Calendar View</h3>
            <p>Go to Calendar</p>
          </Link>
        </div>
        <div className="metric">
       
        <a href="https://github.com/bembadiswathi-5c6/swathi_portfolio" target="_blank" rel="noopener noreferrer">
            <h3>View My Profile</h3>
            <p>HIRE ME</p>
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
