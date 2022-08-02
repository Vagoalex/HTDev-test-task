import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../store/index';
import { Note } from '../notesTypes';
import './NotesPageItem.scss';

const NotesPageItem: FC<Note> = ({
  id,
  note,
  text,
  signature,
  time,
  onDelete,
}) => {
  const validText = text === '' ? 'Здесь должен был быть текст' : text;

  return (
    <div className='NotesPageItem'>
      <span onClick={onDelete} className='NotesPageItem__delete'></span>
      <h4 className='NotesPageItem__signature'>{signature}</h4>
      <h2 className='NotesPageItem__title'>{note}</h2>
      <h2 className='NotesPageItem__time'>{time}</h2>
      <p className='NotesPageItem__desk'>{validText}</p>
    </div>
  );
};

export default memo(NotesPageItem);
