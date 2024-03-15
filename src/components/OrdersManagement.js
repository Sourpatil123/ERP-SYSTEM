import React, { useState } from 'react';
import { Card, Table, Button, Modal, Form } from 'react-bootstrap';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', orderDate: '2022-03-10', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2022-03-11', status: 'Processing' },
    { id: 3, customerName: 'Alice Johnson', orderDate: '2022-03-12', status: 'Completed' }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newOrder, setNewOrder] = useState({ customerName: '', orderDate: '', status: '' });

  const addOrder = () => {
    const id = orders.length + 1;
    const updatedOrders = [...orders, { ...newOrder, id }];
    setOrders(updatedOrders);
    setShowModal(false);
    setNewOrder({ customerName: '', orderDate: '', status: '' });
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <Card>
      <Card.Body>
        <h2>Orders Management</h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>Add Order</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger" onClick={() => deleteOrder(order.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type="text" value={newOrder.customerName} onChange={e => setNewOrder({...newOrder, customerName: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Order Date</Form.Label>
            <Form.Control type="date" value={newOrder.orderDate} onChange={e => setNewOrder({...newOrder, orderDate: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" value={newOrder.status} onChange={e => setNewOrder({...newOrder, status: e.target.value})} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={addOrder}>Add</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default OrdersManagement;
