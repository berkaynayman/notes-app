import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const noteAdaptor = createEntityAdapter()
const initialState = noteAdaptor.getInitialState()

export const noteSelectors = noteAdaptor.getSelectors(state => state.notes)

const noteSlice = createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote: noteAdaptor.addOne,
        delNote: noteAdaptor.removeOne
    }
})

export const {addNote, delNote} = noteSlice.actions
export default noteSlice.reducer