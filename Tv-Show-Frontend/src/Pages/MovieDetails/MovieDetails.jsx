import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        setShowPlayer(false);

        // Movie Details Fetch (IMDB API theke data asche)
        fetch(`https://api.imdbapi.dev/titles/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.titles && data.titles.length > 0) {
                    setMovie(data.titles[0]);
                } else {
                    setMovie(data);
                }
            })
            .catch(err => console.error("Error:", err));

        window.scrollTo(0, 0);
    }, [id]);

    if (!movie) return <div className='text-white p-10 font-bold'>Loading Movie Details...</div>;

    return (
        <div className="p-5 md:p-10 text-white bg-[#141414] min-h-screen">

            {/* Video Player Section */}
            {showPlayer && (
                <div className="w-full aspect-video mb-10 border-b border-gray-800 animate-in fade-in duration-500">
                    <iframe
                        src={`https://vidsrc.to/embed/movie/${id}`}
                        className="w-full h-full rounded-lg shadow-2xl"
                        allowFullScreen
                        title="Movie Player"
                    ></iframe>
                </div>
            )}

            {/* Movie Details Section */}
            <div className="flex flex-col md:flex-row gap-10 mb-10">
                {movie.primaryImage?.url && (
                    <img
                        src={movie.primaryImage.url}
                        alt={movie.primaryTitle}
                        className="w-full md:w-80 rounded-lg shadow-2xl border border-gray-700"
                    />
                )}

                <div className="flex-1">
                    <h1 className="text-5xl font-extrabold mb-4">{movie.primaryTitle}</h1>
                    <div className="flex items-center gap-6 mb-6">
                        <span className="text-yellow-400 text-xl font-bold">⭐ {movie.rating?.aggregateRating || 'N/A'}</span>
                        <span className="bg-gray-800 px-3 py-1 rounded text-sm uppercase tracking-widest">{movie.type}</span>
                        <span className="text-gray-400">{movie.startYear}</span>
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 text-gray-200">Plot Summary</h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                        {movie.plot || "No description available for this title."}
                    </p>

                    <button
                        onClick={() => {
                            setShowPlayer(true);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-white text-black px-10 py-4 mt-8 rounded-md font-black hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                        {showPlayer ? "NOW PLAYING" : "WATCH NOW"}
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            <div className="mt-10 p-6 bg-[#1a1a1a] rounded-lg border border-gray-800">
                <h3 className="text-white font-bold mb-4 text-xl">Comments</h3>
                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="What's on your mind?..."
                        className="flex-1 bg-[#0f0f0f] border border-gray-700 p-4 rounded text-white outline-none focus:border-red-600"
                    />
                    <button
                        onClick={() => {
                            if (newComment.trim()) {
                                setComments([...comments, newComment]);
                                setNewComment("");
                            }
                        }}
                        className="bg-red-600 px-8 py-3 rounded font-bold text-white hover:bg-red-700 transition"
                    >
                        POST
                    </button>
                </div>

                <div className="mt-8 space-y-4">
                    {comments.map((c, i) => (
                        <div key={i} className="bg-[#262626] p-4 rounded text-gray-300 text-sm border-l-4 border-red-600">
                            <span className="text-xs text-gray-500 block mb-1">User @{i + 101}</span>
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;