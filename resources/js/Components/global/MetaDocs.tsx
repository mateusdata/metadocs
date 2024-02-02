import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';
import axios from 'axios';

export default function MetaDocs({ value, setValue, currentUser }: any) {

  const quillRef = useRef<any>(); // Create a ref object

  const onSubmit = () => {
    const { doc_usu, docId } = currentUser;

    axios.put("/insertText", {
      doc_usu:doc_usu,
      docId,
      doc_texto: value
    }).then((response) => {
      console.log(response.data);

    }).catch((e) => {
      console.log(e);

    })
  }


  return (
    <div>

      <ReactQuill ref={quillRef} className='h-80' theme="snow" value={value} onKeyDown={onSubmit} onChange={setValue} />
      <br /><br /><br />
      <button onClick={onSubmit}>ver</button>
    </div>
  );
}
