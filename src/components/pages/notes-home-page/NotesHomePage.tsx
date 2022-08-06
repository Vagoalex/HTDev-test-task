import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './NotesHomePage.scss';

const NotesHomePage: FC = (): JSX.Element => {
  return (
    <motion.section
      className='NotesHome'
      initial={{ position: 'relative', left: '-50%', opacity: 0 }}
      animate={{ position: 'relative', left: '0%', opacity: 1 }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='NotesHome__container'>
        <Link to='/form' className='NotesHome__title'>
          Создай свою заметку
        </Link>
      </div>
    </motion.section>
  );
};

export default memo(NotesHomePage);
