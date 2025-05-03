import React from "react";

function MovieCard({poster, title, rating}) {

    
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster}`}  alt="no" />
            <h1>{title}</h1>
            <h3>{rating}</h3>
        </div>
    )
    
}


export default MovieCard;