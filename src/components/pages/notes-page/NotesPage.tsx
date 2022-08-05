import { FC } from 'react';
import { motion } from 'framer-motion';
import { INote } from './notesTypes';
import { useAppSelector } from '../../../store/reduxHooks';
import NotesPageItem from './notes-page-item/NotesPageItem';

import './NotesPage.scss';

const NotesPage: FC = (): JSX.Element => {
  const note: INote[] = useAppSelector((state) => state.notes.notes);

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
        <div>
          {note.length !== 0 ? (
            note.map((val, i) => {
              const { id, text, signature, time } = val;
              return (
                <NotesPageItem
                  noteNumber={i}
                  key={id}
                  id={id}
                  text={text}
                  signature={signature}
                  time={time}
                />
              );
            })
          ) : (
            <div>Тут пока что пусто...</div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default NotesPage;
