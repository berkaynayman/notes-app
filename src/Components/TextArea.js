import React from 'react';

function TextArea({cname}) {
  return (
    <textarea id="w3review" className={cname} rows="4" cols="50">
    At w3schools.com you will learn how to make a website.
    They offer free tutorials in all web development technologies.
    </textarea>
  )
}

export default TextArea;
