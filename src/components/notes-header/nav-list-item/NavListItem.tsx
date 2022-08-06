import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { routeProps } from '../../../types/headerNavTypes';

import './NavListItem.scss';

const NavListItem = ({ route }: routeProps) => {
  const defaultClass = 'NavListItem__link';
  const activeClasses = 'NavListItem__link NavListItem__link--active';

  return (
    <li key={route.key} className='NavListItem'>
      <NavLink
        className={(navData) =>
          navData.isActive ? activeClasses : defaultClass
        }
        to={route.path}
      >
        {route.name}
      </NavLink>
    </li>
  );
};

export default memo(NavListItem);
