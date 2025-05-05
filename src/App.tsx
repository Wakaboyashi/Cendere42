import './App.css'
import Login from './components/login'
import Home from './components/home'
import SignUp from './components/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />

       
      </Routes>
    </Router>
  );
};

export default App;