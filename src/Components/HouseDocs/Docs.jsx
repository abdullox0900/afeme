// Import => React
import axios from 'axios';
import React, { useState } from 'react';
import { v4 } from 'uuid';

// Import => Components
import style from './Docs.module.scss';

function Docs({ documents, setDocs }) {
  const [docum, setDocum] = useState([]);

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
      setDocum(files)
  }

  return (
    <>
      <div className={style.docs}>
      </div>
      <div className={style.Group}>
        <label htmlFor="file" className={style.label}>Uy Hujjatlarini Yuklang</label>
        <input type="file" id='file' onChange={(e) => dropImageHandler(e.target.files[0])} className={style.input} />
      </div>
    </>
  )
}

export default Docs