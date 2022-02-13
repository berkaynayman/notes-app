import React from 'react';
import Header from './Header'
import Input from './Input'
import styles from './style.module.css'
import Form from './molecules/Form'

function NotesApp() {
  return (
    <div className='notes-app'>
        <Header />
      <div>
          <Input cname={styles.input} />
      </div>
        <Form />
    </div>
  )
}

export default NotesApp;
