import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Preview = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [files, setFiles] = useState([]);
    
    useEffect(() => {
        axios.get('https://rdd-api.x-camp.id/uploads')
          .then(response => {
            setFiles(response.data);
          })
          .catch(error => {
            console.error('Error fetching files:', error);
          });
      }, []);

    return (
        <div>
        <h2>Daftar File yang Diunggah:</h2> 
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <a href={`https://rdd-api.x-camp.id/uploads/${file}`} target="file" rel="noopener noreferrer">
                {file}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Preview;
  