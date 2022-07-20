import Home from "./pages/Home";
import About from "./pages/About";
import Trade from "./pages/Trade";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
  
  <div>
    <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/trade" element={<Trade />} />
  <Route path="/about" element={<About />} />
  <Route path="/auth" element={<Auth />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
  <Footer />
  </div>
)}


export default App;
