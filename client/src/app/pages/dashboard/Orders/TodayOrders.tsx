import React, { useState } from 'react';
import { Container, Row, Col, Table, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { BsCheck, BsPrinter } from 'react-icons/bs'; // Import icons from react-icons

interface Order {
  id: number;
  dateTime: string;
  customer: string;
  contactNo: string;
  paymentStatus: string;
  deliveryStatus: string;
  amount: string;
}

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const TodayOrders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const orders: Order[] = [
    {
      id: 1,
      dateTime: "2024-03-08 09:30",
      customer: "John Doe",
      contactNo: "123-456-7890",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      amount: "$100.00"
    },
    {
      id: 2,
      dateTime: "2024-03-08 10:15",
      customer: "Jane Smith",
      contactNo: "987-654-3210",
      paymentStatus: "Pending",
      deliveryStatus: "Not delivered",
      amount: "$75.50"
    },
    // Add more sample records as needed
    {
      id: 3,
      dateTime: "2024-03-08 11:00",
      customer: "Alice Johnson",
      contactNo: "456-789-0123",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      amount: "$150.25"
    },
    {
      id: 4,
      dateTime: "2024-03-08 12:30",
      customer: "Bob Williams",
      contactNo: "789-012-3456",
      paymentStatus: "Pending",
      deliveryStatus: "In transit",
      amount: "$200.00"
    },
    {
      id: 5,
      dateTime: "2024-03-08 13:45",
      customer: "Eve Brown",
      contactNo: "012-345-6789",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      amount: "$50.75"
    }
  ];

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h2 className="mb-3">Today's Orders</h2>
      <p className="mb-3">You can view today's all orders, process orders, as well as print invoice slips for orders placed from your online business store.</p>


      <Row className="mb-3">
        <Col xs={12} sm={6} md={6} className="d-flex align-items-center">
          <span className="me-2">entries</span>
          <Form.Select>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </Form.Select>
        </Col>
        <Col xs={12} sm={6} md={6} className="d-flex justify-content-end align-items-center">
          <InputGroup>
            <FormControl placeholder="Search here..." className="form-control-sm" />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>





      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date & Time</th>
            <th>Customer</th>
            <th>Contact no.</th>
            <th>Payment status</th>
            <th>Delivery status</th>
            <th>Order Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.length > 0 ? (
            currentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.dateTime}</td>
                <td>{order.customer}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{order.contactNo}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.deliveryStatus}</td>
                <td>{order.amount}</td>
                <td>

                  <div className="d-flex flex-column flex-sm-row align-items-center">
                    <Button variant="primary" className="mb-2 mb-sm-0 me-sm-2 btn-sm"><BsCheck /> Process Order</Button>
                    <Button variant="success" className="btn-sm"><BsPrinter /> Print Invoice</Button>
                  </div>


                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center">No Records Found</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
        <Button variant="secondary" onClick={() => paginate(currentPage + 1)} disabled={currentOrders.length < ITEMS_PER_PAGE}>Next</Button>
      </div>
    </Container>
  );
};

export default TodayOrders;









