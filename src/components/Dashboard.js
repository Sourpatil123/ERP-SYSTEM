import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import backgroundImage from './1414.jpg'; // Assuming background image path

const Dashboard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card className="m-3 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Card.Body className="text-center">
          <h2 className="mb-4">Dashboard</h2>
          <p className="mb-4">Total number of products: 10</p>
          <p className="mb-4">Total number of orders: 5</p>
          <div className="mb-4">
            <Link to="/products" className="btn btn-primary btn-lg mr-3">
              Manage Products
            </Link>
            
            <Link to="/orders" className="btn btn-primary btn-lg">
              Manage Orders
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
