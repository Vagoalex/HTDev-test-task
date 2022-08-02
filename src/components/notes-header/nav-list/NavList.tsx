import './NavList.scss';
import data from '../../../db.json';
import NavListItem from '../nav-list-item/NavListItem';

const navElements = data['nav-routes'];

const NavList = () => {
  return (
    <ul className='NavList'>
      {navElements.map((route) => (
        <NavListItem route={route} />
      ))}
    </ul>
  );
};

export default NavList;
