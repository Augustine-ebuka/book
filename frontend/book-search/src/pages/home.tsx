import { useEffect, useState } from "react";
import Header from "../component/header";
import Search from "../component/search";
import axios from "axios";
import { useAuth } from '../context/userContext';

interface UserInfo {
  data: {
    firstname: string;
  };
}


function Home() {
  const { logoutUser} = useAuth();
  const api = 'http://localhost:8000/api/profile';
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const result = await axios.get(api, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (result.status === 200) {
        setUserInfo(result.data.data);
        console.log(result.data.data.firstname);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const logout = async(event:any)=>{
    event.preventDefault()
    const apiRoute = 'http://localhost:8000/api/logout'
    try {
      const result = await axios.get(apiRoute, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (result.status === 200) {
        logoutUser()
       console.log("logout successful")
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight capitalize">Welcome back {userInfo?.firstname}!</span>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0" onClick={logout}>
            Logout
          </a>
        </div>
      </nav>
      <Header text="Welcome to your book search app" />
      <Search />
    </>
  );
}

export default Home;
