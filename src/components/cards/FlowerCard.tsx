import { memo, useContext, useCallback } from 'react';
import { AuthContext } from '../../store/auth-context';
import Flower from '../../models/Flower';
import grayStar from '../../assets/icons/gray-star.svg';
import whiteStart from '../../assets/icons/white-star.svg';

interface FlowerCardProps {
  data: Flower;
  toggleFavorite: (id: number) => void;
}

const FlowerCard = memo(({ data, toggleFavorite }: FlowerCardProps) => {
  const { user } = useContext(AuthContext);

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(data.id);
  }, [data.id, toggleFavorite]);

  return (
    <div
      key={data.id}
      className={`flex flex-col ${
        user ? 'justify-between' : 'justify-end'
      } items-center w-full h-[230px] md:h-[290px] lg:h-[350px] text-white rounded p-4 bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${data.profile_picture})` }}
    >
      {user && (
        <button
          type='button'
          className={`flex items-center ${
            data.favorite
              ? 'bg-soft-pink-gradient'
              : 'bg-white shadow-soft-elevation'
          } w-6 h-6 lg:w-circle-small lg:h-circle-small rounded-full p-1.5 ml-auto`}
          onClick={handleToggleFavorite}
        >
          <img
            src={data.favorite ? whiteStart : grayStar}
            alt='star'
            className='w-full h-full'
          />
        </button>
      )}
      <div className='flex flex-col items-center font-ubuntu'>
        <h3 className='text-xl capitalize'>{data.name}</h3>
        <h6 className='text-xs italic capitalize'>{data.latin_name}</h6>
        <div
          className={`flex items-center justify-center ${
            data.favorite
              ? 'bg-soft-pink-gradient shadow-soft-pink'
              : 'bg-black bg-opacity-50'
          } py-3 px-5 mt-5 rounded-3xl`}
        >
          <h6 className='font-ubuntu text-xs'>{data.sightings} Sightings</h6>
        </div>
      </div>
    </div>
  );
});

export default FlowerCard;
