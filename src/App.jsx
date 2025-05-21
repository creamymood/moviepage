import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import MovieDetail from './page/MovieDetail';
import Layout from './components/Layout';
import Login from './page/Login';
import Join from './page/Join';
import Search from './page/Search';
import MyPage from './page/MyPage';




function App() {





  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/details/:id' element={<MovieDetail/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search/>} />
          <Route path='/mypage' element={<MyPage/>}/>

        </Route>
      </Routes>
  
     
      
    </>
  )
  
}

export default App
