import { useContext, useEffect, useState } from 'react';
import Button from '../Button';
import Loading from '../Loading';
import ErrorDisplay from '../ErrorDisplay';
import User from '../../models/User';
import { getLoggedInUserData } from '../../api/user.api';
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
  const { logoutUser } = useContext(AuthContext);
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await getLoggedInUserData();
      setUserData(response.data.user);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  };

  if (loading) {
    <Loading />;
  }

  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }

  return (
    <div className='flex flex-col items-center gap-y-4'>
      <div className='flex items-center gap-x-6'>
        <img src={avatar} alt='avatar' className='w-20 h-20' />
        <div>
          <h3 className='text-2xl font-light'>
            {userData?.first_name} {userData?.last_name}
          </h3>
        </div>
      </div>
      <div className='items-start my-4'>
        <UserInfo label='First Name' value={userData?.first_name || ''} />
        <UserInfo label='Last Name' value={userData?.last_name || ''} />
        <UserInfo label='Date of Birth' value='May 20, 1980' />
        <UserInfo label='Email Address' value='michael.berry@gmail' />
      </div>
      <Button
        title='Logout'
        type='primary'
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
