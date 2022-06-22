// Import => React
import axios from 'axios';
import React from 'react';

// Import => Components
import style from './Docs.module.scss';

function Docs({ docs, setDocs }) {
  const arr = new Array();
  function dropImageHandler(e) {
    var formdata = new FormData();
    const files = e
    console.log(e.target.value);
    formdata.append('key', 'Service For C Group')
    formdata.append("file", e.target.value);
    axios.post('http://ali98.uz/api/service', formdata)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (res) {
        console.log(res.response.data.message);
      })
    setDocs(files)
  }

  return (
    <>
      <label htmlFor="file">Ali</label>
      <input type="file" id='file' onChange={(e) => console.log(e)} />
    </>
  )
}

export default Docs