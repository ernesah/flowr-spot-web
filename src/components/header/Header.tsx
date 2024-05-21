import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useBodyOverflow from '../../hooks/useBodyOverflow';
import HeaderMenuContent from './HeaderMenuContent';
import logo from '../../assets/images/logo.png';
import hamburgerMenuIcon from '../../assets/icons/hamburger-menu.svg';
import closeIcon from '../../assets/icons/close-icon.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyOverflow(menuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='flex items-center justify-between font-montserrat p-5'>
      <NavLink to='/'>
        <img src={logo} alt='logo' width='169px' height='30px' />
      </NavLink>

      <div className='hidden lg:flex'>
        <HeaderMenuContent />
      </div>
      <div className='flex lg:hidden'>
        <img
          src={menuOpen ? closeIcon : hamburgerMenuIcon}
          alt='menu'
          className={`w-6 ${menuOpen ? 'h-6' : 'h-4'}`}
          onClick={toggleMenu}
        />
      </div>
      <div className={`${menuOpen ? 'contents' : 'hidden'} lg:hidden`}>
        <div className='absolute top-14 left-0 bg-white z-20 w-full md:w-1/2 h-full'>
          <div className='flex flex-col justify-center items-start px-4 h-full'>
            <HeaderMenuContent />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
