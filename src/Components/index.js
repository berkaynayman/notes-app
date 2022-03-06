import React from 'react';
import Header from './Header'
import Search from './molecules/Search';
import Form from './molecules/Form'
import List from './molecules/List';
import { delNote, noteSelectors } from '../redux/noteSlice'
import { useDispatch, useSelector } from 'react-redux';

function NotesApp() {
  const notes = useSelector(noteSelectors.selectAll)
  const dispatch = useDispatch()
  console.log(notes);

  const handleDel = (id) => {
    dispatch(delNote(id))
  }
  return (
    <div className='notes-app'>
        <Header />
        <Search />
        <Form />
        <List notes={notes}/>
    </div>
  )
}

export default NotesApp;
