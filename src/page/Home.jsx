import { useEffect, useState } from 'react';
import MovieCard from '../components/MovidCard';
import { Link } from 'react-router-dom';


function Home() {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDVlYjcyMzNmYmQ1ZDQyMWU1ZGZkODkxMzZjZDIxMiIsIm5iZiI6MTc0NjI1MjE4OS44MzksInN1YiI6IjY4MTViMTlkMGM3ODNiODVmZTkwN2YwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqsWPPvivWInRUx-3jc9ptyzddgYaKciT7aDe2U7HvI'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
                    console.log(data)
                    setMovies(data.results)


            })
            .catch(err => console.error(err));
    },[]);
    
  
    return (
      <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">🎬 Popular Movies</h1>
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies
            .filter(movies => movies.adult === false)
            .map((movie, id) => {
              return (
                <Link to={`/details/${movie.id}`} key={id}>
                  <MovieCard
                    poster={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    );
    
    

  }
  

  export default Home;
