// Import => React
import React from 'react';

// Import => Components
import style from './Docs.module.scss';

function Docs({ docs, setDocs }) {
  function onChange(e) {
    let files = e.target.files[0]
    setDocs([files])
  }

  return (
    <input className={style.inp} type="file" onChange={(e) => onChange(e)} />
  )
}

export default Docs