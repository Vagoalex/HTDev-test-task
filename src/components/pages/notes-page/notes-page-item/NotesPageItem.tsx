import { FC, memo } from 'react';
import { deleteNote } from '../../../../store/notesSlice';
import { useAppDispatch } from '../../../../store/reduxHooks';

import { INote } from '../../../../types/notesTypes';
import './NotesPageItem.scss';

const NotesPageItem: FC<INote> = ({
  noteNumber,
  id,
  text,
  signature,
  time,
}) => {
  const checkText: string | undefined =
    text === '' ? 'Здесь должен был быть текст...' : text;
  const validText =
    checkText && checkText.length > 43 ? `${text?.slice(0, 40)}...` : checkText;

  const dispatch = useAppDispatch();

  return (
    <div className='NotesPageItem'>
      <div>
        <h4 className='NotesPageItem__signature'>{signature}</h4>
        <h2 className='NotesPageItem__title'>{`Заметка №${noteNumber}`}</h2>
        <h2 className='NotesPageItem__time'>{time}</h2>
        <p className='NotesPageItem__desk'>{validText}</p>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteNote(id));
        }}
        className='NotesPageItem__delete'
      ></div>
    </div>
  );
};

export default memo(NotesPageItem);
