import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { INote } from '../../../types/notesTypes';
import { useAppSelector } from '../../../store/reduxHooks';
import NotesPageItem from './notes-page-item/NotesPageItem';

import './NotesPage.scss';

const NotesPage: FC = () => {
  const notes: INote[] = useAppSelector((state) => state.notes.notes);

  return (
    <motion.section
      className='NotesPage'
      initial={{ position: 'relative', left: '-50%', opacity: 0 }}
      animate={{ position: 'relative', left: '0%', opacity: 1 }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='NotesPage__container'>
        <div
          className={`NotesPage__list ${
            notes.length === 0 ? 'NotesPage__list--empty' : ''
          }`}
        >
          {notes.length !== 0 ? (
            notes.map((val) => {
              const { noteNumber, id, text, signature, time } = val;
              return (
                <NotesPageItem
                  noteNumber={noteNumber}
                  key={id}
                  id={id}
                  text={text}
                  signature={signature}
                  time={time}
                />
              );
            })
          ) : (
            <div className='NotesPage-list-empty'>
              <h2 className='NotesPage-list-empty__title'>
                Тут пока что пусто...
              </h2>
              <Link to='/form' className='NotesPage-list-empty__link'>
                Перейти в форму
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(NotesPage);
