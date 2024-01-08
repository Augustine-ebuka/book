import React, { useState } from 'react';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
        <div className='flex px-4 gap-2 m-auto lg:w-[60%] mt-7 sm:w-[90%]'>
        <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-50 border flex-3 rounded-sm border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
                <button 
                className='bg-blue-600 flex-1 p-2 rounded-sm text-white font-bold'
                
                >
                  search
                
                </button>
        </div>
    </div>

  );
};

export default Search;
