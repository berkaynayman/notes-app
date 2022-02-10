import React from 'react';
import CircleBtn from './CircleBtn';
import Header from './Header'
import Input from './Input'
import TextArea from './TextArea';
import Button from './Button';
import styles from './style.module.css'

function NotesApp() {
  return (
    <div className='notes-app'>
        <Header />
      <div>
          <Input cname={styles.input} />
      </div>
        <form className={styles.textareaSection}>
          <TextArea cname={styles.textarea} />
              <div className={styles.textareaBottom}>
                <CircleBtn />
                <div>
                  <Button cname={styles.button} />
                </div>
              </div>
        </form>
    </div>
  )
}

export default NotesApp;
