import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  image: string;
  sellerName: string;
  name: string;
  status: string;
  lastUpdated: string;
}

const AllProducts: React.FC = () => {
  // Updated dummy product data
  const [products, setProducts] = useState<Product[]>([
    { id: 1, image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/450310/item/goods_58_450310.jpg?width=750', sellerName: 'hassani', name: 'jacket', status: '', lastUpdated: '2/7/2024, 12:32:02 PM' },
    { id: 2, image: 'https://olaotter.com/cdn/shop/files/97.jpg?v=1708675872&width=1200', sellerName: 'men cloth', name: 'kids dress', status: '', lastUpdated: '2/16/2024, 8:24:14 AM' },
    { id: 3, image: 'https://i.pinimg.com/564x/85/22/34/8522346c05525356198706df30c7ebe0.jpg', sellerName: 'men cloth', name: 'sweet shirts', status: '', lastUpdated: '1/8/2024, 7:42:29 PM' },
    { id: 4, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32932916-f659-4926-8293-25df5848206a/jordan-stay-loyal-3-shoes-GNHN2X.png', sellerName: 'Mohan shoes', name: 'Nike shoes jorddi', status: '', lastUpdated: '1/10/2024, 3:34:06 PM' },
    { id: 5, image: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1497809_lifestyle?$rl_df_pdp_5_7_lif$', sellerName: 'Mohan shoes', name: 'Nike shirt', status: '', lastUpdated: '3/6/2024, 5:19:06 PM' },
    { id: 6, image: 'https://m.media-amazon.com/images/I/714vBo0UBQL._SY879_.jpg', sellerName: 'Mohan shoes', name: 'Top tr', status: '', lastUpdated: '3/6/2024, 5:19:08 PM' },
    { id: 7, image: 'https://zlaatafashion.com/cdn/shop/files/q_1.jpg?v=1705654393&width=1200', sellerName: 'na', name: 't-shirt', status: '', lastUpdated: '3/6/2024, 5:19:11 PM' },
    { id: 8, image: 'https://m.media-amazon.com/images/I/51+RN3hPujL._SY695_.jpg', sellerName: 'na', name: 'men-shoes', status: '', lastUpdated: '3/6/2024, 5:19:13 PM' },
    { id: 9, image: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1468099_alternate1?$rl_df_pdp_5_7$', sellerName: 'na', name: 'black shoes for men', status: '', lastUpdated: '3/6/2024, 5:19:15 PM' },
    { id: 10, image: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1504145_alternate1?$rl_df_pdp_5_7$', sellerName: 'na', name: 'brown shoes', status: '', lastUpdated: '3/6/2024, 5:21:04 PM' },
    { id: 11, image: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1504145_alternate1?$rl_df_pdp_5_7$', sellerName: 'na', name: 'brown shoes', status: '', lastUpdated: '3/6/2024, 5:21:04 PM' },
    { id: 12, image: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1504145_alternate1?$rl_df_pdp_5_7$', sellerName: 'na', name: 'brown shoes', status: '', lastUpdated: '3/6/2024, 5:21:04 PM' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const { checked } = event.target;
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, status: checked ? 'Active' : 'Inactive' } : product
      )
    );
  };

  const handleAddProduct = () => {
    // Logic to add a new product
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="d-flex justify-content-between mb-3">
            All Products
            <Link className="btn btn-primary" to="/addproducts" onClick={handleAddProduct}>Add Product</Link>
          </h1>
          <p>You can see all products, add products, and get product details from the selected part of your online business.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Seller Name</th>
                <th>Name</th>
                <th>Status</th>
                <th>Last updated on</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.image ? <img src={product.image} alt="Product" style={{ width: '50px', height: '50px', objectFit: 'cover' }} /> : 'No Image'}</td>
                  <td>{product.sellerName}</td>
                  <td>{product.name}</td>
                  <td>

                    
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`status_${product.id}`}
                        checked={product.status === 'Active'}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e, product.id)}
                      />
                      <label className="form-check-label" htmlFor={`status_${product.id}`}> </label>
                    </div>


                  </td>
                  <td>{product.lastUpdated}</td>
                  <td>
                    <button className="btn btn-primary mr-2 m-4">Details</button>
                    <Link to = "/inventory" className="btn btn-secondary">Inventory</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
              </li>
              <li className="page-item">
                <button className="page-link" onClick={() => paginate(1)}>1</button>
              </li>
              {/* Add other page numbers as required */}
              <li className="page-item">
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
