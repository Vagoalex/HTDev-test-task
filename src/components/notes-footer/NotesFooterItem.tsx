import { FC, memo } from 'react';
import { IFooter } from './typesFooter';

const NotesFooterItem: FC<IFooter> = ({ social }) => {
  const { name, socialLink } = social;
  return (
    <li className='FooterSocial-list-item'>
      <a
        className={`FooterSocial-list-item__link FooterSocial-list-item__${name}`}
        href={socialLink}
        target='_blank'
        rel='noreferrer'
      >
        <i className={`fa fa-${name}`}></i>
      </a>
    </li>
  );
};

export default memo(NotesFooterItem);
