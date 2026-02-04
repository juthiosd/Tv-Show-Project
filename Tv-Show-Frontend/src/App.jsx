import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayouts from './Layouts/MainLayouts';
import Home from './Pages/Home/Home';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;