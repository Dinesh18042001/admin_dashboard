import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  status: string;
  image: string;
}

const Categories: React.FC = () => {
  // Dummy category data with image URLs
  const categories: Category[] = [
    { id: 1, name: 'MEN', status: 'Active', image: 'https://kingdomofwhite.com/cdn/shop/files/DSC06724copy_3000x.jpg?v=1705904333' },
    { id: 2, name: 'KIDS', status: 'Active', image: 'https://m.media-amazon.com/images/I/4101uQGDyrL.jpg' },
    { id: 3, name: 'MEN', status: 'Active', image: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw44d7c965/original/90_1010816-1A04165_1D360_10_RegularFitJeans-Clothing-Versace-online-store_0_2.jpg?sw=850&q=85&strip=true' },
    { id: 4, name: 'shoes', status: 'Active', image: 'https://m.media-amazon.com/images/I/51+RN3hPujL._SY695_.jpg' },
    { id: 5, name: 'Women', status: 'Active', image: 'https://img3.junaroad.com/uiproducts/18325461/zoom_0-1649417872.jpg' }
  ];

  const columns = [
    { title: 'Image', dataIndex: 'image', key: 'image', render: (image: string) => <img src={image} alt="Category" className="img-thumbnail" style={{ width: '50px', height: '50px', objectFit: 'cover' }} /> },
    { title: 'Category Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status' }
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1>Categories</h1>
          <p>You can view all Categories of product, Category are the primary way to combine products with similar characteristic.</p>
        </div>
        <Link to="/addcategoriesform" className="btn btn-primary">Add Categories</Link>
      </div>
      <Table dataSource={categories} columns={columns} pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default Categories;





