import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Table, Button, Modal, Form } from 'react-bootstrap';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });

  // Mock data for products
  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Product 1', category: 'Category 1', price: 10.99, stock: 100 },
      { id: 2, name: 'Product 2', category: 'Category 2', price: 19.99, stock: 50 },
      { id: 3, name: 'Product 3', category: 'Category 3', price: 5.99, stock: 200 }
    ];
    setProducts(mockProducts);
  }, []);

  const addProduct = () => {
    // Assuming the new product gets an id based on the length of the current products array + 1
    const id = products.length + 1;
    const updatedProducts = [...products, { ...newProduct, id }];
    setProducts(updatedProducts);
    setShowModal(false);
    setNewProduct({ name: '', category: '', price: '', stock: '' });
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <Card>
      <Card.Body>
        <h2>Products Management</h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>Add Product</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={`/products/${product.id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Stock Quantity</Form.Label>
            <Form.Control type="number" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={addProduct}>Add</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ProductsManagement;
