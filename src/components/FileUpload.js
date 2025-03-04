import React, { useState } from "react";

function FileUpload({ onSummarize }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSummarizeClick = () => {
    if (files.length > 0) {
      onSummarize(files);
    } else {
      alert("Please select at least one document.");
    }
  };

  return (
    <div className="upload-section">
      <h2>Upload Documents</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleSummarizeClick}>Generate Summary</button>
    </div>
  );
}

export default FileUpload;
