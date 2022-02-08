import React from 'react';
import CircleBtn from './CircleBtn';
import Header from './Header'
import Input from './Input'
import TextArea from './TextArea';
import Button from './Button';
import styles from './style.module.css'

function NotesApp() {
  return <div className='notes-app'>
      <Header />
      <div>
        <Input cname={styles.input} />
      </div>
      <div className={styles.textareaSection}>
        <TextArea cname={styles.textarea}/>
        <div className={styles.textareaBottom}>
          <CircleBtn />
          <Button />
        </div>
      </div>
  </div>;
}

export default NotesApp;
