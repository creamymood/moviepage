import { useState } from 'react';
import movieListData  from '../data/movieListData.json';
import MovieCard from '../components/MovidCard';
import { Link } from 'react-router-dom';


function Home() {
    const [movies, setMovies] = useState(movieListData.results)
  
    return (
      <>
      
        {movies.map((movie,id)=>{
          return(
           <Link to={`/details/${movie.id}`}>
            <MovieCard key={id}
                poster = {movie.poster_path}
                title = {movie.title}
                rating = {movie.vote_average}
            
            
            />
           </Link> 
        )
        })}
       
      </>
      
    )
    

  }
  

  export default Home;