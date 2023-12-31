import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function MetaDocs() {
  const [value, setValue] = useState('');

  return <ReactQuill   className='h-80' theme="snow" value={value} onChange={setValue} />;
}