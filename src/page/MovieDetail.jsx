
import movieDetailData from '../data/movieDetailData.json'


function MovieDetail() {
    const {backdrop_path, name, vote_average, genres, overview } = movieDetailData

    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="error" />
            <h1>{name}</h1>
            <h3>{vote_average}</h3>
            <ul>
                {genres.map((genre)=>{
                    return <li key={genre.id}>{genre.name}</li>
                })}
               
            </ul>

            <h3>{overview}</h3>
        </div>
    )

}

export default MovieDetail;