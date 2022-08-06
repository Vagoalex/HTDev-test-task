import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotesPage404.scss';

const NotesPage404 = () => {
  return (
    <motion.section
      className='Page404'
      initial={{ position: 'relative', left: '-50%', opacity: 0 }}
      animate={{ position: 'relative', left: '0%', opacity: 1 }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='Page404__container'>
        <h2 className='Page404__title'>
          Ууупс! Данной страницы не существует!
        </h2>
        <Link to='/' className='Page404__link'>
          Вернуться на главную
        </Link>
      </div>
    </motion.section>
  );
};

export default NotesPage404;
