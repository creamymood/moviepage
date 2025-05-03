import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import MovieDetail from './page/MovieDetail';
import Layout from './components/Layout';
import Login from './page/Login';
import Join from './page/Join';



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/details/:id' element={<MovieDetail/>} />
          <Route path='/join' element={<Login/>} />
          <Route path='/login' element={<Join/>} />

        </Route>
      </Routes>
  
     
      
    </>
  )
  
}

export default App
