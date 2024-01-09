import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Verify from './pages/verify';
import Home from './pages/home';
import PrivateRoute from './context/protected/privateRoute';
import { AuthProvider } from './context/userContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          {/* Private route using PrivateRoute component */}
         <Route path='/' element={<PrivateRoute />}>
           <Route path='/home' element={<Home />} />
         </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
