import React, { /* useState */ } from 'react'

function Docs({ docs, setDocs }) {
  // const [document, setDocument] = useState('faylni tanlang')
  function onChange(e) {
    let files = e.target.files[0]
    console.log('fıles===', files);
    setDocs([files])
  }

  return (
    <input type="file" onChange={(e) => onChange(e)} />
  )
}

export default Docs