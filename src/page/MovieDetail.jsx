import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





function MovieDetail() {
    const [movie, setMovies] = useState(null)
    const {id} = useParams();

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDVlYjcyMzNmYmQ1ZDQyMWU1ZGZkODkxMzZjZDIxMiIsIm5iZiI6MTc0NjI1MjE4OS44MzksInN1YiI6IjY4MTViMTlkMGM3ODNiODVmZTkwN2YwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqsWPPvivWInRUx-3jc9ptyzddgYaKciT7aDe2U7HvI'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)  
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data)
            })
            .catch(err => console.error(err));
    },[id])
    
    if (!movie) return <div>Loading...</div>;

    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="error" />
            <h1>{movie.title}</h1>
            <h3>{movie.vote_average}</h3>
            <ul>
                {movie.genres.map((genre)=>{
                    return <li key={genre.id}>{genre.name}</li>
                })}
               
            </ul>

            <h3>{movie.overview}</h3>
        </div>
    )

}

export default MovieDetail;