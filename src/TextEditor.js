import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function MyComponent({newbody ,oldbody}) {
    const [value, setValue] = useState(oldbody);
    const hanldeBody= (e) =>{
        setValue(e);
        newbody(e);
    }
  return <ReactQuill theme="snow" value={value} defaultValue={oldbody} onChange={hanldeBody} />;
}