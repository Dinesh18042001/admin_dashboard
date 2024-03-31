import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const AddDeliveryVendor = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Add Delivery Vendor</h2>
        <div>
          <Link to="/deliveryvendors" className="btn btn-secondary me-2">Cancel</Link>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
      <p>You can view, add, modify, and organize all of your delivery vendors from the delivery vendors page in the admin.</p>
      
      <form>
        <div className="mb-3">
          <label htmlFor="vendorName" className="form-label">Delivery Vendor Name *</label>
          <input type="text" className="form-control" id="vendorName" placeholder="Enter delivery vendor name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="vendorEmail" className="form-label">Email *</label>
          <input type="email" className="form-control" id="vendorEmail" placeholder="Enter delivery vendor email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="vendorContactNo" className="form-label">Contact No. *</label>
          <input type="tel" className="form-control" id="vendorContactNo" placeholder="Enter delivery vendor contact number" required />
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/deliveryvendors" className="btn btn-secondary me-2">Cancel</Link>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddDeliveryVendor;
