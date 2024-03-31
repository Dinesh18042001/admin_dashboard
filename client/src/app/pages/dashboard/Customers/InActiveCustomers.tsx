import React, { useState } from 'react';

const InActiveCustomers: React.FC = () => {
  // Sample data of inactive customers
  const [customers, setCustomers] = useState([
    { name: 'abcd', status: 'Inactive', contactNo: '3265988989', email: 'abcd@gmail.com', orders: 2, createdAt: '2023-05-20 13:19:46' },
    { name: 'addidas', status: 'Inactive', contactNo: '3214569872', email: 'logical1@yopmail.com', orders: '-', createdAt: '5/22/2023, 2:13:15 PM' },
    { name: 'Mishara', status: 'Inactive', contactNo: '9088999999', email: 'dressvendo123@gmail.com', orders: '-', createdAt: '3/6/2024, 2:59:29 PM' }
  ]);

  // Filter state for search
  const [filter, setFilter] = useState<string>('');

  // Function to filter inactive customers based on search criteria
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
      <h2>Inactive Customers</h2>
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
          {/* Map through filtered inactive customers */}
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

export default InActiveCustomers;
