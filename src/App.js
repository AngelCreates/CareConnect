import React, { useContext } from "react";
import { Route, Routes, Switch, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Regiser from "./components/Register";
import Home from "./components/Home";

import { useSelector } from "react-redux";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const { currentUser: user } = useSelector((state) => state.user);

  return (
    <>
      <Routes>

        
        <Route path="/" exact element={user ? <Home /> : <Regiser />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Regiser />}
        />
        
      </Routes>
    </>
  );
}

export default App;
