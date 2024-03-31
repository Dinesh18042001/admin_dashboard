import React, { useState } from 'react';

interface Product {
  id: number;
  dateTime: string;
  customer: string;
  contact: string;
  paymentStatus: string;
  deliveryStatus: string;
  orderAmount: number;
  returnReason: string;
}

const ProductReturn: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  
  // Sample data for returned products
  const returnedProducts: Product[] = [
    { id: 1, dateTime: '2023-06-28 10:57:03 AM', customer: 'Customer 1', contact: '1234567890', paymentStatus: 'Paid', deliveryStatus: 'Returned', orderAmount: 4000, returnReason: 'Wrong size' },
    { id: 2, dateTime: '2023-06-27 09:45:21 AM', customer: 'Customer 2', contact: '9876543210', paymentStatus: 'Paid', deliveryStatus: 'Returned', orderAmount: 2500, returnReason: 'Defective item' }
  ];

  // Filter returned products based on search term
  const filteredReturnedProducts: Product[] = returnedProducts.filter(product =>
    product.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle changing the number of entries per page
  const handleEntriesPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(parseInt(event.target.value));
  }

  return (
    <div>
      <h2>Returned Products</h2>
      <div className="row mb-3">
        <div className="col-sm-6 d-flex align-items-center">
          <span className="me-2">Show</span>
          <select className="form-select mx-2" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          
        </div>
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th style={{ fontWeight: 'bold' }}>Order ID</th>
            <th style={{ fontWeight: 'bold' }}>Date & Time</th>
            <th style={{ fontWeight: 'bold' }}>Customer</th>
            <th style={{ fontWeight: 'bold' }}>Contact no.</th>
            <th style={{ fontWeight: 'bold' }}>Payment status</th>
            <th style={{ fontWeight: 'bold' }}>Delivery status</th>
            <th style={{ fontWeight: 'bold' }}>Order Amount</th>
            <th style={{ fontWeight: 'bold' }}>Return Reason</th>
            <th style={{ fontWeight: 'bold' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredReturnedProducts.slice(0, entriesPerPage).map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.dateTime}</td>
              <td>{product.customer}</td>
              <td>{product.contact}</td>
              <td>{product.paymentStatus}</td>
              <td>{product.deliveryStatus}</td>
              <td>{product.orderAmount}</td>
              <td>{product.returnReason}</td>
              <td>
                {/* Action button or link for further action */}
                <button className="btn btn-primary">Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductReturn;
