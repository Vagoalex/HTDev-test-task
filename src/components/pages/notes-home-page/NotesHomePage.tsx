import { motion } from 'framer-motion';

import './NotesHomePage.scss';

const NotesHomePage = () => {
  return (
    <motion.section
      initial={{ position: 'relative', left: '-20%' }}
      animate={{ position: 'relative', left: '0%' }}
      exit={{ position: 'absolute', left: '20%', top: 0 }}
    >
      NotesHomePage
    </motion.section>
  );
};

export default NotesHomePage;
