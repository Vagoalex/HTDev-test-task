import { FC, MouseEvent, memo } from 'react';
import { deleteNote } from '../../../../store/notesSlice';
import { useAppDispatch } from '../../../../store/reduxHooks';

import { INote } from '../notesTypes';
import './NotesPageItem.scss';

const NotesPageItem: FC<INote> = ({
  noteNumber,
  id,
  text,
  signature,
  time,
}) => {
  const validText = text === '' ? 'Здесь должен был быть текст' : text;
  const dispatch = useAppDispatch();

  return (
    <div className='NotesPageItem'>
      <span
        onClick={(e: MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          dispatch(deleteNote(id));
        }}
        className='NotesPageItem__delete'
      ></span>
      <h4 className='NotesPageItem__signature'>{signature}</h4>
      <h2 className='NotesPageItem__title'>{`Заметка №${noteNumber}`}</h2>
      <h2 className='NotesPageItem__time'>{time}</h2>
      <p className='NotesPageItem__desk'>{validText}</p>
    </div>
  );
};

export default memo(NotesPageItem);
