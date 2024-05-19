import Flower from '../../models/Flower';
import GrayStar from '../../assets/icons/gray-star.svg';
import WhiteStar from '../../assets/icons/white-star.svg';

const FlowerCard = ({ data }: { data: Flower }) => {
  return (
    <div
      key={data.id}
      className='flex flex-col justify-between items-center w-full h-[230px] md:h-[290px] lg:h-[350px] text-white rounded p-4 bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${data.profile_picture})` }}
    >
      <div
        className={`flex items-center ${
          data.favorite
            ? 'bg-soft-pink-gradient'
            : 'bg-white shadow-soft-elevation'
        } w-6 h-6 lg:w-circle-small lg:h-circle-small rounded-full p-1.5 ml-auto`}
      >
        <img
          src={data.favorite ? WhiteStar : GrayStar}
          alt='star'
          className='w-full h-full'
        />
      </div>
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
};

export default FlowerCard;
