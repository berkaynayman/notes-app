import React from 'react'
import styles from '../style.module.css'
import { nanoid } from '@reduxjs/toolkit'
import { addNote } from '../../redux/noteSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextArea from '../atoms/TextArea'
import Button from '../atoms/Button'
import CircleBtn from '../atoms/CircleBtn'


function Form() {
  const [note, setNote] = useState("")

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!note) return false
    
    dispatch(addNote({id: nanoid(), note}))
    setNote("") 
  }

  return (
    <form onSubmit={handleSubmit} className={styles.textareaSection}>
              <TextArea note={note} setNote={setNote} cname={styles.textarea} />
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