// import React, { useState, useEffect, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import axios from 'axios';

// const AddCategoriesForm: React.FC = () => {
//   function stripHtmlTags(html: string): string {
//     return html.replace(/(<([^>]+)>)/gi, "");
//   }

//   const [categoryName, setCategoryName] = useState<string>('');
//   const [brandName, setBrandName] = useState<string>('');
//   const [categoryImage, setCategoryImage] = useState<File | null>(null);
//   const [categoryBannerImage, setCategoryBannerImage] = useState<File | null>(null);
//   const [metaTitle, setMetaTitle] = useState<string>('');
//   const [metaKeywords, setMetaKeywords] = useState<string[]>([]);
//   const [metaDescription, setMetaDescription] = useState<string>('');
//   const [secondMetaDescription, setSecondMetaDescription] = useState<string>('');
//   const [categories, setCategories] = useState<string[]>([]);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/addcategories');
//       if (response.status === 200) {
//         setCategories(response.data);
//       } else {
//         console.error('Failed to fetch categories');
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };
  

//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setCategoryImage(file);
//     }
//   };

//   const handleBannerImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setCategoryBannerImage(file);
//     }
//   };

//   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       const value = event.currentTarget.value.trim();
//       if (value !== '') {
//         setMetaKeywords(prevKeywords => {
//           const updatedKeywords = [...prevKeywords, value];
//           console.log("Updated Meta Keywords:", updatedKeywords);
//           return updatedKeywords;
//         });
//         event.currentTarget.value = '';
//       }
//     }
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
  
//     try {
//       const formData = new FormData();
//       formData.append('categoryName', categoryName);
//       formData.append('brandName', brandName);
//       formData.append('metaTitle', metaTitle);
//       formData.append('metaDescription', stripHtmlTags(metaDescription));
//       formData.append('secondMetaDescription', stripHtmlTags(secondMetaDescription));
//       formData.append('metaKeywords', metaKeywords.join(', '));
  
//       if (categoryImage) {
//         formData.append('categoryImage', categoryImage);
//       }
//       if (categoryBannerImage) {
//         formData.append('categoryBannerImage', categoryBannerImage);
//       }
  
//       const response = await axios.post('http://localhost:8000/addcategories', formData); // Updated endpoint
  
//       if (response.status === 200) {
//         console.log('Category added successfully');
//         // Reset form fields if needed
//         setCategoryName('');
//         setBrandName('');
//         setMetaTitle('');
//         setMetaKeywords([]);
//         setMetaDescription('');
//         setSecondMetaDescription('');
//         setCategoryImage(null);
//         setCategoryBannerImage(null);
//       } else {
//         console.error('Failed to add category');
//       }
//     } catch (error) {
//       console.error('Error adding category:', error);
//     }
//   };
  

//   return (
//     <div className="container">
//       <h2>Add Category</h2>
//       <p>Categories are the primary way to combine products with similar characteristics. You can also add sub-categories if required.</p>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="categoryName" className="form-label">Category Name *</label>
//           <input type="text" className="form-control" id="categoryName" placeholder="e.g. Men, Women, Furniture, etc" required value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="brandName" className="form-label">Brand Name *</label>
//           <input type="text" className="form-control" id="brandName" placeholder="Enter Brand Name" required value={brandName} onChange={(e) => setBrandName(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <div>
//             <CKEditor
//               editor={ClassicEditor}
//               data={metaDescription}
//               onChange={(event, editor) => {
//                 const data = editor.getData();
//                 setMetaDescription(data);
//               }}
//             />
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="categoryImage" className="form-label">Category Image (optional)</label>
//           <input type="file" className="form-control" id="categoryImage" accept="image/*" onChange={handleImageChange} />
//           {categoryImage && (
//             <img src={URL.createObjectURL(categoryImage)} alt="Category" style={{ marginTop: '10px', maxWidth: '200px', maxHeight: '200px' }} />
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="categoryBannerImage" className="form-label">Category Banner Image (optional)</label>
//           <input type="file" className="form-control" id="categoryBannerImage" accept="image/*" onChange={handleBannerImageChange} />
//           {categoryBannerImage && (
//             <img src={URL.createObjectURL(categoryBannerImage)} alt="Category Banner" style={{ marginTop: '10px', maxWidth: '200px', maxHeight: '200px' }} />
//           )}
//         </div>
//         <div className="mb-3 mt-5">
//           <h3>Search engine listing preview (optional)</h3>
//           <div className="mb-3">
//             <label htmlFor="metaTitle" className="form-label">Meta title</label>
//             <input type="text" className="form-control" id="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="metaKeywords" className="form-label">Meta keywords</label>
//             <div>
//               {metaKeywords.map((keyword, index) => (
//                 <span key={index} className="badge bg-secondary me-1">{keyword}</span>
//               ))}
//             </div>
//             <input
//               type="text"
//               className="form-control"
//               id="metaKeywords"
//               onKeyDown={handleKeyDown}
//               placeholder="Enter keywords and press Enter"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="metaDescription" className="form-label">Meta Description</label>
//             <CKEditor
//               editor={ClassicEditor}
//               data={secondMetaDescription}
//               onChange={(event, editor) => {
//                 const data = editor.getData();
//                 setSecondMetaDescription(data);
//               }}
//             />
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary">Add Category</button>
//       </form>
      
//       <div>
//         <ul>
//           {categories.map((category, index) => (
//             <li key={index}>{category}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AddCategoriesForm;



import React, { useState, useEffect, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const AddCategoriesForm: React.FC = () => {
  function stripHtmlTags(html: string): string {
    return html.replace(/(<([^>]+)>)/gi, "");
  }

  const [categoryName, setCategoryName] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [categoryBannerImage, setCategoryBannerImage] = useState<File | null>(null);
  const [metaTitle, setMetaTitle] = useState<string>('');
  const [metaKeywords, setMetaKeywords] = useState<string[]>([]);
  const [metaDescription, setMetaDescription] = useState<string>('');
  const [secondMetaDescription, setSecondMetaDescription] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      if (response.status === 200) {
        const productsData = response.data;
        const uniqueCategoryIds = [...new Set(productsData.map((product: any) => product.categoryId))];
        // Assuming each product has a categoryId field
        setCategories(uniqueCategoryIds);
      } else {
        console.error('Failed to fetch categories from products');
      }
    } catch (error) {
      console.error('Error fetching categories from products:', error);
    }
  };
  
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCategoryImage(file);
    }
  };

  const handleBannerImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCategoryBannerImage(file);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = event.currentTarget.value.trim();
      if (value !== '') {
        setMetaKeywords(prevKeywords => {
          const updatedKeywords = [...prevKeywords, value];
          return updatedKeywords;
        });
        event.currentTarget.value = '';
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('categoryId', categoryId);
      formData.append('categoryName', categoryName);
      formData.append('brandName', brandName);
      formData.append('metaTitle', metaTitle);
      formData.append('metaDescription', stripHtmlTags(metaDescription));
      formData.append('secondMetaDescription', stripHtmlTags(secondMetaDescription));
      formData.append('metaKeywords', metaKeywords.join(', '));
      if (categoryImage) {
        formData.append('categoryImage', categoryImage);
      }
      if (categoryBannerImage) {
        formData.append('categoryBannerImage', categoryBannerImage);
      }
      const response = await axios.post('http://localhost:8000/addcategories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        console.log('Category added successfully');
        setCategoryName('');
        setBrandName('');
        setMetaTitle('');
        setMetaKeywords([]);
        setMetaDescription('');
        setSecondMetaDescription('');
        setCategoryImage(null);
        setCategoryBannerImage(null);
        fetchCategories(); // Refresh categories after adding a new one
      } else {
        console.error('Failed to add category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add Category</h2>
      <p>Categories are the primary way to combine products with similar characteristics. You can also add sub-categories if required.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">Category Name *</label>
          <input type="text" className="form-control" id="categoryName" placeholder="e.g. Men, Women, Furniture, etc" required value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="brandName" className="form-label">Brand Name *</label>
          <input type="text" className="form-control" id="brandName" placeholder="Enter Brand Name" required value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">Category ID *</label>
          <select className="form-select" id="categoryId" required value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            <option value="">Select Category ID</option>
            {categories.map((category, index) => (
              <option key={index} value={category._id}>{category.categoryName}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={metaDescription}
              onChange={(event, editor) => {
                const data = editor.getData();
                setMetaDescription(data);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="categoryImage" className="form-label">Category Image (optional)</label>
          <input type="file" className="form-control" id="categoryImage" accept="image/*" onChange={handleImageChange} />
          {categoryImage && (
            <img src={URL.createObjectURL(categoryImage)} alt="Category" style={{ marginTop: '10px', maxWidth: '200px', maxHeight: '200px' }} />
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="categoryBannerImage" className="form-label">Category Banner Image (optional)</label>
          <input type="file" className="form-control" id="categoryBannerImage" accept="image/*" onChange={handleBannerImageChange} />
          {categoryBannerImage && (
            <img src={URL.createObjectURL(categoryBannerImage)} alt="Category Banner" style={{ marginTop: '10px', maxWidth: '200px', maxHeight: '200px' }} />
          )}
        </div>
        <div className="mb-3 mt-5">
          <h3>Search engine listing preview (optional)</h3>
          <div className="mb-3">
            <label htmlFor="metaTitle" className="form-label">Meta title</label>
            <input type="text" className="form-control" id="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="metaKeywords" className="form-label">Meta keywords</label>
            <div>
              {metaKeywords.map((keyword, index) => (
                <span key={index} className="badge bg-secondary me-1">{keyword}</span>
              ))}
            </div>
            <input
              type="text"
              className="form-control"
              id="metaKeywords"
              onKeyDown={handleKeyDown}
              placeholder="Enter keywords and press Enter"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="metaDescription" className="form-label">Meta Description</label>
            <CKEditor
              editor={ClassicEditor}
              data={secondMetaDescription}
              onChange={(event, editor) => {
                const data = editor.getData();
                setSecondMetaDescription(data);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategoriesForm;
