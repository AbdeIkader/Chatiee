import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { Toaster } from 'react-hot-toast';

export default function App() {

  return <>

    <div className='h-screen flex items-center justify-center'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>

      <Toaster />

    </div>

  </>



}


