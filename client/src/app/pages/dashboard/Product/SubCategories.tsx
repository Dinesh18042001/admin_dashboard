import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubCategories = () => {
  // Dummy sub-category data
  const subCategories = [
    { id: 1, name: 'watches', status: 'Active', updatedAt: '9/9/2023, 3:11:11 PM' },
    { id: 2, name: 'sunglasses', status: 'Active', updatedAt: '9/9/2023, 3:12:58 PM' },
    { id: 3, name: 'SELF CARE', status: 'Inactive', updatedAt: '8/14/2023, 6:24:30 PM' },
    { id: 4, name: 'kitchen', status: 'Inactive', updatedAt: '5/20/2023, 3:44:06 PM' },
    { id: 5, name: 'jewelery', status: 'Active', updatedAt: '9/9/2023, 3:10:18 PM' },
    { id: 6, name: 'infants', status: 'Inactive', updatedAt: '5/20/2023, 3:42:25 PM' },
    { id: 7, name: 'GROOMING', status: 'Active', updatedAt: '8/14/2023, 6:24:11 PM' },
    { id: 8, name: 'GIFTS', status: 'Active', updatedAt: '8/14/2023, 6:22:50 PM' },
    { id: 9, name: 'CLOTHING', status: 'Active', updatedAt: '10/11/2023, 3:13:28 PM' },
    { id: 10, name: 'CLOTHING', status: 'Active', updatedAt: '9/8/2023, 2:14:06 AM' }
  ];

  const columns = [
    { title: 'Sub Category name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Updated At', dataIndex: 'updatedAt', key: 'updatedAt' },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button variant="primary">Edit</Button>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Sub Categories</h1>
        <Link to="/addsubcategoriesform" className="btn btn-primary">Add SubCategories</Link>
      </div>
      <p>You can view all Sub Categories of product. Sub Category are the primary way to combine products with similar characteristic.</p>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sub Category name</th>
            <th>Status</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((subCategory) => (
            <tr key={subCategory.id}>
              <td>{subCategory.name}</td>
              <td>{subCategory.status}</td>
              <td>{subCategory.updatedAt}</td>
              <td><Button variant="primary">Edit</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SubCategories;


