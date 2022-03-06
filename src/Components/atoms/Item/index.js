import React from 'react'
import style from './item.module.css'

function Item(item) {
  console.log(item);
  return (
    <div className={`${style.item} ${item.item.color}`} key={item.item.id}>{item.item.note}</div>
  )
}

export default Item