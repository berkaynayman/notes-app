import React from 'react'
import styles from '../style.module.css'

import TextArea from '../atoms/TextArea'
import Button from '../atoms/Button'
import CircleBtn from '../atoms/CircleBtn'


function Form() {
  return (
    <form className={styles.textareaSection}>
              <TextArea cname={styles.textarea} />
              <div className={styles.textareaBottom}>
                <CircleBtn />
                <div>
                  <Button cname={styles.button} />
                </div>
              </div>
    </form>
  )
}

export default Form