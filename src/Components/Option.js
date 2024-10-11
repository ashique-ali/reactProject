import React, { useState } from 'react';
import './Option.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MultiSelectWithDynamicOptions() {
  const [options, setOptions] = useState([]);
  const [bulkOption, setBulkOption] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [file, setFile] = useState(null);

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = (event.clipboardData || window.Clipboard).getData('text');
    const newOptions = pastedText.split(/[\s,]+/).filter(name => name.trim() && !options.includes(name));

    if (newOptions.length > 0) {
      setOptions([...options, ...newOptions]);
    }
    setBulkOption('');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setBulkOption(value);

    if (editIndex !== null) {
      const updatedOptions = [...options];
      updatedOptions[editIndex] = value;
      setOptions(updatedOptions);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setBulkOption(options[index]);
  };

  const handleSaveEdit = () => {
    setEditIndex(null);
    setBulkOption('');
  };

  const handleDelete = (index) => {
    setOptions((prevOptions) =>
      prevOptions.filter((item, i) => i !== index)
    );
    if (editIndex === index) {
      setEditIndex(null);
      setBulkOption('');
    }
  };

  const fileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      toast.error("No file selected");
      return;
    }
    const maxSize = 100 * 1024;
    if (selectedFile.size > maxSize) {
      toast.error("File size exceeds the limit of 100KB.");
      e.target.value = null;
      return;
    }
    setFile(selectedFile);
    toast.success('Image Uploaded Successfully ...!');
    e.target.value = null;
  }

  return (
    <div className='container'>
      <ToastContainer />
      <div className='col-lg-6 box'>
        <div style={{ width: '100px', margin: "auto" }}>
          {file && <img className='w-100 h-100' src={URL.createObjectURL(file)} alt='logo image' />}
        </div>
        <div className='form-group mt-3'>
          <input className='form-control' onChange={fileUpload} type='file' accept='image/*' />
        </div>
        <div className='d-flex gap-2'>
          <div style={{ width: '82%' }}>
            <input type="text" className='form-control w-100' value={bulkOption} placeholder="Paste or edit city names" onPaste={handlePaste} onChange={handleInputChange} />
          </div>
          <div>
            {editIndex !== null && (
              <button className="btn btn-success" onClick={handleSaveEdit}>Save/Edit</button>
            )}
          </div>
        </div>
        <div className='option'>
          {options.map((option, index) => (
            <div key={index} className="option-item d-flex justify-content-between align-items-center">
              <div className='w-100 rounded rounded-3 p-2 px-3' style={{ background: "skyblue" }}>
                <span>{option}</span>
              </div>
              <div className='d-flex'>
                <button className='btn btn-success me-2' onClick={() => handleEdit(index)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultiSelectWithDynamicOptions;


