import React, { useState, CSSProperties} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from '../context/userContext';

interface LoginProps {}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
  color: ''
};
 

const Login: React.FC<LoginProps> = () => {
  const { loginUser } = useAuth();
  const [loading, setIsloading] = useState<boolean | undefined>(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsloading(true)

    const api = 'http://localhost:8000/api/login';
    axios.defaults.withCredentials = true;
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With':'XMLHttpRequest',
    };
    
    try {
      const result = await axios.post(api, formData,{headers});
      if (result.status === 200) {
        // const { token } = result.data;
        // localStorage.setItem('authToken', token);
        loginUser()
        toast.success('Login success');

        setTimeout(() => {
          navigate('/home');
        }, 3000);
        console.log(result.data);
      }
    } catch (error:any) {
      switch (error.response?.status) {
        case 403:
          toast.error('User does not exist!');
          break;

        case 401:
          toast.error('Password or email not correct');
          break;

        case 500:
          toast.error('Server error');
          break;

        default:
          toast.error('Something went wrong');
          break;
      }
      console.error('API call error:', error);
    }
    finally{
      setIsloading(false)
      console.log('i am done regardless')
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (email.trim() === '' || password.trim() === '') {
      toast.error('Please fill in all required fields');
      return false;
    }

    return true;
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <ClipLoader
             loading={loading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={login}>
              {/* email address */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  onChange={handleSubmit}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              {/* password */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={handleSubmit}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {/* submit button */}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log In
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
