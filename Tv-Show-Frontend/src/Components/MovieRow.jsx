import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieRow = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(fetchURL)
            .then(res => res.json())
            .then(data => setMovies(data.titles))
            .catch(err => console.log(err));
    }, [fetchURL]);

    return (
        <div className='my-10'>
            <h2 className='text-2xl font-bold mb-4 px-8'>{title}</h2>
            <div className='flex overflow-x-scroll scrollbar-hide px-8 gap-4'>

                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id} className="min-w-[200px] relative group cursor-pointer transition-transform duration-300 hover:scale-110">

                        {/* 1. Default Rating*/}
                        <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded-md z-20 border border-gray-600">
                            ⭐ {movie.rating?.aggregateRating || '7.1'}
                        </div>

                        {/* 2. Movie Poster */}
                        <img
                            src={movie.primaryImage?.url}
                            alt={movie.primaryTitle}
                            className="rounded-lg h-[300px] w-full object-cover shadow-lg"
                        />

                        {/* 3. Hover Details */}
                        <div className="absolute inset-0 bg-gradient-to from-black via-black/80 to-transparent flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">

                            <h3 className="text-white text-sm font-bold leading-tight mb-1">{movie.primaryTitle}</h3>

                            <p className="text-gray-400 text-[10px] line-clamp-2 mb-3">
                                {movie.plot || "Watch this amazing movie now."}
                            </p>

                            <div className="flex gap-2">
                                <button className="bg-white text-black text-[10px] font-black px-3 py-1.5 rounded hover:bg-red-600 hover:text-white transition-colors">
                                    PLAY
                                </button>
                                <button className="bg-gray-700/80 text-white text-[10px] px-2 py-1.5 rounded-full">
                                    +
                                </button>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieRow;