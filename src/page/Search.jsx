import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieCard from "../components/MovidCard";

function Search () {
    const location = useLocation()
    const [movies, setMovies] = useState([])
    const query = new URLSearchParams(location.search).get('q')
    
        useEffect(()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDVlYjcyMzNmYmQ1ZDQyMWU1ZGZkODkxMzZjZDIxMiIsIm5iZiI6MTc0NjI1MjE4OS44MzksInN1YiI6IjY4MTViMTlkMGM3ODNiODVmZTkwN2YwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqsWPPvivWInRUx-3jc9ptyzddgYaKciT7aDe2U7HvI'
                }
              };
              
              fetch(`https://api.themoviedb.org/3/search/movie?language=ko-KO&include_adult=false&query=${query}`, options)
                .then(res => res.json())
                .then(data => {
                        console.log(data)
                        setMovies(data.results)
    
    
                })
                .catch(err => console.error(err));
        },[query]);

    return(
       <>
      
       {movies
       .filter(movies => movies.adult ===false)
       .map((movie,id)=> {
            return(
                <Link 
                to={`/details/${movie.id}`}>
                    <MovieCard key={id}
                    poster={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                
                
                    />
                 </Link>
            )
       })
       }
       
      </>
    )
}

export default Search