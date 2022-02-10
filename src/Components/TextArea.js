import React from 'react';

function TextArea({cname}) {
  return (
    <textarea className={cname} rows="5" cols="40"
    placeholder='Text Here..'>
    </textarea>
  )
}

export default TextArea;
