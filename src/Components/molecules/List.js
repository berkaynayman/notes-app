import React from 'react'
import ListItem from '../atoms/ListItem'
function List({notes}) {
  return (
    notes.map(item => <ListItem key={item.id} descriptions={item.note}/>) 
  )
}

export default List