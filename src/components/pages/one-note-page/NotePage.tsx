import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../store/reduxHooks';
import { motion } from 'framer-motion';
import { INote } from '../../../types/notesTypes';

import './NotePage.scss';
import NotePageLayout from './note-page-layout/NotePageLayout';

const NotePage: FC = () => {
  const notes: INote[] = useAppSelector((state) => state.notes.notes);

  const { id } = useParams();

  const filterNote = useMemo(
    () => notes.filter((note) => note.id === Number(id)),
    [id, notes]
  );

  const { noteNumber, text, signature, time } = filterNote[0];
  return (
    <motion.section
      className='NotePage'
      initial={{ position: 'relative', left: '-50%', opacity: 0 }}
      animate={{ position: 'relative', left: '0%', opacity: 1 }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='NotePage__container'>
        <NotePageLayout
          noteNumber={noteNumber}
          text={text}
          signature={signature}
          time={time}
        />
      </div>
    </motion.section>
  );
};

export default NotePage;
