import './App.css'
import Login from './components/login'
import Home from './components/home'
import SignUp from './components/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './components/game'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/game" element={<Game />} />

       
      </Routes>
    </Router>
  );
};

export default App;