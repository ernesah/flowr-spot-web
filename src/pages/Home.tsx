import { useState, useEffect, useCallback } from 'react';
import SearchInput from '../components/SearchInput';
import FlowerCard from '../components/cards/FlowerCard';
import Loading from '../components/Loading';
import ErrorDisplay from '../components/ErrorDisplay';
import Flower from '../models/Flower';
import { getFlowersList } from '../api/flowers.api';

const Home = () => {
  const [flowersList, setFlowersList] = useState<Flower[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchFlowersList = async () => {
      try {
        const response = await getFlowersList();
        setFlowersList(response.flowers);
      } catch (err: any) {
        setErrorMessage(err.response.data.error || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFlowersList();
  }, []);

  const toggleFavorite = useCallback(
    (id: number) => {
      setFlowersList((prevList) =>
        prevList.map((flower) =>
          flower.id === id ? { ...flower, favorite: !flower.favorite } : flower
        )
      );
    },
    [setFlowersList]
  );

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-flowers-background bg-cover bg-no-repeat w-full h-panel text-white px-6'>
        <h1 className='font-montserrat text-title text-center font-light lg:font-semibold'>
          Discover flowers around you
        </h1>
        <p className='font-playfair text-subtitle font-light lg:font-normal text-center mt-4 mb-10'>
          Explore between more than 8.427 sightings
        </p>
        <SearchInput
          placeholder='Looking for something specific?'
          searchItem={(searchText: string) => {
            setSearchText(searchText);
          }}
        />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-5 px-4 pb-6'>
        {flowersList.length > 0 &&
          flowersList.map((item: Flower) => (
            <FlowerCard
              key={item.id}
              data={item}
              toggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
