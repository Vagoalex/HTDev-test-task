import { createSlice } from '@reduxjs/toolkit';

import { INotesState } from './storeTypes';
import notesState from './notesState';

const initialState: INotesState = {
  notes: notesState,
  countNote: 10,
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
    plusCounterNote(state) {
      state.countNote += 1;
    },
  },
});

const { actions, reducer } = notesSlice;

export default reducer;
export const { addNote, deleteNote, plusCounterNote } = actions;
