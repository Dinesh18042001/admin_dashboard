import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Products.css'; // Import custom CSS file for additional styling

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>(''); // New state for search query
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProductsMini = async () => {
            try {
                // Simulating a network request delay
                await new Promise((resolve) => setTimeout(resolve, 1000));
                // Dummy product data
                const dummyData: Product[] = [
                    {
                        id: '1',
                        code: 'PROD001',
                        name: 'shoes',
                        description: 'shoes',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHvCAKIrDucDuibJJYTl0hU3GO5ga7RkBeDpmvianBw&s',
                        price: 10,
                        category: 'man',
                        quantity: 100,
                        inventoryStatus: 'INSTOCK',
                        rating: 2
                    },
                    {
                        id: '2',
                        code: 'PROD002',
                        name: 'Watch',
                        description: 'Watch',
                        image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcfb00132/images/Titan/Catalog/1806NM01_1.jpg?sw=360&sh=360',
                        price: 20,
                        category: 'watch',
                        quantity: 100,
                        inventoryStatus: 'INSTOCK',
                        rating: 4.7
                    },
                    {
                        id: '3',
                        code: 'PROD003',
                        name: 'Tshirt',
                        description: 'Tshirt',
                        image: 'https://images.meesho.com/images/products/75970557/6kmep_400.webp',
                        price: 30,
                        category: 'tshirt',
                        quantity: 100,
                        inventoryStatus: 'LOWSTOCK',
                        rating: 4.2
                    },
                    {
                        id: '4',
                        code: 'PROD004',
                        name: 'Shert for man',
                        description: 'Shert for man',
                        image: 'https://5.imimg.com/data5/VL/NW/WX/ANDROID-91228054/product-jpeg-500x500.jpg',
                        price: 40,
                        category: 'man',
                        quantity: 100,
                        inventoryStatus: 'OUTOFSTOCK',
                        rating: 4.8
                    },
                    {
                        id: '5',
                        code: 'PROD005',
                        name: 'Kids Shirts',
                        description: 'Kids Shirts',
                        image: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/15414379a.webp',
                        price: 50,
                        category: 'kids',
                        quantity: 100,
                        inventoryStatus: 'INSTOCK',
                        rating: 2
                    },
                    {
                        id: '6',
                        code: 'PROD006',
                        name: 'Kids Shirts',
                        description: 'Kids Shirts',
                        image: 'https://reroute.in/cdn/shop/products/cornflower_900x_43b1aa47-6044-4219-b27e-75ba1f5e4e0d_500x500.webp?v=1701345946',
                        price: 70,
                        category: 'women',
                        quantity: 100,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    },
                    {
                        id: '7',
                        code: 'PROD007',
                        name: 'Womens Jackets',
                        description: 'Womens Jackets',
                        image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/03/af0c6a42-93f6-482b-80c7-9514350c1a1f.jpg',
                        price: 70,
                        category: 'women',
                        quantity: 100,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    }
                ];

                setProducts(dummyData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };

        getProductsMini();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            selectedCategory
                ? products.filter((product) => product.category === selectedCategory)
                : products.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                ) // Filter based on search query
        );
    }, [selectedCategory, products, searchQuery]);

    const formatCurrency = (value: number): string => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const handleEdit = (productId: string) => {
        // Implement edit functionality here
        console.log("Edit Product ID:", productId);
    };

    const handleDelete = (productId: string) => {
        // Implement delete functionality here
        console.log("Delete Product ID:", productId);
    };

    const ratingBodyTemplate = (product: Product) => {
        const scaledRating = product.rating;
        return (
            <div>
                <Rating value={scaledRating} readOnly cancel={false} />
                <span>{scaledRating.toFixed(1)} ({product.rating}/5 stars)</span>
            </div>
        );
    };

    const statusBodyTemplate = (product: Product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    return (
        <div className="card">
            <div className="filter-and-add-container">
                <div className="filter-section">
                    <label htmlFor="categoryFilter">Filter by Category:</label>
                    <select
                        id="categoryFilter"
                        className="form-control"
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        value={selectedCategory || ''}
                    >
                        <option value="">All Categories</option>
                        <option value="man">Man</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                        {/* Add options for other categories */}
                    </select>
                </div>

                <div className="search-section mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="add-product-button mt-3">
                    <Link to="/addproducts" className="btn btn-primary">Add Product</Link>
                </div>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
                <div className="table-responsive">
                    <Table striped bordered hover className="products-table">
                        <thead>
                            <tr>
                                <th>Check</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Reviews</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="product-row">
                                    <td>
                                        <input type="checkbox" className="form-check-input" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>
                                        <img src={product.image} alt={product.name} className="product-image" />
                                    </td>
                                    <td>{formatCurrency(product.price)}</td>
                                    <td>{product.category}</td>
                                    <td>{ratingBodyTemplate(product)}</td>
                                    <td>{statusBodyTemplate(product)}</td>
                                    <td>
                                        <FaEdit className="edit-icon" onClick={() => handleEdit(product.id)} />
                                        <FaTrash className="delete-icon" onClick={() => handleDelete(product.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Products;

