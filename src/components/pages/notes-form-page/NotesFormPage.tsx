import { motion } from 'framer-motion';

import './NotesFormPage.scss';

const NotesForm = () => {
  return (
    <motion.section
      initial={{ position: 'relative', left: '-20%' }}
      animate={{ position: 'relative', left: '0%' }}
      exit={{ position: 'absolute', left: '20%', top: 0 }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ display: 'none' }}
    >
      NotesForm
    </motion.section>
  );
};

export default NotesForm;
