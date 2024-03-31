import React, { useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const AddSubCategoriesForm: React.FC = () => {
  function stripHtmlTags(html: string): string {
    return html.replace(/(<([^>]+)>)/gi, '');
  }

  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [metaTitle, setMetaTitle] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [subcategoryName, setSubcategoryName] = useState<string>('');
  const [metaKeywords, setMetaKeywords] = useState<string[]>([]);
  const [metaDescription, setMetaDescription] = useState<string>('');
  const [Description, setDescription] = useState<string>('');

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCategoryImage(file);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = event.currentTarget.value.trim();
      if (value !== '') {
        setMetaKeywords(prevKeywords => [...prevKeywords, value]);
        event.currentTarget.value = '';
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('subcategoryName', subcategoryName);
      formData.append('brandName', brandName);
      formData.append('description', stripHtmlTags(Description));
      formData.append('subcategoryImage', categoryImage as File);
      formData.append('metaTitle', metaTitle);
      formData.append('metaKeywords', metaKeywords.join(', '));
      formData.append('metaDescription', stripHtmlTags(metaDescription));

      const response = await axios.post('http://localhost:8000/addsubcategories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Subcategory added successfully:', response.data);

      // Reset form fields
      setCategoryImage(null);
      setMetaTitle('');
      setBrandName('');
      setSubcategoryName('');
      setMetaKeywords([]);
      setDescription('');
      setMetaDescription('');
      event.currentTarget.reset();
    } catch (error) {
      console.error('Error adding subcategory:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add Sub Category</h2>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-primary" form="addCategoryForm">Save</button>
        </div>
      </div>
      <p>Subcategories are the primary way to combine products with similar characteristics. You can also add sub-categories if required.</p>
      <form id="addCategoryForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="subcategoryName" className="form-label">Subcategory Name *</label>
          <input type="text" className="form-control" id="subcategoryName" placeholder="Enter Subcategory Name" onChange={(e) => setSubcategoryName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="brandName" className="form-label">Brand Name *</label>
          <input type="text" className="form-control" id="brandName" placeholder="Enter Brand Name" onChange={(e) => setBrandName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={metaDescription}
            onChange={(event, editor) => setDescription(editor.getData())}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryImage" className="form-label">Category Image (optional)</label>
          <input type="file" className="form-control" id="categoryImage" accept="image/*" onChange={handleImageChange} />
          {categoryImage && (
            <img src={URL.createObjectURL(categoryImage)} alt="Category" style={{ marginTop: '10px', maxWidth: '200px', maxHeight: '200px' }} />
          )}
        </div>

        <div className="mb-3 mt-5">
          <h3>Search engine listing preview (optional)</h3>
          <div className="mb-3">
            <label htmlFor="metaTitle" className="form-label">Meta title</label>
            <input type="text" placeholder='Enter meta title' className="form-control" id="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
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
              data={metaDescription}
              onChange={(event, editor) => setMetaDescription(editor.getData())}
            />
          </div>
        </div>

        <div className="mb-3 d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubCategoriesForm;
