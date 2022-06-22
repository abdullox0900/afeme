// Import => React
import axios from 'axios';
import React from 'react';

// Import => Components
import style from './Docs.module.scss';

function Docs({ documents, setDocs }) {

  function dropImageHandler(e) {
    var formdata = new FormData();
    let files = e;
    formdata.append('key', 'Service For C Group')
    formdata.append("file", files);
    axios.post('http://ali98.uz/api/service', formdata)
      .then(function (response) {
        let res = response.data.data
        setDocs(res)
      })
      .catch(function (res) {
        console.log(res.response.data.message);
      })
  }

  return (
    <>
      <label htmlFor="file">Ali</label>
      <input type="file" id='file' onChange={(e) => dropImageHandler(e.target.files[0])} />
    </>
  )
}

export default Docs