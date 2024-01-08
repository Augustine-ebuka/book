import React, { useState, useMemo, CSSProperties } from 'react';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';

interface SearchProps {}

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'blue',
  color: '',
};

const Search: React.FC<SearchProps> = () => {
  const [loading, setIsloading] = useState<boolean | undefined>(false);
  const [formData, setFormData] = useState({
    bookTitle: '',
  });

  // Use useMemo to cache the search results
  const cachedSearchResults = useMemo(() => new Map<string, any>(), []);

  const searchBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const cachedResult = cachedSearchResults.get(formData.bookTitle);

    if (cachedResult) {
      console.log('Result found in cache:', cachedResult);
      return;
    }

    setIsloading(true);

    const api = 'http://localhost:8000/api/book/search/';
    try {
      const result = await axios.post(api, formData);
      if (result.status === 200) {
        const { books } = result.data;
        console.log(books);

        // Cache the result for future use
        cachedSearchResults.set(formData.bookTitle, books);
      }
    } catch (error) {
      console.error('API call error:', error);
    } finally {
      setIsloading(false);
      console.log('I am done regardless');
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { bookTitle } = formData;

    if (bookTitle.trim() === '') {
      return false;
    }
    return true;
  };

  return (
    <div>
      <form className="" action="#" onSubmit={searchBook}>
        <div className='flex px-4 gap-2 m-auto lg:w-[60%] mt-7 sm:w-[90%] mb-3'>
          <input
            onChange={handleSubmit}
            type='text'
            name='bookTitle'
            id='firstname'
            className='bg-gray-50 border flex-3 rounded-sm border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='enter the book title you want to search'
            required
          />
          <button className='bg-blue-600 flex-1 p-2 rounded-sm text-white font-bold'>search</button>
        </div>

        <MoonLoader
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label='Loading Spinner'
          data-testid='loader'
          className='mt-4'
        />
      </form>
    </div>
  );
};

export default Search;
