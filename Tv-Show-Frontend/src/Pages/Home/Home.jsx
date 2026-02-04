import React from 'react';
import Banner from '../../Components/Banner';
import MovieRow from '../../Components/MovieRow';

const Home = () => {
    return (
        <div className='bg-[#141414] min-h-screen text-white'>
            <Banner></Banner>
            <div className='flex items-center gap-6 px-8 py-4 mt-4'>
                <h2 className='text-2xl font-bold'>Trending</h2>
                <div className='flex border border-gray-600 rounded-full overflow-hidden'>
                    <button className='bg-[#E50914] px-6 py-1 text-sm font-semibold'>Today</button>
                    <button className='px-6 py-1 text-sm font-semibold hover:bg-gray-800 transition'>This Week</button>
                </div>
                <div className='ml-auto flex items-center gap-2 text-sm text-gray-400 cursor-pointer hover:text-white'>
                    View all <span>→</span>
                </div>
            </div>

            <div className='p-8 py-4'>
                <MovieRow title="Popular Movies" fetchURL="https://api.imdbapi.dev/titles?types=MOVIE&startYear=2025" />
                <MovieRow title="Thriller Movies" fetchURL="https://api.imdbapi.dev/titles?genres=Thriller&types=MOVIE" />
                <MovieRow title="Popular Animation" fetchURL="https://api.imdbapi.dev/titles?genres=Animation&types=MOVIE " />
                <MovieRow title="Trending" fetchURL="https://api.imdbapi.dev/titles?types=MOVIE&startYear=2025" />
            </div>

        </div>
    );
};

export default Home;