import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [
    {
      noteNumber: 1,
      id: 1732163,
      text: 'Какая-то интересная заметка, записана чтобы протестить приложение',
      signature: 'Неизвестный автор',
      time: '03/07/2022',
    },
    {
      noteNumber: 2,
      id: 1231342,
      text: 'Какая-то интересная заметка, записана чтобы протестить приложение',
      signature: 'Вася Пупкин',
      time: '03/07/2022',
    },
    {
      noteNumber: 3,
      id: 1232321342,
      text: 'Какая-то интересная заметка, записана чтобы протестить приложение, Какая-то интересная заметка, записана чтобы протестить приложение, Какая-то интересная заметка, записана чтобы протестить приложение,',
      signature: 'Костя Дзю',
      time: '03/07/2022',
    },
  ],
  counterNotes: 4,
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
    plusCounter: (state) => {
      state.counterNotes += 1;
    },
  },
});

const { actions, reducer } = notesSlice;

export default reducer;
export const { addNote, deleteNote, plusCounter } = actions;
