import Spinner from '../../spinner/Spinner';
import './NotesLoadingPage.scss';

const NotesLoadingPage = () => {
  return (
    <section className='NotesLoadingPage'>
      <Spinner />
    </section>
  );
};

export default NotesLoadingPage;
