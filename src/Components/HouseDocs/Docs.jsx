// Import => React
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { v4 } from 'uuid';

import Trash from '@mui/icons-material/ClearRounded';

// Import => Components
import style from './Docs.module.scss';
import "../Form/Form.scss";


function Docs({ documents, setDocs }) {
  const [show, setshow] = useState(false)

  const doc = useRef(null)

  function Delete(e) {
    setDocs('')
    setshow(false)
  }

  
  function dropImageHandler(e) {
    var formdata = new FormData();
    let files = e;
    formdata.append('key', 'Service For C Group')
    formdata.append("file", files);
    axios.post('http://ali98.uz/api/service', formdata)
    .then(function (response) {
        setshow(true)
        let res = response.data.data
        setDocs(res)
      })
      .catch(function (res) {
        console.log(res.response.data.status);
      })
  }

  return (
    <>

      <div className="change" style={{display:show ? 'block' : 'none'}}  >
        <img src={documents} alt={documents} className="img" />
        <Trash onClick={(e) => Delete(e)} className="icon" />
      </div>


      <div className={style.Group}>
        <label htmlFor="file" className={style.label}>Uy Hujjatlarini Yuklang</label>
        <input type="file" id='file' onChange={(e) => dropImageHandler(e.target.files[0])} className={style.input} />
      </div>
    </>
  )
}

export default Docs