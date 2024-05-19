import { NavLink } from 'react-router-dom';
import Button from '../Button';
import headerLinks from '../../data/header-links.json';

const HeaderMenuContent = () => {
  return (
    <>
      <ul className='flex flex-col lg:flex-row items-start justify-center lg:justify-normal lg:items-center gap-y-10 lg:gap-x-7 px-4 lg:px-0'>
        {headerLinks.data.map((item) => (
          <li key={item.link} className='font-medium text-sm text-dusty-grey'>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                [isActive ? 'text-ruddy-pink' : ''].join(' ')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Button type='link' title='Login' />
        </li>
        <li>
          <Button classes='font-montserrat rounded-3xl' title='New Account' />
        </li>
      </ul>
    </>
  );
};

export default HeaderMenuContent;
