import React from 'react';

const DeliveredOrders: React.FC = () => {
  // Sample data for delivered orders
  const orders = [
    { id: 1, dateTime: '2023-06-28 10:57:03 AM', customer: 'Customer 1', contact: '1234567890', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 4000 },
    { id: 2, dateTime: '2023-06-27 09:45:21 AM', customer: 'Customer 2', contact: '9876543210', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 2500 }
  ];

  return (
    <div>
      <h2>Delivered Orders</h2>
      <p>You can view all delivered orders, Process order, as well as print invoices slip for orders placed from your online business store.</p>
      
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

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th style={{ fontWeight: 'bold' }}>Order ID</th>
            <th style={{ fontWeight: 'bold' }}>Date & Time</th>
            <th style={{ fontWeight: 'bold' }}>Customer</th>
            <th style={{ fontWeight: 'bold' }}>Contact no.</th>
            <th style={{ fontWeight: 'bold' }}>Payment status</th>
            <th style={{ fontWeight: 'bold' }}>Delivery status</th>
            <th style={{ fontWeight: 'bold' }}>Order Amount</th>
            <th style={{ fontWeight: 'bold' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.dateTime}</td>
              <td>{order.customer}</td>
              <td>{order.contact}</td>
              <td>{order.paymentStatus}</td>
              <td>{order.deliveryStatus}</td>
              <td>{order.orderAmount}</td>
              <td>
                {/* Action button or link for processing the order */}
                <button className="btn btn-primary">Process</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveredOrders;

