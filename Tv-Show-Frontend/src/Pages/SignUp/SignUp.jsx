import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import { Navigate, useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('object', email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                navigate('/'); // Eikhane 'navigate' use korun (choto hater n)
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        /* Netflix style Background */
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bca1-07b3f8dc14b8/f2439146-6dec-4e36-b97c-f236e680e60d/BD-en-20220211-popsignuptwoweeks-perspective_alpha_website_medium.jpg')` }}>

            {/* Sign Up Card */}
            <div className="bg-black/75 p-10 md:p-16 rounded-md w-full max-w-[450px] shadow-xl">
                <h1 className="text-3xl font-bold text-white mb-8">Sign Up</h1>

                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                    {/* Input Fields */}
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        className="w-full h-12 px-5 bg-[#333] text-white rounded border-none focus:outline-none focus:ring-1 focus:ring-gray-500"
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        className="w-full h-12 px-5 bg-[#333] text-white rounded border-none focus:outline-none focus:ring-1 focus:ring-gray-500"
                        required
                    />

                    {/* Netflix Red Button */}
                    <button className="w-full h-12 bg-[#e50914] hover:bg-[#c10710] text-white font-bold rounded mt-4 transition duration-200">
                        Sign Up
                    </button>

                    <div className="flex justify-between text-[#b3b3b3] text-sm mt-2 font-medium">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-[#b3b3b3]" /> Remember me
                        </label>
                        <span className="hover:underline cursor-pointer text-[#b3b3b3]">Need help?</span>
                    </div>
                </form>

                <div className="mt-12">
                    <p className="text-[#737373] mt-12">
                        Already have an account?
                        <span
                            className="text-white hover:underline cursor-pointer font-medium ml-1"
                            onClick={() => navigate('/signin')}
                        >
                            Sign in now.
                        </span>
                    </p>
                    <p className="text-[#8c8c8c] text-xs mt-4">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-[#0071eb] hover:underline cursor-pointer">Learn more.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;