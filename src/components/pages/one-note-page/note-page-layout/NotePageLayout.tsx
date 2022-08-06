import { FC } from 'react';
import { Link } from 'react-router-dom';
import { INote } from '../../../../types/notesTypes';

import './NotePageLayout.scss';

const NotePageLayout: FC<INote> = ({ noteNumber, text, signature, time }) => {
  const validText =
    text === ''
      ? 'Тут должен был быть текст, но его не ввели при создании заметки, так что вот вам месседж от меня, Hello World!!!111'
      : text;

  return (
    <div className='NotePageLayout'>
      <div>
        <h4 className='NotePageLayout__signature'>{signature}</h4>
        <h2 className='NotePageLayout__title'>{`Заметка №${noteNumber}`}</h2>
        <h2 className='NotePageLayout__time'>{time}</h2>
        <p className='NotePageLayout__desk'>{validText}</p>
      </div>
      <Link to='/notes' className='NotePageLayout__back'>
        Вернуться обратно
      </Link>
    </div>
  );
};

export default NotePageLayout;
