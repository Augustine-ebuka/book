import React from 'react';
import { Link} from 'react-router-dom';
import { useState, CSSProperties } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import RegisterValidate from '../utilities/registerValidate'

interface SignUpProps {}
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
  color: ''
};
 

const SignUp: React.FC<SignUpProps> = () => {

  const navigate = useNavigate()
  const [loading, setIsloading] = useState<boolean | undefined>(false)
  const api = 'http://localhost:8000/api/register'
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
  }>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
  });


  const formSubmit = async (event:any) => {
    event.preventDefault();
    if (!RegisterValidate(formData)) {
       toast.error('Please fill in all required fields');
      return;
    }
    setIsloading(true)
    try {
      const result = await axios.post(api, formData,{headers});
      setTimeout(() => {
        navigate('/verify')
      }, 3000);
     if(result.status == 201){
      console.log(result)
      toast.success("registration created!");
     }
    } 
    catch (error:any) {
      switch (error.response.status) {
        case 401:
          toast.error("user with email already exist!");
          break;

        case 400:
          toast.error("missing field(s)!");
          break

        case 500:
          toast.error("server error");
          break

        default:
          toast.error("something went wrong");
          break;
      }
      console.log(error.response.status);
    } 
    finally{
      setIsloading(false)
      console.log('i am done regardless')
    }
  };

  const handleSubmit = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
    
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register Here
            </h1>
            <ClipLoader
             loading={loading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            {/* firstname */}
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={formSubmit}>
              <div>
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
                </label>
                <input
                  onChange={handleSubmit}
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              {/* lastname */}
              <div>
                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  last anme
                </label>
                <input
                  onChange={handleSubmit}
                  type="text"
                  name="lastname"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
                {/* phone number */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone
                </label>
                <input
                  onChange={handleSubmit}
                  type="phone"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+2349012345678"
                  required
                />
              </div>
                {/* emaail address */}
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
                {/* confirm password */}
              {/* <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div> */}
              <div className="flex items-start">
              </div>
                {/* submit button */}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
