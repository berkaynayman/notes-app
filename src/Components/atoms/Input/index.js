import React from 'react';
import styles from './style.module.css'

function Input({cname}) {
  return <input className={styles.input} type="text" placeholder='Search..' />;
}

export default Input;
