import React from 'react';

function TextArea({cname, note, setNote}) {

  return (
    <textarea value={note}
    className={cname}
    onChange={(e) => setNote(e.target.value)}
    rows="5"
    cols="40"
    placeholder='Text Here..'>
    </textarea>
  )
}

export default TextArea;
