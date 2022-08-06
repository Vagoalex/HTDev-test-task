import { createSlice } from '@reduxjs/toolkit';
import notesState from './notesState';
const initialState = {
  notes: notesState,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

const { actions, reducer } = notesSlice;

export default reducer;
export const { addNote, deleteNote } = actions;
