import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home></Home>
            },
            {
                path: "/SignIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/SignUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/movie/:id",
                element: <MovieDetails />
            }

        ]
    }
])
export default router;
