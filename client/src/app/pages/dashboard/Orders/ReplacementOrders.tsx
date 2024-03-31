import React, { useState } from 'react';

interface ReplacementOrder {
  id: number;
  dateTime: string;
  customer: string;
  contact: string;
  paymentStatus: string;
  deliveryStatus: string;
  orderAmount: number;
  reason: string;
}

const ReplacementOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const replacementOrders: ReplacementOrder[] = [
    { id: 1, dateTime: '2023-06-28 10:57:03 AM', customer: 'Customer 1', contact: '1234567890', paymentStatus: 'Paid', deliveryStatus: 'Replacement', orderAmount: 4000, reason: 'Defective item' },
    { id: 2, dateTime: '2023-06-27 09:45:21 AM', customer: 'Customer 2', contact: '9876543210', paymentStatus: 'Paid', deliveryStatus: 'Replacement', orderAmount: 2500, reason: 'Wrong color' }
  ];

  const filteredReplacementOrders: ReplacementOrder[] = replacementOrders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEntriesPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(parseInt(event.target.value));
  }

  return (
    <div>
      <h2>Replacement Orders</h2>
      <p>You can view all replacement orders, Process order, as well as print invoices slip for orders placed from your online business store.</p>

      <div className="row mb-3">
        <div className="col-sm-6 d-flex align-items-center">
          <span className="me-2">Show</span>
          <select className="form-select mx-2" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>entries</span>
        </div>
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>

      <div className="table-responsive">
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
              <th style={{ fontWeight: 'bold' }}>Return & Replacement Reason</th>
              <th style={{ fontWeight: 'bold' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredReplacementOrders.slice(0, entriesPerPage).map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.dateTime}</td>
                <td>{order.customer}</td>
                <td>{order.contact}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.deliveryStatus}</td>
                <td>{order.orderAmount}</td>
                <td>{order.reason}</td>
                <td>
                  {/* Action button or link for further action */}
                  <button className="btn btn-primary">Action</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReplacementOrders;
