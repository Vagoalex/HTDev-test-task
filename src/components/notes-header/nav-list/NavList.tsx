import { memo, FC } from 'react';
import NavListItem from '../nav-list-item/NavListItem';
import data from '../../../db.json';
import './NavList.scss';

const navElements = data['nav-routes'];

const NavList: FC = () => {
  return (
    <ul className='NavList'>
      {navElements.map((route) => (
        <NavListItem key={route.key} route={route} />
      ))}
    </ul>
  );
};

export default memo(NavList);
