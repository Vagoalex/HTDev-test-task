import { motion } from 'framer-motion';
import './NotesPage.scss';

const NotesPage = () => {
  return (
    <motion.section
      initial={{ position: 'relative', left: '-20%' }}
      animate={{ position: 'relative', left: '0%' }}
      exit={{ position: 'absolute', left: '20%', top: 0 }}
    >
      NotesPage
    </motion.section>
  );
};

export default NotesPage;
