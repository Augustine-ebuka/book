import React, { useState, useMemo, CSSProperties } from 'react';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import Layout from './layout';
import Cards from './card';
import BookInterface from '../interface/book';
import ProjectCard from "../component/allCards";

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
  const [book, setBook] = useState<any>([]);
  const [allBook, setAllBook] = useState<any>([]);
  const [searchType, setSearchType] = useState<'single' | 'all'>('single');

  // Use useMemo to cache the search results
  const cachedSearchResults = useMemo(() => new Map<string, any>(), []);

  const searchBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const cachedResult = cachedSearchResults.get(formData.bookTitle);

    if (cachedResult) {
      setBook(cachedResult);
      console.log('Result found in cache:', cachedResult);
      setSearchType('single');
      return;
    }

    setIsloading(true);

    const api = 'http://localhost:8000/api/book/search/specific';
    try {
      const result = await axios.post(api, formData);
      if (result.status === 200) {
        const { books } = result.data;
        setBook(books);
        setSearchType('single');
        console.log(books[0].name);

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

  const searchAllBooks = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsloading(true);

    const cachedResult = cachedSearchResults.get('allbooks');

    if (cachedResult) {
      setAllBook(cachedResult);
      console.log('Result found in cache for all:', cachedResult);
      setSearchType('all');
      return;
    }

    const apiAll = 'http://localhost:8000/api/book/search/all';
    try {
      const result = await axios.post(apiAll);
      if (result.status === 200) {
        const { books } = result.data;
        setAllBook(books);
        setSearchType('all');
        console.log(books);
        cachedSearchResults.set('allbooks', books);
      }
    } catch (error) {
      console.error('API call error:', error);
      // Handle error, e.g., show an error message to the user
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
    <>
      <div>
        <form className="" action="#" onSubmit={searchBook}>
          <div className='flex px-4 gap-2 m-auto lg:w-[60%] mt-7 sm:w-[90%] mb-3'>
            <input
              onChange={handleSubmit}
              type='text'
              name='bookTitle'
              id='firstname'
              className='bg-gray-50 border flex-2 rounded-sm border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='enter the book title you want to search'
              required
            />
            <button className='bg-blue-600 flex-1 p-2 rounded-sm text-white ' >search</button>
          </div>
        </form>

        <form onSubmit={searchAllBooks} className='ml-10'>
          <button className='bg-blue-600 flex-1  p-2 rounded-sm text-white font-primary'>all books</button>
        </form>
        <MoonLoader
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label='Loading Spinner'
          data-testid='loader'
          className='mt-4'
        />
      </div>

      <Layout>
        {searchType === 'single' && book.length ? (
          <div>
            {book.map((info: BookInterface) => (
              <Cards
                key={info.name}
                name={info.name}
                isbn={info.isbn}
                authors={info.authors}
                numberOfPages={info.numberOfPages}
                country={info.country}
                released={info.released}
                publisher={info.publisher}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        {searchType === 'all' && allBook.length ? (
          <div>
            {allBook.map((info: BookInterface) => (
              <ProjectCard
                key={info.name}
                imageSrc="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image2.png?raw=true"
                name={info.name}
                authors={info.authors}
                numberOfPages={info.numberOfPages}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
};

export default Search;
