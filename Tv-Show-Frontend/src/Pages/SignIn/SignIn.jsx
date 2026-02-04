import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.config';
import SignUp from '../SignUp/SignUp';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const navigate = useNavigate();
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //.log('object', email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //signed in
                // const user = userCredential.user;

                console.log(userCredential.user);
                navigate('/');
            })
            .catch((error) => {
                alert(error.message); // Error pele bolbe
            });

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black/70">
            <div className="bg-black/80 p-12 rounded-lg w-full max-w-md border border-gray-800">
                <h2 className="text-white text-3xl font-bold mb-8">Sign In</h2>
                <form className="space-y-4" action="" onSubmit={handleSignIn}>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        className="w-full p-4 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        className="w-full p-4 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button className="w-full bg-[#e50914] hover:bg-red-700 text-white font-bold py-3 rounded mt-6 transition">
                        Sign In
                    </button>
                </form>
                <p className="text-[#737373] mt-10">
                    New to Netflix?
                    <span
                        className="text-white hover:underline cursor-pointer font-medium ml-1"
                        onClick={() => navigate('/signup')}
                    >
                        Sign up now.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignIn;