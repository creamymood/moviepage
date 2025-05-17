import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import MovieDetail from './page/MovieDetail';
import Layout from './components/Layout';
import Login from './page/Login';
import Join from './page/Join';
import Search from './page/Search';
import { useState } from 'react';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
          <Route index element={<Home/>} />
          <Route path='/details/:id' element={<MovieDetail/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
          <Route path='/search' element={<Search/>} />

        </Route>
      </Routes>
  
     
      
    </>
  )
  
}

export default App
