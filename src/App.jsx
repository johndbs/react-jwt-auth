import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnonymousRoute from './routes/AnonymousRoute';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/slices/userSlice';
import AuthVerify from './routes/AuthVerify';
import Hello from './pages/hello/Hello';

function App() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setCurrentUser(undefined));
  };

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route element={<AnonymousRoute redirectPath="/" />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute redirectPath="/login" />}>
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path="/hello" element={<Hello />} />
            </Route>
          </Routes>

          <AuthVerify logOut={logOut} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
