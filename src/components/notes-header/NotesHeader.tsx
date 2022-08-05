import { FC, memo } from 'react';
import NavList from './nav-list/NavList';

import './NotesHeader.scss';

const NotesHeader: FC = () => {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <NavList />
      </nav>
    </header>
  );
};

export default memo(NotesHeader);
