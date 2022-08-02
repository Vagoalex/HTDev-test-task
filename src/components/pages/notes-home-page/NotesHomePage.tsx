import { motion } from 'framer-motion';

import './NotesHomePage.scss';

const NotesHomePage = () => {
  return (
    <motion.section
      initial={{ position: 'relative', left: '-50%' }}
      animate={{ position: 'relative', left: '0%' }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      NotesHomePage
    </motion.section>
  );
};

export default NotesHomePage;
