import React, { /* useState */ } from 'react'

function Docs({ docs, setDocs }) {
  // const [document, setDocument] = useState('faylni tanlang')
  function onChange(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files]
    setDocs(files)
  }
  
  return (
   <input type="file" onChange={(e) => onChange(e)} value={docs} />
  )
}

export default Docs