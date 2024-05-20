import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Modal from '../modals/Modal';
import RegisterForm from '../modals/RegisterFormModal';
import LoginForm from '../modals/LoginFormModal';
import ProfileModal from '../modals/ProfileModal';
import headerLinks from '../../data/header-links.json';
import { AuthContext } from '../../store/auth-context';
import Avatar from '../../assets/images/menu-profile-holder.png';

const HeaderMenuContent = () => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const toggleModal = (modalType: string | null) => {
    setOpenModal(modalType);
  };

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
        {!user ? (
          <>
            <li>
              <Button
                variant='link'
                title='Login'
                handleClick={() => toggleModal('login')}
              />
            </li>
            <li>
              <Button
                classes='font-montserrat rounded-3xl'
                title='New Account'
                handleClick={() => toggleModal('register')}
              />
            </li>
          </>
        ) : (
          <div
            className='flex items-center gap-x-4 cursor-pointer'
            onClick={() => toggleModal('profile')}
          >
            <p className='font-medium text-sm text-dusty-grey'>
              {user.first_name} {user.last_name}
            </p>
            <img src={Avatar} alt='avatar' className='w-10 h-10' />
          </div>
        )}
      </ul>
      <Modal
        openModal={openModal !== null}
        handleClose={() => toggleModal(null)}
      >
        {openModal === 'register' && (
          <RegisterForm onSuccessRegistration={() => toggleModal('login')} />
        )}
        {openModal === 'login' && (
          <LoginForm
            onSuccessLogin={() => toggleModal(null)}
            openProfile={() => toggleModal('profile')}
          />
        )}
        {openModal === 'profile' && (
          <ProfileModal closeModal={() => toggleModal(null)} />
        )}
      </Modal>
    </>
  );
};

export default HeaderMenuContent;
