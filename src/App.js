import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch alongside other components
import { Container } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/calendar" element={<OrdersCalendarView />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
