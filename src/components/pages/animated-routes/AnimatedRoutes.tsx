import { lazy, Suspense, useState, useEffect, FC } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingPage from '../../pages/notes-loading-page/NotesLoadingPage';

import './AnimatedRoutes.scss';

const HomePage = lazy(
  () => import('../../pages/notes-home-page/NotesHomePage')
);
const FormPage = lazy(
  () => import('../../pages/notes-form-page/NotesFormPage')
);
const NotesPage = lazy(() => import('../../pages/notes-page/NotesPage'));
const Page404 = lazy(() => import('../../pages/notes-page-404/NotesPage404'));

const AnimatedRoutes: FC = (): JSX.Element => {
  const location = useLocation();

  const [suspended, setSuspended] = useState(false);
  useEffect(() => {
    setTimeout(() => setSuspended((s) => (s ? s : !s)), 2500);
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <Suspense fallback={<LoadingPage />}>
              <main className='main wrapper'>
                {suspended ? <HomePage /> : <LoadingPage />}
              </main>
            </Suspense>
          }
        />
        <Route
          path='/form'
          element={
            <Suspense fallback={<LoadingPage />}>
              <main className='main wrapper'>
                {suspended ? <FormPage /> : <LoadingPage />}
              </main>
            </Suspense>
          }
        />
        <Route
          path='/notes'
          element={
            <Suspense fallback={<LoadingPage />}>
              <main className='main wrapper'>
                {suspended ? <NotesPage /> : <LoadingPage />}
              </main>
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<LoadingPage />}>
              <main className='main wrapper'>
                {suspended ? <Page404 /> : <LoadingPage />}
              </main>
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
