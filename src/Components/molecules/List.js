import React from 'react'
import Item from '../atoms/Item'
function List({notes}) {
  return (
    <div className='items'>
      {notes.map(item => <Item item={item}/>)}
    </div>
  )
}

export default List