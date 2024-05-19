import searchIcon from '../assets/icons/search-icon.svg';

const SearchInput = ({
  placeholder,
  searchItem
}: {
  placeholder: string;
  searchItem: (searchText: string) => void;
}) => {
  return (
    <div className='relative flex items-center justify-between bg-white w-full md:w-3/5 lg:w-2/5 rounded p-4'>
      <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
        <img src={searchIcon} alt='search' className='w-6 h-6' />
      </div>
      <input
        type='text'
        className='block input w-full h-fit font-ubuntu text-sm md:text-lg font-light text-dusty-grey outline-none'
        placeholder={placeholder}
        onChange={(event) => searchItem(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
