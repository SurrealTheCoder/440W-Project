import React, { useState } from 'react';
import './CSV.css'

function DynamicCSVInput() {
    const [numCSVFiles, setNumCSVFiles] = useState(1); // Initial number of CSV files
    const [csvFiles, setCSVFiles] = useState([]); // Array to store CSV file inputs
  
    const handleAddCSVFiles = () => {
      const newCSVFiles = [...csvFiles];
      for (let i = 0; i < numCSVFiles; i++) {
        newCSVFiles.push(<input type="file" key={i} />);
      }
      setCSVFiles(newCSVFiles);
    };
  
    const handleNumCSVFilesChange = (event) => {
      const newNumCSVFiles = parseInt(event.target.value);
      if (newNumCSVFiles >= 1) {
        setNumCSVFiles(newNumCSVFiles);
      }
    };
  
    return (
      <>
        <input className='CSVinput'
          type="number"
          value={numCSVFiles}
          onChange={handleNumCSVFilesChange}
          min={1}
        />
          <button className='CSVadd' onClick={handleAddCSVFiles}>Add CSV Files</button>
          <button className='CSVsubmit'>Submit to Compile</button>
        {csvFiles}
      </>
    );
}
  
  export default DynamicCSVInput;

