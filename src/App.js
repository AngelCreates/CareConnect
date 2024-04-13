import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Services from "./components/services";
import About from "./pages/About";
import Testimonials from "./components/Testimonials";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
