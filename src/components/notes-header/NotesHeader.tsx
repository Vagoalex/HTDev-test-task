import NavList from './nav-list/NavList';

import './NotesHeader.scss';

const NotesHeader = () => {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <NavList />
      </nav>
    </header>
  );
};

export default NotesHeader;
