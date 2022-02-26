import React from 'react'
import './item.css'

function Item(item) {
  console.log(item);
  return (
    <div className={`item ${item.item.color}`} key={item.item.id}>{item.item.note}</div>
  )
}

export default Item