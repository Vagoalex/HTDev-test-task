import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const notesAdapter = createEntityAdapter();

const initialState = notesAdapter.getInitialState({
  notesLoadingStatus: 'idle',
  counterNotes: 4,
});

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const { request } = useHttp();
  return await request('http://localhost:3001/notes');
});

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteNote: (state, action) => {
      notesAdapter.removeOne(state, action.payload);
    },
    addNote: (state, action) => {
      notesAdapter.addOne(state, action.payload);
    },
    plusCounter: (state) => {
      state.counterNotes += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.notesLoadingStatus = 'loading';
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        notesAdapter.setAll(state, action.payload);
        state.notesLoadingStatus = 'idle';
      })
      .addCase(notesAdapter.rejected, (state) => {
        state.notesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = notesSlice;

export default reducer;

export const { addNote, deleteNote, plusCounter } = actions;
