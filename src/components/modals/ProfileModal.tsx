import { useContext } from 'react';
import Button from '../Button';
import { AuthContext } from '../../store/auth-context';
import avatar from '../../assets/images/profile-holder.png';

const UserInfo = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='mb-3'>
      <label className='text-dusty-grey text-xs mb-4'>{label}</label>
      <h5 className='text-lg'>{value}</h5>
    </div>
  );
};

const ProfileModal: React.FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className='flex flex-col items-center gap-y-4 mb-5'>
      <div className='flex items-center gap-x-6'>
        <img src={avatar} alt='avatar' className='w-20 h-20' />
        <div>
          <h3 className='text-2xl font-light'>
            {user?.first_name} {user?.last_name}
          </h3>
          <p className='font-light text-sm text-dusty-grey'>47 sightings</p>
        </div>
      </div>
      <div className='items-start my-4'>
        <UserInfo label='First Name' value={user?.first_name || ''} />
        <UserInfo label='Last Name' value={user?.last_name || ''} />
        <UserInfo label='Date of Birth' value='May 20, 1980' />
        <UserInfo label='Email Address' value='michael.berry@gmail' />
      </div>
      <Button
        title='Logout'
        variant='primary'
        classes='rounded px-8'
        handleClick={() => {
          closeModal();
          logoutUser();
        }}
      />
    </div>
  );
};

export default ProfileModal;
