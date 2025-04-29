import './App.css'
import Login from './components/login'
import Home from './components/home'
import { useState } from 'react';



// src/App.tsx
function App() {
  const [route, setRoute] = useState("");

  function onLogin() {
    // Handle login logic here
    console.log("User logged in");
    setRoute("home");
  }

  return (
    <>
      {route === "home" ? (
        <Home />
      ) : (
        <Login onLogin={onLogin} />
      )}
    </>
  );
}

export default App;