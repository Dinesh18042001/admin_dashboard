import React, { useState } from 'react';

interface Order {
  id: number;
  dateTime: string;
  customer: string;
  contact: string;
  paymentStatus: string;
  deliveryStatus: string;
  orderAmount: number;
}

const DeliveredOrders: React.FC = () => {
  // Sample data for delivered orders
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const orders: Order[] = [
    { id: 1, dateTime: '6/28/2023, 10:57:03 AM', customer: 'new', contact: '5656783422', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 4000 },
    { id: 2, dateTime: '6/6/2023, 2:44:39 PM', customer: 'user', contact: '7800568900', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 3000 },
    { id: 3, dateTime: '6/6/2023, 2:44:39 PM', customer: 'user', contact: '7800568900', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 2000 },
    { id: 4, dateTime: '5/23/2023, 11:46:01 AM', customer: 'hassanii', contact: '9999999988', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 2000 },
    { id: 5, dateTime: '5/22/2023, 6:51:26 PM', customer: 'biken', contact: '6544848453', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 1000 },
    { id: 6, dateTime: '5/22/2023, 5:33:30 PM', customer: 'hassanii', contact: '9999999988', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 3000 },
    { id: 7, dateTime: '5/22/2023, 11:49:23 AM', customer: 'hassanii', contact: '9999999988', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 1000 },
    { id: 8, dateTime: '5/22/2023, 11:16:56 AM', customer: 'biken', contact: '6544848453', paymentStatus: 'Paid', deliveryStatus: 'Delivered', orderAmount: 2000 },
    { id: 9, dateTime: '5/22/2023, 11:01:35 AM', customer: 'biken', contact: '6544848453', paymentStatus: 'Unpaid', deliveryStatus: 'Delivered', orderAmount: 0 },
    { id: 10, dateTime: '5/22/2023, 11:00:51 AM', customer: 'biken', contact: '6544848453', paymentStatus: 'Unpaid', deliveryStatus: 'Delivered', orderAmount: 0 },
  ];

  // Filter orders based on search term
  const filteredOrders: Order[] = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle changing the number of entries per page
  const handleEntriesPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(parseInt(event.target.value));
  }

  return (
    <div className="container">
      <h1>Delivered Orders</h1>
      <p>You can view all delivered orders, Process order, as well as print invoices slip for orders placed from your online business store.</p>

      <div className="row">
        <div className="col-md-6">
          <p className="float-left">Show
            <select className="form-control d-inline-block ml-1" value={entriesPerPage} onChange={handleEntriesPerPageChange}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={filteredOrders.length}>All</option>
            </select>
            entries
          </p>
        </div>
        <div className="col-md-6 mt-6">
          <div className="form-group float-right">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table mt-3">
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
            {filteredOrders.slice(0, entriesPerPage).map(order => (
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
                  <button className="btn btn-primary" onClick={() => processOrder(order.id)}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const processOrder = (orderId: number) => {
  // Implement your processing logic here
  console.log(`Processing order with ID ${orderId}`);
}

export default DeliveredOrders;

