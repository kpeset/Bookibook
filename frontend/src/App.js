import Home from "./pages/Home";
import About from "./pages/About";
import Trade from "./pages/Trade";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BookDetails from "./pages/BookDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExportContext from "./contexts/Contexts";

import React, { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

function App() {


  const { infoUser, setInfoUser } = useContext(ExportContext.Context);

  const myUser = localStorage.getItem("utilisateur")

  useEffect(() => {
setInfoUser(myUser)
  }, [])

  return (
  
  <div>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trade" element={<Trade />} />
  <Route path="/details" element={<BookDetails />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
  <Footer />
  </div>
)}


export default App;
