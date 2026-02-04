import React from 'react';
import { useNavigate } from 'react-router';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl font-bold">Unlimited movies, TV shows, and more</h1>
            <p className="mb-5 text-xl md:text-2xl">
              Starts at USD 2.99. Cancel anytime.
            </p>
            <p className="mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex flex-col md:flex-row gap-2 justify-center">
              <input
                type="text"
                placeholder="Email address"
                className="input input-bordered input-lg w-full md:w-96 bg-black/40 text-white border-gray-500"
              />
              <button onClick={() => navigate('/signup')} className="get-started-btn bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded">
                Get Started &gt;
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;