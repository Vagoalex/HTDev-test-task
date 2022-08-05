import { FC } from 'react';
import data from '../../db.json';
import { IFooter } from './typesFooter';
import './NotesFooter.scss';

// const footerSocials = data['footer-socials'];

const NotesFooter: FC = (): JSX.Element => {
  return (
    <footer className='NotesFooter'>
      {/* <div className='NotesFooter__container'>
        <ul className='NotesFooter__list'>
          {footerSocials.map(({ id, ...data }) => (
            <NotesFooterItem key={id} {...data} />
          ))}
        </ul>
      </div> */}
    </footer>
  );
};

// const NotesFooterItem = ({ title, socialLink }) => {
//   return (
//     <li className='FooterSocial-list-item'>
//       <a
//         className={`FooterSocial-list-item__link`}
//         href={socialLink}
//         target='_blank'
//         rel='noreferrer'
//       >
//         {title}
//       </a>
//     </li>
//   );
// };

export default NotesFooter;
