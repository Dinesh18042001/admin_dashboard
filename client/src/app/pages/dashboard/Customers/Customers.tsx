import React, { useState } from 'react';

const Customers: React.FC = () => {
  // Sample data of customers
  const [customers, setCustomers] = useState([
    { name: 'biken', status: 'Active', contactNo: '6544848453', email: 'user@gmail.in', orders: 15, createdAt: '2023-05-22 13:21:26' },
    { name: 'hassanii', status: 'Active', contactNo: '9999999988', email: 'hassanii@yahoo.com', orders: 6, createdAt: '2023-05-23 06:16:01' },
    { name: 'new', status: 'Active', contactNo: '5656783422', email: 'new@gmail.com', orders: 1, createdAt: '2023-06-28 05:27:03' },
    { name: 'nisa', status: 'Active', contactNo: '5689231200', email: 'nisa@gmail.com', orders: 1, createdAt: '2023-05-18 13:16:16' },
    { name: 'priyansh', status: 'Active', contactNo: '1456328790', email: 'priyansh1@yopmail.com', orders: '-', createdAt: '-' },
    { name: 'Sanjay Goswami', status: 'Active', contactNo: '123457890', email: 'sanjay61@yopmail.com', orders: '-', createdAt: '-' },
    { name: 'user', status: 'Active', contactNo: '7800568900', email: 'user@gmail.com', orders: 2, createdAt: '2023-06-06 09:14:39' }
  ]);

  // Filter state for search
  const [filter, setFilter] = useState<string>('');

  // Function to filter customers based on search criteria
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase()) ||
    customer.status.toLowerCase().includes(filter.toLowerCase()) ||
    customer.contactNo.includes(filter) ||
    customer.email.toLowerCase().includes(filter.toLowerCase()) ||
    customer.orders.toString().includes(filter) ||
    customer.createdAt.toLowerCase().includes(filter.toLowerCase())
  );

  // Function to handle details button click
  const handleDetailsClick = (customer: any) => {
    // Replace console.log with your logic for displaying details
    console.log("Customer Details:", customer);
  };

  return (
    <div>
      <h2>Active Customers</h2>
      <p>You can view all customers details, add and modify customer details using selected part of your online business.</p>
      
      <div className="row mb-3">
        <div className="col-sm-6 d-flex align-items-center">
          <span className="me-2">Show</span>
          <select className="form-select mx-2" defaultValue="25">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search here..." />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th style={{ fontWeight: 'bold' }}>Name</th>
            <th style={{ fontWeight: 'bold' }}>Status</th>
            <th style={{ fontWeight: 'bold' }}>Contact No.</th>
            <th style={{ fontWeight: 'bold' }}>Email</th>
            <th style={{ fontWeight: 'bold' }}>Orders</th>
            <th style={{ fontWeight: 'bold' }}>Created At</th>
            <th style={{ fontWeight: 'bold' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through filtered customers */}
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.status}</td>
              <td>{customer.contactNo}</td>
              <td>{customer.email}</td>
              <td>{customer.orders}</td>
              <td>{customer.createdAt}</td>
              {/* Add details button */}
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDetailsClick(customer)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;

