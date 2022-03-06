import React from 'react'
import styles from './form.module.css'
import { nanoid } from '@reduxjs/toolkit'
import { addNote } from '../../redux/noteSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextArea from '../atoms/TextArea'
import Button from '../atoms/Button'
import CircleBtn from '../atoms/CircleBtn'

function Form() {
  const colorList=['pink', 'purple', 'yellow', 'blue', 'green']
  const [note, setNote] = useState("")
  const [color, setColor] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!note) return alert("Boş not girilmez.")
    if(!color) return alert("Renk seçimi yapınız.!")
    
    dispatch(addNote({id: nanoid(), note, color}))
    setNote("") 
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextArea note={note} setNote={setNote} cname={styles.textarea} />
      <div className={styles.formBottom}>
        <div className={styles.customRadios}>
          {
            colorList.map((color, id)=><CircleBtn setColor={setColor} color={color} Id={id} />)
          }
        </div>
        <div>
          <Button cname={styles.button} />
        </div>
      </div>
    </form>
  )
}

export default Form