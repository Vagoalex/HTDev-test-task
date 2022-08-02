import { useEffect, useCallback, FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../store/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import { useHttp } from '../../../hooks/http.hook';
import { Note } from './notesTypes';
import { deleteNote, fetchNotes } from '../../../store/notes/notesSlice';
import NotesPageItem from './notes-page-item/NotesPageItem';

import './NotesPage.scss';

const NotesPage: FC = () => {
  const notes = useSelector<RootState>((state) => state.notes);
  console.log(notes);
  const notesLoadingStatus = useSelector<RootState>(
    (state) => state.notes.notesLoadingStatus
  );

  const dispatch = useDispatch<AppDispatch>();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchNotes());
    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback(
    (id: number) => {
      request(`http://localhost:3001/notes/${id}`, 'DELETE')
        .then((data) => console.log(data, `Note №${id} Deleted`))
        .then(() => dispatch(deleteNote(id)))
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line
    [request]
  );

  if (notesLoadingStatus === 'loading') {
    // return <Spinner />;
    return <h2>Загрузка...</h2>;
  } else if (notesLoadingStatus === 'error') {
    return <h2 className='text-center mt-5 text-white'>Ошибка загрузки</h2>;
  }

  const renderNotesList = (arr: object[]) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={0} classNames='hero'>
          <h5 className='text-center mt-5 text-white'>Тут пока что пусто...</h5>
        </CSSTransition>
      );
    }

    return arr.map((value: object) => {
      // const {id: number, ...props} = value;

      return (
        <CSSTransition key={value.id} timeout={1000} classNames='hero'>
          <NotesPageItem
            {...props}
            onDelete={(e: MouseEvent<HTMLButtonElement>): void => {
              e.preventDefault();
              onDelete(id);
            }}
          />
        </CSSTransition>
      );
    });
  };

  const elements = renderNotesList(notes);

  return (
    <motion.section
      className='NotesPage'
      initial={{ position: 'relative', left: '-50%' }}
      animate={{ position: 'relative', left: '0%' }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <TransitionGroup
        childFactory={(child: React.ReactElement) => child}
        as='div'
        className='NotesPage__list'
      >
        {elements}
      </TransitionGroup>
    </motion.section>
  );
};

export default NotesPage;
