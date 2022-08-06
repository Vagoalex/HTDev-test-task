import { FC, memo } from 'react';
import NotesFooterItem from './NotesFooterItem';
import data from '../../db.json';
import './NotesFooter.scss';

const footerSocials = data['footer-socials'];

const NotesFooter: FC = () => {
  return (
    <footer className='NotesFooter'>
      <ul className='NotesFooter__list'>
        {footerSocials.map((social) => (
          <NotesFooterItem key={social.id} social={social} />
        ))}
      </ul>
    </footer>
  );
};

export default memo(NotesFooter);
