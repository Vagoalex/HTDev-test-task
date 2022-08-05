import { FC } from 'react';
import data from '../../db.json';
import { IFooter } from './typesFooter';
import './NotesFooter.scss';

const footerSocials = data['footer-socials'];

const NotesFooter: FC = () => {
  return (
    <footer className='NotesFooter'>
      <div className='NotesFooter__container'>
        <ul className='NotesFooter__list'>
          {footerSocials.map((social) => (
            <NotesFooterItem key={social.id} social={social} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

const NotesFooterItem: FC<IFooter> = ({ social }) => {
  return (
    <li className='FooterSocial-list-item'>
      <a
        className={`FooterSocial-list-item__link`}
        href={social.socialLink}
        target='_blank'
        rel='noreferrer'
      >
        {social.title}
      </a>
    </li>
  );
};

export default NotesFooter;
