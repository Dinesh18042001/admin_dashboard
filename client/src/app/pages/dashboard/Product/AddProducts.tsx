// import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import axios from 'axios';

// const AddProducts: React.FC = () => {
//   // Function to strip HTML tags
//   function stripHtmlTags(html: string): string {
//     return html.replace(/<[^>]*>/g, '');
//   }

//   // State for form inputs
//   const [productName, setProductName] = useState<string>('');
//   const [shortDescription, setShortDescription] = useState<string>('');
//   const [longDescription, setLongDescription] = useState<string>('');
//   const [additionalInformation, setAdditionalInformation] = useState<string>('');

//   const cleanedShortDescription = stripHtmlTags(shortDescription);
//   const cleanedLongDescription = stripHtmlTags(longDescription);
//   const cleanedAdditionalInformation = stripHtmlTags(additionalInformation);

//   // Other form input states
//   const [brandname, setBrandName] = useState<string>('');
//   const [price, setPrice] = useState<number>(0);
//   const [costPrice, setCostPrice] = useState<number>(0);
//   const [retailPrice, setRetailPrice] = useState<number>(0);
//   const [salePrice, setSalePrice] = useState<number>(0);
//   const [category, setCategory] = useState<string>('');
//   const [subcategory, setSubcategory] = useState<string>('');
//   const [images, setImages] = useState<File[]>([]);
//   const [imagePreviews, setImagePreviews] = useState<string[]>([]);
//   const [sizes, setSizes] = useState<string[]>(['']);
//   const [newSize, setNewSize] = useState<string>('');
//   const [variants, setVariants] = useState<{ type: string; value: string; retailPrice: number; mrp: number; sku: string }[]>([]);
//   const [newVariantType, setNewVariantType] = useState<string>('');
//   const [newVariantValue, setNewVariantValue] = useState<string>('');
//   const [returnPolicy, setReturnPolicy] = useState<string>('');
//   const [totalStock, setTotalStock] = useState<number>(0);
//   const [availableStock, setAvailableStock] = useState<number>(0);

//   // Function to handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('productName', productName);
//     formData.append('shortDescription', stripHtmlTags(shortDescription));
//     formData.append('longDescription', stripHtmlTags(longDescription));
//     formData.append('additionalInformation', stripHtmlTags(additionalInformation))
//     formData.append('brandname', brandname);
//     formData.append('price', String(price));
//     formData.append('costPrice', String(costPrice));
//     formData.append('retailPrice', String(retailPrice));
//     formData.append('salePrice', String(salePrice));
//     formData.append('category', category);
//     formData.append('subcategory', subcategory);
//     formData.append('totalStock', String(totalStock));
//     formData.append('availableStock', String(availableStock));
//     sizes.forEach((size, index) => {
//       formData.append(`sizes[${index}]`, size);
//     });

//     images.forEach(image => {
//       formData.append('images', image);
      
//     });

//     formData.append('variants', JSON.stringify(variants));

//     formData.append('returnPolicy', returnPolicy);

//     try {
//       const response = await axios.post('http://localhost:8000/addProduct', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Product added successfully:', response.data);
//       // Reset form fields
//       resetForm();
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   // Function to reset form fields
//   const resetForm = () => {
//     setProductName('');
//     setShortDescription('');
//     setLongDescription('');
//     setAdditionalInformation('');
//     setBrandName('');
//     setPrice(0);
//     setCostPrice(0);
//     setRetailPrice(0);
//     setSalePrice(0);
//     setCategory('');
//     setSubcategory('');
//     setImages([]);
//     setImagePreviews([]);
//     setSizes(['']);
//     setNewSize('');
//     setTotalStock(0);
//     setAvailableStock(0);
//     setVariants([]);
//     setNewVariantType('');
//     setNewVariantValue('');
//     setReturnPolicy('');
//   };

//   // Function to handle retail price change for variants
//   const handleRetailPriceChange = (index: number, value: number) => {
//     const updatedVariants = [...variants];
//     updatedVariants[index].retailPrice = value;
//     setVariants(updatedVariants);
//   };

//   // Function to handle MRP change for variants
//   const handleMRPChange = (index: number, value: number) => {
//     const updatedVariants = [...variants];
//     updatedVariants[index].mrp = value;
//     setVariants(updatedVariants);
//   };

//   // Function to handle SKU change for variants
//   const handleSKUChange = (index: number, value: string) => {
//     const updatedVariants = [...variants];
//     updatedVariants[index].sku = value;
//     setVariants(updatedVariants);
//   };

//   // Function to delete a variant
//   const deleteVariant = (index: number) => {
//     setVariants(variants.filter((_, i) => i !== index));
//   };


//   // Function to add a new variant
//   const addVariant = () => {
//     if (newVariantType.trim() !== '' && newVariantValue.trim() !== '') {
//       setVariants([...variants, { type: newVariantType, value: newVariantValue, retailPrice: 0, mrp: 0, sku: '' }]);
//       setNewVariantType('');
//       setNewVariantValue('');
//     }
//   };


//   // Function to handle return policy change
//   const handleReturnPolicyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setReturnPolicy(e.target.value);
//     console.log("Selected return policy:", e.target.value);
//   };

//   // Function to handle image change
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const files = e.target.files;
//     if (files && files.length > 0) {
//       const selectedImage = files[0];
//       const updatedImages = [...images];
//       updatedImages[index] = selectedImage;
//       setImages(updatedImages);

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const previews = [...imagePreviews];
//         previews[index] = reader.result as string;
//         setImagePreviews(previews);
//       };
//       reader.readAsDataURL(selectedImage);
//     }
//   };


//   // Function to add a new size input field
//   const addSizeInput = () => {
//     setSizes([...sizes, '']);
//   };

//   // Function to add a new size
//   const addSize = () => {
//     if (newSize.trim() !== '') {
//       setSizes([...sizes, newSize.trim()]);
//       setNewSize('');
//     }
//   };

//   return (
//     <>
//       <div className="card">
//         <div className="card-header d-flex">
//           <h4>Add New Product</h4>
//           <div className="col d-flex justify-content-end align-items-center">
//             <button type="button" className="btn btn-secondary me-2">Cancel</button>
//             <button type="submit" className="btn btn-primary" form="addCategoryForm">Save</button>
//           </div>
//           <p>Add new product according to required types and representations to a given part of your online business.</p>
//         </div>

//         <div className="card-body">
//           <form onSubmit={handleSubmit} id="addCategoryForm">
//             <div className="mb-3 row">
//               {/* Product Name */}
//               <div className="col">
//                 <label htmlFor="productName" className="form-label">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Title"
//                   id="productName"
//                   value={productName}
//                   onChange={(e) => setProductName(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Other fields */}
//               <div className="col">
//                 <label htmlFor="category" className="form-label">
//                   Category
//                 </label>
//                 <select
//                   className="form-select"
//                   id="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   required
//                 >
//                   <option value="">Select Category</option>
//                   <option value="man">Man</option>
//                   <option value="women">Women</option>
//                   <option value="kids">Kids</option>
//                 </select>
//               </div>

//               <div className="col">
//                 <label htmlFor="subcategory" className="form-label">
//                   SubCategory
//                 </label>
//                 <select
//                   className="form-select"
//                   id="subcategory"
//                   value={subcategory}
//                   onChange={(e) => setSubcategory(e.target.value)}
//                   required
//                 >
//                   <option value="">Select SubCategory</option>
//                   {category === 'man' && (
//                     <>
//                       <option value="t-shirt">Man's T-shirt</option>
//                       <option value="casual-shirt">Man's Casual Shirt</option>
//                       <option value="kurtas">Man's Kurtas</option>
//                     </>
//                   )}
//                   {category === 'women' && (
//                     <>
//                       <option value="kurtas">Women's Kurtas</option>
//                       <option value="saree">Women's Saree</option>
//                       <option value="tops">Women's Tops</option>
//                     </>
//                   )}
//                   {category === 'kids' && (
//                     <>
//                       <option value="boys">Boys</option>
//                       <option value="girls">Girls</option>
//                       <option value="infants">Infants</option>
//                     </>
//                   )}
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="brandName" className="form-label">
//                   Brand Name
//                 </label>
//                 <div className="input-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter product brand name"
//                     id="brandName"
//                     value={brandname}
//                     onChange={(e) => setBrandName(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mb-3 row">
//                 <div className="col">
//                   <label htmlFor="price" className="form-label">
//                     Retail Selling Price *
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="price"
//                     value={price}
//                     onChange={(e) => setPrice(Number(e.target.value))}
//                     required
//                   />
//                 </div>

//                 <div className="col">
//                   <label htmlFor="costPrice" className="form-label">
//                     MRP
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="costPrice"
//                     value={costPrice}
//                     onChange={(e) => setCostPrice(Number(e.target.value))}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className='mb-3 row'>
//                 <div className="col">
//                   <label htmlFor="totalStock" className="form-label">
//                     Total Stock
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="totalStock"
//                     value={totalStock}
//                     onChange={(e) => setTotalStock(Number(e.target.value))}
//                     required
//                   />
//                 </div>

//                 <div className="col">
//                   <label htmlFor="availableStock" className="form-label">
//                     Available Stock
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="availableStock"
//                     value={availableStock}
//                     onChange={(e) => setAvailableStock(Number(e.target.value))}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="sizes" className="form-label">
//                   Sizes
//                 </label>
//                 <div className="input-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Add Size"
//                     value={newSize}
//                     onChange={(e) => setNewSize(e.target.value)}
//                   />
//                   <button className="btn btn-outline-secondary" type="button" onClick={addSize}>Add</button>
//                 </div>
//                 <div className="size-box">
//                   {sizes.map((size, index) => (
//                     <span key={index} className="badge bg-secondary me-2 mb-2">{size}</span>
//                   ))}
//                 </div>
//               </div>


//               {['firent', 'left', 'right', 'back'].map((name, index) => (
//                 <div className="mb-3" key={index}>
//                   <label htmlFor={`image${name}`} className="form-label" >
//                     Upload Image {name}
//                   </label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     id={`image${name}`}
//                     accept="image/*"

//                     onChange={(e) => handleImageChange(e, index)}
//                     required
//                   />
//                   {imagePreviews[index] && (
//                     <img src={imagePreviews[index]} alt={`Uploaded ${name}`} style={{ marginTop: '10px', width: '100px' }} />
//                   )}
//                 </div>
//               ))}



//               <div className="col mb-4" >
//                 <label htmlFor="policy" className="form-label">
//                   Add Return Policy (optional)
//                 </label>
//                 <select
//                   className="form-select"
//                   id="policy"
//                   value={returnPolicy}
//                   onChange={handleReturnPolicyChange} // Add onChange event handler
//                   required
//                 >
//                   <option value="">Select Policy</option>
//                   <option value="returnPolicy">Return Policy</option>
//                   <option value="productMisplaced">Product Misplaced</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="shortDescription" className="form-label">Short Description</label>
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={shortDescription}
//                   onChange={(event, editor) => setShortDescription(editor.getData())}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="longDescription" className="form-label">Long Description</label>
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={longDescription}
//                   onChange={(event, editor) => setLongDescription(editor.getData())}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="additionalInformation" className="form-label">Additional Information</label>
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data={additionalInformation}
//                   onChange={(event, editor) => setAdditionalInformation(editor.getData())}
//                 />
//               </div>

//               <div className="mb-3 card">
//                 <div className="card-block">
//                   <h6>Variants (optional)</h6>
//                   <div className="form-group">
//                     <p className="text-muted">Add variants if this product comes in multiple versions, like different sizes or colors.</p>
//                   </div>
//                   <div className="form-group row">
//                     <div className="col-md-4">
//                       <select className="form-control" value={newVariantType} onChange={(e) => setNewVariantType(e.target.value)}>
//                         <option value="">Select Variant Type</option>
//                         <option value="Color">Color</option>
//                         <option value="Size">Size</option>
//                         <option value="ThreadCount">Thread Count</option>
//                         <option value="Quantity">Quantity</option>
//                         {/* Add more options as needed */}
//                       </select>
//                     </div>

//                     <div className="col-md-6">
//                       <input type="text" className="form-control" placeholder="Variant value" value={newVariantValue} onChange={(e) => setNewVariantValue(e.target.value)} />
//                     </div>
//                     <div className="col-md-2">
//                       <button type='button' className="btn btn-primary" onClick={addVariant}>Add Variant</button>
//                     </div>

//                   </div>
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>Variant</th>
//                         <th>Retail Selling Price</th>
//                         <th>MRP</th>
//                         <th>SKU</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {variants.map((variant, index) => (
//                         <tr key={index}>
//                           <td>{variant.type}: {variant.value}</td>
//                           <td>
//                             <input type="number" className="form-control" value={variant.retailPrice} onChange={(e) => handleRetailPriceChange(index, parseFloat(e.target.value))} />
//                           </td>
//                           <td>
//                             <input type="number" className="form-control" value={variant.mrp} onChange={(e) => handleMRPChange(index, parseFloat(e.target.value))} />
//                           </td>
//                           <td>
//                             <input type="text" className="form-control" value={variant.sku} onChange={(e) => handleSKUChange(index, e.target.value)} />
//                           </td>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <button className="btn btn-danger btn-sm " onClick={() => deleteVariant(index)}>Delete</button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Add Product
//               </button>


//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );

// };

// export default AddProducts;

import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const AddProducts: React.FC = () => {
  // Function to strip HTML tags
  function stripHtmlTags(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }

  // State for form inputs
  const [productName, setProductName] = useState<string>('');
  const [shortDescription, setShortDescription] = useState<string>('');
  const [longDescription, setLongDescription] = useState<string>('');
  const [additionalInformation, setAdditionalInformation] = useState<string>('');

  const cleanedShortDescription = stripHtmlTags(shortDescription);
  const cleanedLongDescription = stripHtmlTags(longDescription);
  const cleanedAdditionalInformation = stripHtmlTags(additionalInformation);

  // Other form input states
  const [brandname, setBrandName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [costPrice, setCostPrice] = useState<number>(0);
  const [retailPrice, setRetailPrice] = useState<number>(0);
  const [salePrice, setSalePrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>(['']);
  const [newSize, setNewSize] = useState<string>('');
  const [variants, setVariants] = useState<{ type: string; value: string; retailPrice: number; mrp: number; sku: string }[]>([]);
  const [newVariantType, setNewVariantType] = useState<string>('');
  const [newVariantValue, setNewVariantValue] = useState<string>('');
  const [returnPolicy, setReturnPolicy] = useState<string>('');
  const [totalStock, setTotalStock] = useState<number>(0);
  const [availableStock, setAvailableStock] = useState<number>(0);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('shortDescription', stripHtmlTags(shortDescription));
    formData.append('longDescription', stripHtmlTags(longDescription));
    formData.append('additionalInformation', stripHtmlTags(additionalInformation))
    formData.append('brandname', brandname);
    formData.append('price', String(price));
    formData.append('costPrice', String(costPrice));
    formData.append('retailPrice', String(retailPrice));
    formData.append('salePrice', String(salePrice));
    formData.append('category', category);
    formData.append('subcategory', subcategory);
    formData.append('totalStock', String(totalStock));
    formData.append('availableStock', String(availableStock));
    sizes.forEach((size, index) => {
      formData.append(`sizes[${index}]`, size);
    });

    images.forEach(image => {
      formData.append('images', image);
      
    });

    formData.append('variants', JSON.stringify(variants));

    formData.append('returnPolicy', returnPolicy);

    try {
      const response = await axios.post('http://localhost:8000/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added successfully:', response.data);
      // Reset form fields
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setProductName('');
    setShortDescription('');
    setLongDescription('');
    setAdditionalInformation('');
    setBrandName('');
    setPrice(0);
    setCostPrice(0);
    setRetailPrice(0);
    setSalePrice(0);
    setCategory('');
    setSubcategory('');
    setImages([]);
    setImagePreviews([]);
    setSizes(['']);
    setNewSize('');
    setTotalStock(0);
    setAvailableStock(0);
    setVariants([]);
    setNewVariantType('');
    setNewVariantValue('');
    setReturnPolicy('');
  };

  // Function to handle retail price change for variants
  const handleRetailPriceChange = (index: number, value: number) => {
    const updatedVariants = [...variants];
    updatedVariants[index].retailPrice = value;
    setVariants(updatedVariants);
  };

  // Function to handle MRP change for variants
  const handleMRPChange = (index: number, value: number) => {
    const updatedVariants = [...variants];
    updatedVariants[index].mrp = value;
    setVariants(updatedVariants);
  };

  // Function to handle SKU change for variants
  const handleSKUChange = (index: number, value: string) => {
    const updatedVariants = [...variants];
    updatedVariants[index].sku = value;
    setVariants(updatedVariants);
  };

  // Function to delete a variant
  const deleteVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index));
  };


  // Function to add a new variant
  const addVariant = () => {
    if (newVariantType.trim() !== '' && newVariantValue.trim() !== '') {
      setVariants([...variants, { type: newVariantType, value: newVariantValue, retailPrice: 0, mrp: 0, sku: '' }]);
      setNewVariantType('');
      setNewVariantValue('');
    }
  };


  // Function to handle return policy change
  const handleReturnPolicyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReturnPolicy(e.target.value);
    console.log("Selected return policy:", e.target.value);
  };

  // Function to handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      const updatedImages = [...images];
      updatedImages[index] = selectedImage;
      setImages(updatedImages);

      const reader = new FileReader();
      reader.onloadend = () => {
        const previews = [...imagePreviews];
        previews[index] = reader.result as string;
        setImagePreviews(previews);
      };
      reader.readAsDataURL(selectedImage);
    }
  };


  // Function to add a new size input field
  const addSizeInput = () => {
    setSizes([...sizes, '']);
  };

  // Function to add a new size
  const addSize = () => {
    if (newSize.trim() !== '') {
      setSizes([...sizes, newSize.trim()]);
      setNewSize('');
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-header d-flex">
          <h4>Add New Product</h4>
          <div className="col d-flex justify-content-end align-items-center">
            <button type="button" className="btn btn-secondary me-2">Cancel</button>
            <button type="submit" className="btn btn-primary" form="addCategoryForm">Save</button>
          </div>
          <p>Add new product according to required types and representations to a given part of your online business.</p>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit} id="addCategoryForm">
            <div className="mb-3 row">
              {/* Product Name */}
              <div className="col">
                <label htmlFor="productName" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              {/* Other fields */}
              <div className="col">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="man">Man</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>

              <div className="col">
                <label htmlFor="subcategory" className="form-label">
                  SubCategory
                </label>
                <select
                  className="form-select"
                  id="subcategory"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  required
                >
                  <option value="">Select SubCategory</option>
                  {category === 'man' && (
                    <>
                      <option value="t-shirt">Man's T-shirt</option>
                      <option value="casual-shirt">Man's Casual Shirt</option>
                      <option value="kurtas">Man's Kurtas</option>
                    </>
                  )}
                  {category === 'women' && (
                    <>
                      <option value="kurtas">Women's Kurtas</option>
                      <option value="saree">Women's Saree</option>
                      <option value="tops">Women's Tops</option>
                    </>
                  )}
                  {category === 'kids' && (
                    <>
                      <option value="boys">Boys</option>
                      <option value="girls">Girls</option>
                      <option value="infants">Infants</option>
                    </>
                  )}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="brandName" className="form-label">
                  Brand Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product brand name"
                    id="brandName"
                    value={brandname}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="price" className="form-label">
                    Retail Selling Price *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="costPrice" className="form-label">
                    MRP
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="costPrice"
                    value={costPrice}
                    onChange={(e) => setCostPrice(Number(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div className='mb-3 row'>
                <div className="col">
                  <label htmlFor="totalStock" className="form-label">
                    Total Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalStock"
                    value={totalStock}
                    onChange={(e) => setTotalStock(Number(e.target.value))}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="availableStock" className="form-label">
                    Available Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="availableStock"
                    value={availableStock}
                    onChange={(e) => setAvailableStock(Number(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="sizes" className="form-label">
                  Sizes
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Size"
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                  />
                  <button className="btn btn-outline-secondary" type="button" onClick={addSize}>Add</button>
                </div>
                <div className="size-box">
                  {sizes.map((size, index) => (
                    <span key={index} className="badge bg-secondary me-2 mb-2">{size}</span>
                  ))}
                </div>
              </div>


              {['firent', 'left', 'right', 'back'].map((name, index) => (
                <div className="mb-3" key={index}>
                  <label htmlFor={`image${name}`} className="form-label" >
                    Upload Image {name}
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id={`image${name}`}
                    accept="image/*"

                    onChange={(e) => handleImageChange(e, index)}
                    required
                  />
                  {imagePreviews[index] && (
                    <img src={imagePreviews[index]} alt={`Uploaded ${name}`} style={{ marginTop: '10px', width: '100px' }} />
                  )}
                </div>
              ))}



              <div className="col mb-4" >
                <label htmlFor="policy" className="form-label">
                  Add Return Policy (optional)
                </label>
                <select
                  className="form-select"
                  id="policy"
                  value={returnPolicy}
                  onChange={handleReturnPolicyChange} // Add onChange event handler
                  required
                >
                  <option value="">Select Policy</option>
                  <option value="returnPolicy">Return Policy</option>
                  <option value="productMisplaced">Product Misplaced</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="shortDescription" className="form-label">Short Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={shortDescription}
                  onChange={(event, editor) => setShortDescription(editor.getData())}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="longDescription" className="form-label">Long Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={longDescription}
                  onChange={(event, editor) => setLongDescription(editor.getData())}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="additionalInformation" className="form-label">Additional Information</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={additionalInformation}
                  onChange={(event, editor) => setAdditionalInformation(editor.getData())}
                />
              </div>

              <div className="mb-3 card">
                <div className="card-block">
                  <h6>Variants (optional)</h6>
                  <div className="form-group">
                    <p className="text-muted">Add variants if this product comes in multiple versions, like different sizes or colors.</p>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-4">
                      <select className="form-control" value={newVariantType} onChange={(e) => setNewVariantType(e.target.value)}>
                        <option value="">Select Variant Type</option>
                        <option value="Color">Color</option>
                        <option value="Size">Size</option>
                        <option value="ThreadCount">Thread Count</option>
                        <option value="Quantity">Quantity</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Variant value" value={newVariantValue} onChange={(e) => setNewVariantValue(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                      <button type='button' className="btn btn-primary" onClick={addVariant}>Add Variant</button>
                    </div>

                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Variant</th>
                        <th>Retail Selling Price</th>
                        <th>MRP</th>
                        <th>SKU</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {variants.map((variant, index) => (
                        <tr key={index}>
                          <td>{variant.type}: {variant.value}</td>
                          <td>
                            <input type="number" className="form-control" value={variant.retailPrice} onChange={(e) => handleRetailPriceChange(index, parseFloat(e.target.value))} />
                          </td>
                          <td>
                            <input type="number" className="form-control" value={variant.mrp} onChange={(e) => handleMRPChange(index, parseFloat(e.target.value))} />
                          </td>
                          <td>
                            <input type="text" className="form-control" value={variant.sku} onChange={(e) => handleSKUChange(index, e.target.value)} />
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-danger btn-sm " onClick={() => deleteVariant(index)}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

};

export default AddProducts;










