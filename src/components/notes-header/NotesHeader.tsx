import { FC } from 'react';
import NavList from './nav-list/NavList';

import './NotesHeader.scss';

const NotesHeader: FC = (): JSX.Element => {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <NavList />
      </nav>
    </header>
  );
};

export default NotesHeader;
