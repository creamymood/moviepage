import React from "react";

function MovieCard({ poster, title, rating }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster}`;
  
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <p className="text-yellow-400 mt-1">⭐ {rating.toFixed(1)}</p>
        </div>
      </div>
    );
  }

  
export default MovieCard