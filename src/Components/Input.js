import React from 'react';

function Input({cname}) {
  console.log(cname);
  return <input className={cname} type="text" placeholder='Search..' />;
}

export default Input;
