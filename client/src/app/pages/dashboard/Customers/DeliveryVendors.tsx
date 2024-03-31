import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Vendor {
  name: string;
  email: string;
  contactNo: string;
}

const DeliveryVendors: React.FC = () => {
  // Sample data for delivery vendors
  const [vendors, setVendors] = useState<Vendor[]>([
    { name: 'amaxone', email: 'amaxone@gmail.com', contactNo: '89554747426511' },
    { name: 'Bluedart', email: '', contactNo: '' },
    { name: 'Bussiness', email: '', contactNo: '' },
    { name: 'customer', email: '', contactNo: '' },
    { name: 'customerqwfqw', email: 'rajudat@superior.com', contactNo: '99858585456' },
    { name: 'DHL', email: 'dhl@dhl.com', contactNo: '08442480828' },
    { name: 'DTDC', email: '', contactNo: '' },
    { name: 'India Post', email: '', contactNo: '' },
    { name: 'mamds', email: 'amaxone@vpos.com', contactNo: '878889789798798' },
    { name: 'Professional', email: '', contactNo: '' }
  ]);

  // State for search input
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-sm-6">
          <h2 className="mb-0">All Delivery Vendors</h2>
        </div>
        <div className="col-sm-6 d-flex justify-content-end align-items-center">
          <Link to="/adddeliveryvendor" className="btn btn-primary">Add Delivery Vendor</Link>
        </div>
      </div>
      <p>You can view, add, modify, and organize all of your delivery vendors from the delivery vendors page in the admin.</p>
      
      <div className="row mb-3">
        <div className="col-sm-6 d-flex align-items-center">
          <span className="me-2">Show</span>
          <select className="form-select mx-2" defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        
        <div className="col-sm-6">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search here..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through vendors */}
          {vendors
            .filter((vendor) => 
              vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              vendor.contactNo.includes(searchTerm)
            )
            .map((vendor, index) => (
              <tr key={index}>
                <td>{vendor.name}</td>
                <td>{vendor.email}</td>
                <td>{vendor.contactNo}</td>
                {/* Add action button */}
                <td>
                  <button className="btn btn-primary">Details</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryVendors;
