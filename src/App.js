import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import Account from '../src/components/Account';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
                
             
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;