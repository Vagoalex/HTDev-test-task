import { FC } from 'react';
import { Link } from 'react-router-dom';
import { INote } from '../../../../types/notesTypes';

import './NotePageLayout.scss';

const NotePageLayout: FC<INote> = ({ noteNumber, text, signature, time }) => {
  return (
    <div className='NotePageLayout'>
      <div>
        <h4 className='NotePageLayout__signature'>{signature}</h4>
        <h2 className='NotePageLayout__title'>{`Заметка №${noteNumber}`}</h2>
        <h2 className='NotePageLayout__time'>{time}</h2>
        <p className='NotePageLayout__desk'>{text}</p>
      </div>
      <Link to='/notes' className='NotePageLayout__back'>
        Вернуться обратно
      </Link>
    </div>
  );
};

export default NotePageLayout;
