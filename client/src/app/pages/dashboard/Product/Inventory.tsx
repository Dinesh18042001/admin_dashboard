import React from 'react';
import { Table, Input, Button } from 'antd';

const Inventory: React.FC = () => {
  // Dummy product data with image URLs
  const products = [
    { id: 1, name: 'shirt', size: 's', color: 'Red', status: 'Inactive', SKU: '', quantity: 0, seller: 'Mishara', image: 'https://5.imimg.com/data5/PM/ED/DR/SELLER-72821448/plain-shirt.jpg' },
    { id: 2, name: 'shirt', size: 'm', color: 'Red', status: 'Inactive', SKU: '', quantity: 0, seller: 'Mishara', image: 'https://5.imimg.com/data5/PM/ED/DR/SELLER-72821448/plain-shirt.jpg' },
    { id: 3, name: 'shirt', size: 'l', color: 'Red', status: 'Inactive', SKU: '', quantity: 0, seller: 'Mishara', image: 'https://5.imimg.com/data5/PM/ED/DR/SELLER-72821448/plain-shirt.jpg' },
    { id: 4, name: 'shirt', size: 'xL', color: 'Red', status: 'Inactive', SKU: '', quantity: 0, seller: 'Mishara', image: 'https://5.imimg.com/data5/PM/ED/DR/SELLER-72821448/plain-shirt.jpg' },
    { id: 5, name: 'shirt', size: 'XXL', color: 'Red', status: 'Inactive', SKU: '', quantity: 0, seller: 'Mishara', image: 'https://5.imimg.com/data5/PM/ED/DR/SELLER-72821448/plain-shirt.jpg' },
    { id: 6, name: 'Top ', size: 's', color: 'Red', status: 'Inactive', SKU: '2123', quantity: 10, seller: 'Mohan', image: 'https://m.media-amazon.com/images/I/71U9InNlrsL._SY879_.jpg' },
    { id: 7, name: 'Top', size: 's', color: 'Blue', status: 'Inactive', SKU: '2123', quantity: 10, seller: 'Mohan', image: 'https://m.media-amazon.com/images/I/71U9InNlrsL._SY879_.jpg' },
    { id: 8, name: 'Top', size: 's', color: 'greeen', status: 'Inactive', SKU: '2123', quantity: 10, seller: 'Mohan', image: 'https://m.media-amazon.com/images/I/71U9InNlrsL._SY879_.jpg' },
    { id: 9, name: 'Top ', size: 'm', color: 'Red', status: 'Inactive', SKU: '2123', quantity: 10, seller: 'Mohan', image: 'https://m.media-amazon.com/images/I/71U9InNlrsL._SY879_.jpg' },
    { id: 10, name: 'Top', size: 'm', color: 'Blue', status: 'Inactive', SKU: '2123', quantity: 10, seller: 'Mohan', image: 'https://m.media-amazon.com/images/I/71U9InNlrsL._SY879_.jpg' }
  ];

  const columns = [
    { title: 'Image', dataIndex: 'image', key: 'image', render: (image: string) => <img src={image} alt="Product" style={{ width: '50px', height: '50px', objectFit: 'cover' }} /> },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Size', dataIndex: 'size', key: 'size' },
    { title: 'Color', dataIndex: 'color', key: 'color' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'SKU', dataIndex: 'SKU', key: 'SKU' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Seller', dataIndex: 'seller', key: 'seller' },
    { title: 'Actions', dataIndex: 'actions', key: 'actions', render: (text: any, record: any) => <Button>Edit</Button> }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Inventory</h1>
        <Input.Search placeholder="Search products" style={{ width: 200 }} />
      </div>
      <p className='mb-6'>You can view, add, modify, and organize all of your inventories from the inventories page in the admin.</p>
      <Table dataSource={products} columns={columns} />
      <div style={{ marginTop: '16px' }}>
        <Input style={{ width: '80px', marginRight: '8px' }} />
        <Button type="primary" style={{ marginRight: '8px' }}>Add Quantity</Button>
        <Button type="primary">Set Quantity</Button>
      </div>
    </div>
  );
};

export default Inventory;

